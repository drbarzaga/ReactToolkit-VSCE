(function () {
    const vscode = acquireVsCodeApi();

    const categoryElements = document.querySelectorAll('.category');
    const searchInput = document.getElementById('search');
    const searchContainer = document.querySelector('.search-container');
    const emptyState = document.getElementById('empty-state');
    const emptyStateTitle = document.getElementById('empty-state-title');
    const emptyStateMsg = document.getElementById('empty-state-msg');
    const clearSearchButton = document.getElementById('clear-search');
    const searchResults = document.getElementById('search-results');
    const favoritesFilterBtn = document.getElementById('favorites-filter');
    let isSticky = false;
    let favorites = new Set();
    let showingFavorites = false;

    // ── Sticky search bar ──
    function handleScroll() {
        const shouldBeSticky = window.pageYOffset > 0;
        if (shouldBeSticky !== isSticky) {
            isSticky = shouldBeSticky;
            searchContainer.classList.toggle('sticky', isSticky);
        }
    }
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // ── State persistence ──
    function saveState() {
        const expanded = [];
        categoryElements.forEach(cat => {
            if (cat.classList.contains('expanded')) {
                expanded.push(cat.dataset.categoryName);
            }
        });
        vscode.postMessage({ command: 'saveState', expandedCategories: expanded });
    }

    window.addEventListener('message', event => {
        const message = event.data;
        if (message.command === 'setState') {
            const expanded = new Set(message.expandedCategories);
            categoryElements.forEach(cat => {
                const name = cat.dataset.categoryName;
                if (expanded.has(name)) {
                    cat.classList.add('expanded');
                } else {
                    cat.classList.remove('expanded');
                }
                updateCategoryVisuals(cat);
            });
        } else if (message.command === 'setFavorites') {
            favorites = new Set(message.favorites);
            updateFavoriteButtons();
            if (showingFavorites) applyFavoritesFilter();
        }
    });

    vscode.postMessage({ command: 'getState' });
    vscode.postMessage({ command: 'getFavorites' });

    // ── Category toggle ──
    categoryElements.forEach(category => {
        const h2 = category.querySelector('h2');
        function toggleCategory() {
            if (showingFavorites) return;
            delete category.dataset.searchOpened;
            category.classList.toggle('expanded');
            updateCategoryVisuals(category);
            saveState();
        }
        h2.addEventListener('click', toggleCategory);
        h2.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleCategory();
            }
        });
    });

    function updateCategoryVisuals(category) {
        const isExpanded = category.classList.contains('expanded');
        const h2 = category.querySelector('h2');
        const toggleSvg = category.querySelector('.category-toggle svg');
        const resources = category.querySelector('.resources');
        if (h2) h2.setAttribute('aria-expanded', String(isExpanded));
        if (toggleSvg) toggleSvg.style.transform = isExpanded ? 'rotate(180deg)' : '';
        if (resources) resources.style.display = isExpanded ? 'flex' : 'none';
    }

    // ── Favorites ──
    function updateFavoriteButtons() {
        document.querySelectorAll('.resource-favorite').forEach(btn => {
            const url = btn.dataset.url;
            const isFav = favorites.has(url);
            btn.classList.toggle('favorited', isFav);
            btn.setAttribute('aria-label', isFav ? 'Remove from favorites' : 'Add to favorites');
            btn.setAttribute('title', isFav ? 'Remove from favorites' : 'Add to favorites');
        });
    }

    document.querySelectorAll('.resource-favorite').forEach(btn => {
        btn.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            vscode.postMessage({ command: 'toggleFavorite', url: btn.dataset.url });
        });
    });

    favoritesFilterBtn.addEventListener('click', () => {
        showingFavorites = !showingFavorites;
        favoritesFilterBtn.classList.toggle('active', showingFavorites);
        favoritesFilterBtn.setAttribute('aria-pressed', String(showingFavorites));
        if (showingFavorites) {
            searchInput.value = '';
            searchResults.textContent = '';
            applyFavoritesFilter();
        } else {
            clearFavoritesFilter();
        }
    });

    function applyFavoritesFilter() {
        let count = 0;
        categoryElements.forEach(category => {
            const resources = category.querySelectorAll('.resource');
            let hasMatch = false;
            resources.forEach(resource => {
                const isFav = favorites.has(resource.dataset.url);
                resource.style.display = isFav ? '' : 'none';
                if (isFav) { hasMatch = true; count++; }
            });
            if (hasMatch) {
                category.style.display = '';
                if (!category.classList.contains('expanded')) {
                    category.classList.add('expanded');
                    updateCategoryVisuals(category);
                }
            } else {
                category.style.display = 'none';
            }
        });

        document.getElementById('categories').style.display = count > 0 ? '' : 'none';

        if (count === 0) {
            emptyStateTitle.textContent = 'No favorites yet';
            emptyStateMsg.textContent = 'Click the ♡ on any resource to save it here.';
            clearSearchButton.style.display = 'none';
            emptyState.style.display = 'flex';
        } else {
            emptyState.style.display = 'none';
        }
    }

    function clearFavoritesFilter() {
        categoryElements.forEach(category => {
            category.style.display = '';
            category.querySelectorAll('.resource').forEach(r => r.style.display = '');
            if (category.dataset.searchOpened) {
                category.classList.remove('expanded');
                updateCategoryVisuals(category);
                delete category.dataset.searchOpened;
            }
        });
        emptyState.style.display = 'none';
        emptyStateTitle.textContent = 'No results found';
        emptyStateMsg.textContent = 'Try adjusting your search or explore our categories.';
        clearSearchButton.style.display = '';
        document.getElementById('categories').style.display = '';
    }

    // ── Search ──
    function performSearch() {
        if (showingFavorites) {
            showingFavorites = false;
            favoritesFilterBtn.classList.remove('active');
            favoritesFilterBtn.setAttribute('aria-pressed', 'false');
            clearFavoritesFilter();
        }

        const searchTerm = searchInput.value.toLowerCase().trim();

        if (!searchTerm) {
            categoryElements.forEach(category => {
                category.style.display = '';
                category.querySelectorAll('.resource').forEach(r => r.style.display = '');
                if (category.dataset.searchOpened) {
                    category.classList.remove('expanded');
                    updateCategoryVisuals(category);
                    delete category.dataset.searchOpened;
                }
            });
            searchResults.textContent = '';
            emptyState.style.display = 'none';
            document.getElementById('categories').style.display = '';
            return;
        }

        let visibleCount = 0;

        categoryElements.forEach(category => {
            const resources = category.querySelectorAll('.resource');
            let hasMatch = false;

            resources.forEach(resource => {
                const matches =
                    resource.dataset.name.includes(searchTerm) ||
                    resource.dataset.category.includes(searchTerm);
                resource.style.display = matches ? '' : 'none';
                if (matches) { hasMatch = true; visibleCount++; }
            });

            if (hasMatch) {
                category.style.display = '';
                if (!category.classList.contains('expanded')) {
                    category.classList.add('expanded');
                    category.dataset.searchOpened = 'true';
                    updateCategoryVisuals(category);
                }
            } else {
                category.style.display = 'none';
            }
        });

        searchResults.textContent = `${visibleCount} result${visibleCount !== 1 ? 's' : ''}`;

        if (visibleCount === 0) {
            emptyState.style.display = 'flex';
            document.getElementById('categories').style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            document.getElementById('categories').style.display = '';
        }

        if (window.pageYOffset > 0) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    let debounceTimer;
    searchInput.addEventListener('input', () => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(performSearch, 200);
    });
    searchInput.focus();

    clearSearchButton.addEventListener('click', () => {
        clearTimeout(debounceTimer);
        searchInput.value = '';
        performSearch();
        searchInput.focus();
    });

    // ── Footer links ──
    document.querySelectorAll('.footer-button').forEach(button => {
        button.addEventListener('click', e => {
            e.preventDefault();
            vscode.postMessage({ command: 'openExternalLink', url: button.href });
        });
    });
})();
