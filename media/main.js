(function () {
    const vscode = acquireVsCodeApi();
    const isPanelMode = document.body.classList.contains('panel-mode');

    // ── Panel mode ────────────────────────────────────────────────
    if (isPanelMode) {
        initPanelMode();
        return;
    }

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
        if (resources) resources.style.display = isExpanded ? (isPanelMode ? 'grid' : 'flex') : 'none';
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

    // ── New resources banner ──
    const dismissNewBtn = document.getElementById('dismiss-new');
    if (dismissNewBtn) {
        dismissNewBtn.addEventListener('click', () => {
            document.getElementById('new-banner')?.remove();
            vscode.postMessage({ command: 'dismissNew' });
        });
    }

    const showNewBtn = document.getElementById('show-new');
    if (showNewBtn) {
        showNewBtn.addEventListener('click', () => {
            // Filter to show only resources with badge-new
            let count = 0;
            categoryElements.forEach(category => {
                const resources = category.querySelectorAll('.resource');
                let hasNew = false;
                resources.forEach(resource => {
                    const isNew = resource.querySelector('.badge-new') !== null;
                    resource.style.display = isNew ? '' : 'none';
                    if (isNew) { hasNew = true; count++; }
                });
                if (hasNew) {
                    category.style.display = '';
                    if (!category.classList.contains('expanded')) {
                        category.classList.add('expanded');
                        updateCategoryVisuals(category);
                    }
                } else {
                    category.style.display = 'none';
                }
            });
            document.getElementById('new-banner')?.remove();
            vscode.postMessage({ command: 'dismissNew' });
        });
    }

    // ── Pop out panel ──
    document.getElementById('open-panel-btn')?.addEventListener('click', () => {
        vscode.postMessage({ command: 'openPanel' });
    });

    // ── Panel mode init ───────────────────────────────────────────
    function initPanelMode() {
        const cards = document.querySelectorAll('.pcard');
        const grid = document.getElementById('panel-grid');
        const emptyState = document.getElementById('empty-state');
        const emptyStateTitle = document.getElementById('empty-state-title');
        const emptyStateMsg = document.getElementById('empty-state-msg');
        const clearSearchBtn = document.getElementById('clear-search');
        const searchInput = document.getElementById('search');
        const searchResults = document.getElementById('search-results');
        const navItems = document.querySelectorAll('.pnav-item');
        const favBtn = document.getElementById('favorites-filter');
        let favorites = new Set();
        let activeFilter = 'all';
        let searchTerm = '';
        let showingFavorites = false;

        // Message handler
        window.addEventListener('message', event => {
            const msg = event.data;
            if (msg.command === 'setFavorites') {
                favorites = new Set(msg.favorites);
                updateFavButtons();
                if (showingFavorites) applyFilters();
            }
        });

        vscode.postMessage({ command: 'getFavorites' });

        // Favorite buttons
        function updateFavButtons() {
            document.querySelectorAll('.resource-favorite').forEach(btn => {
                const isFav = favorites.has(btn.dataset.url);
                btn.classList.toggle('favorited', isFav);
                btn.setAttribute('aria-label', isFav ? 'Remove from favorites' : 'Add to favorites');
                const svg = btn.querySelector('svg');
                if (svg) svg.style.fill = isFav ? '#ff6b81' : '';
                if (svg) svg.style.color = isFav ? '#ff6b81' : '';
            });
        }

        document.querySelectorAll('.resource-favorite').forEach(btn => {
            btn.addEventListener('click', e => {
                e.preventDefault();
                e.stopPropagation();
                vscode.postMessage({ command: 'toggleFavorite', url: btn.dataset.url });
            });
        });

        // External links
        document.querySelectorAll('.header-action-btn').forEach(btn => {
            if (btn.tagName === 'A') return; // handled by target="_blank" natively
        });

        // Nav filter
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navItems.forEach(n => n.classList.remove('active'));
                item.classList.add('active');
                activeFilter = item.dataset.filter;
                showingFavorites = false;
                favBtn.classList.remove('active');
                favBtn.setAttribute('aria-pressed', 'false');
                applyFilters();
            });
        });

        // Favorites filter
        favBtn?.addEventListener('click', () => {
            showingFavorites = !showingFavorites;
            favBtn.classList.toggle('active', showingFavorites);
            favBtn.setAttribute('aria-pressed', String(showingFavorites));
            if (showingFavorites) {
                navItems.forEach(n => n.classList.remove('active'));
                activeFilter = 'all';
            }
            applyFilters();
        });

        // Search
        let debounce;
        searchInput?.addEventListener('input', () => {
            clearTimeout(debounce);
            debounce = setTimeout(() => {
                searchTerm = searchInput.value.toLowerCase().trim();
                applyFilters();
            }, 150);
        });

        clearSearchBtn?.addEventListener('click', () => {
            searchInput.value = '';
            searchTerm = '';
            applyFilters();
            searchInput.focus();
        });

        function applyFilters() {
            let visible = 0;
            cards.forEach(card => {
                const matchCat = activeFilter === 'all' || card.dataset.category === activeFilter.toLowerCase();
                const matchSearch = !searchTerm ||
                    card.dataset.name.includes(searchTerm) ||
                    card.dataset.desc.includes(searchTerm) ||
                    card.dataset.category.includes(searchTerm);
                const matchFav = !showingFavorites || favorites.has(card.dataset.url);
                const show = matchCat && matchSearch && matchFav;
                card.style.display = show ? '' : 'none';
                if (show) visible++;
            });

            if (searchTerm) {
                searchResults.textContent = `${visible} result${visible !== 1 ? 's' : ''}`;
            } else {
                searchResults.textContent = '';
            }

            const hasResults = visible > 0;
            grid.style.display = hasResults ? '' : 'none';
            emptyState.style.display = hasResults ? 'none' : 'flex';

            if (!hasResults) {
                if (showingFavorites) {
                    emptyStateTitle.textContent = 'No favorites yet';
                    emptyStateMsg.textContent = 'Click the ♡ on any card to save it here.';
                    clearSearchBtn.style.display = 'none';
                } else {
                    emptyStateTitle.textContent = 'No results found';
                    emptyStateMsg.textContent = 'Try a different search term or category.';
                    clearSearchBtn.style.display = '';
                }
            }
        }

        // Collapse button
        document.getElementById('collapse-panel-btn')?.addEventListener('click', () => {
            vscode.postMessage({ command: 'collapsePanel' });
        });

        searchInput?.focus();
    }
})();
