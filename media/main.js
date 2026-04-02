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

    // ── Category toggle ──
    categoryElements.forEach(category => {
        category.querySelector('h2').addEventListener('click', () => {
            // User manually toggled — clear any search-opened marker
            delete category.dataset.searchOpened;
            category.classList.toggle('expanded');
            updateCategoryVisuals(category);
        });
    });

    function updateCategoryVisuals(category) {
        const isExpanded = category.classList.contains('expanded');
        const toggleSvg = category.querySelector('.category-toggle svg');
        const resources = category.querySelector('.resources');
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

    searchInput.addEventListener('input', performSearch);
    searchInput.focus();

    clearSearchButton.addEventListener('click', () => {
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
