(function () {
    const vscode = acquireVsCodeApi();

    const categoryElements = document.querySelectorAll('.category');
    const searchInput = document.getElementById('search');
    const resourceElements = document.querySelectorAll('.resource');

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

    function performSearch() {
        const searchTerm = searchInput.value.toLowerCase();

        let hasVisibleResources = false;
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
                    hasVisibleResources = true;
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

        // Show/hide "No results" message
        const noResultsMessage = document.getElementById('no-results-message');
        if (noResultsMessage) {
            noResultsMessage.style.display = hasVisibleResources || !searchTerm ? 'none' : 'block';
        }
    }

    searchInput.addEventListener('input', performSearch);

    categoryElements.forEach(category => {
        category.classList.add('expanded');
        updateCategoryVisuals(category);
    });
})();

