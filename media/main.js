(function () {
    const vscode = acquireVsCodeApi();

    const categoryElements = document.querySelectorAll('.category');
    const searchInput = document.getElementById('search');
    const searchContainer = document.querySelector('.search-container');
    const emptyState = document.getElementById('empty-state');
    const clearSearchButton = document.getElementById('clear-search');
    const searchResults = document.getElementById('search-results');
    let isSticky = false;

    function handleScroll() {
        const shouldBeSticky = window.pageYOffset > 0;
        if (shouldBeSticky !== isSticky) {
            isSticky = shouldBeSticky;
            if (isSticky) {
                searchContainer.classList.add('sticky');
            } else {
                searchContainer.classList.remove('sticky');
            }
        }
    }

    window.addEventListener('scroll', handleScroll);

    searchInput.focus();

    categoryElements.forEach(category => {
        const title = category.querySelector('h2');
        const toggle = category.querySelector('.category-toggle');

        title.addEventListener('click', () => {
            toggleCategory(category);
        });
    });

    function toggleCategory(category) {
        category.classList.toggle('expanded');
        updateCategoryVisuals(category);
    }

    function updateCategoryVisuals(category) {
        const isExpanded = category.classList.contains('expanded');
        const toggle = category.querySelector('.category-toggle svg');
        const resources = category.querySelector('.resources');
        toggle.style.transform = isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
        resources.style.display = isExpanded ? 'grid' : 'none';
    }

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        let visibleResourcesCount = 0;
        categoryElements.forEach(category => {
            const resources = category.querySelectorAll('.resource');
            let categoryHasMatch = false;

            resources.forEach(resource => {
                const name = resource.dataset.name;
                const categoryName = resource.dataset.category;
                const isVisible = name.includes(searchTerm) || categoryName.includes(searchTerm);
                resource.style.display = isVisible ? '' : 'none';
                if (isVisible) {
                    categoryHasMatch = true;
                    visibleResourcesCount++;
                }
            });

            if (categoryHasMatch) {
                category.style.display = '';
                if (!category.classList.contains('expanded')) {
                    category.classList.add('expanded');
                    updateCategoryVisuals(category);
                }
            } else {
                category.style.display = searchTerm ? 'none' : '';
                if (category.classList.contains('expanded') && searchTerm) {
                    category.classList.remove('expanded');
                    updateCategoryVisuals(category);
                }
            }
        });

        // Update search results count
        if (searchTerm) {
            searchResults.textContent = `${visibleResourcesCount} result${visibleResourcesCount !== 1 ? 's' : ''}`;
        } else {
            searchResults.textContent = '';
        }

        // Show/hide empty state
        if (visibleResourcesCount === 0 && searchTerm) {
            emptyState.style.display = 'flex';
            document.getElementById('categories').style.display = 'none';
        } else {
            emptyState.style.display = 'none';
            document.getElementById('categories').style.display = 'block';
        }

        // Scroll to top if not already there
        if (window.pageYOffset > 0) {
            scrollToTop();
        }
    }

    searchInput.addEventListener('input', performSearch);

    clearSearchButton.addEventListener('click', () => {
        searchInput.value = '';
        performSearch();
        searchInput.focus();
    });

    // Trigger initial check for sticky state
    handleScroll();

    // Footer button click handlers
    document.querySelectorAll('.footer-button').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            vscode.postMessage({
                command: 'openExternalLink',
                url: button.href
            });
        });
    });
})();



