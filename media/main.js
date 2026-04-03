(function () {
    const vscode = acquireVsCodeApi();

    const categoryElements = document.querySelectorAll('.category');
    const searchInput = document.getElementById('search');
    const searchContainer = document.querySelector('.search-container');
    const emptyState = document.getElementById('empty-state');
    const clearSearchButton = document.getElementById('clear-search');
    const searchResults = document.getElementById('search-results');
    let isSticky = false;

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
        }
    });

    vscode.postMessage({ command: 'getState' });

    // ── Category toggle ──
    categoryElements.forEach(category => {
        const h2 = category.querySelector('h2');
        function toggleCategory() {
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

    // ── Search ──
    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase().trim();

        // When search is cleared: restore original (collapsed) state
        if (!searchTerm) {
            categoryElements.forEach(category => {
                category.style.display = '';
                category.querySelectorAll('.resource').forEach(r => r.style.display = '');

                // Only collapse categories that were opened by search, not by the user
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
                    category.dataset.searchOpened = 'true'; // mark: opened by search
                    updateCategoryVisuals(category);
                }
            } else {
                category.style.display = 'none';
            }
        });

        // Results badge
        searchResults.textContent = `${visibleCount} result${visibleCount !== 1 ? 's' : ''}`;

        // Empty state
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
