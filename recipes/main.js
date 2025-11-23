import recipes from './recipes.mjs';

// Function to generate a random number between 0 and num (exclusive)
function random(num) {
    return Math.floor(Math.random() * num);
}

// Function to get a random entry from a list
function getRandomListEntry(list) {
    const listLength = list.length;
    const randomNum = random(listLength);
    return list[randomNum];
}

// Function to generate star rating HTML
function ratingTemplate(rating) {
    const maxStars = 5;
    let html = `<span class="rating" role="img" aria-label="Rating: ${rating} out of 5 stars">`;

    // Add filled stars
    for (let i = 0; i < rating; i++) {
        html += '<span aria-hidden="true" class="icon-star">⭐</span>';
    }

    // Add empty stars
    for (let i = rating; i < maxStars; i++) {
        html += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }

    html += '</span>';
    return html;
}

// Function to generate tags HTML
function tagsTemplate(tags) {
    return tags.map(tag => `<li>${tag}</li>`).join('');
}

// Function to create a recipe card using template
function recipeTemplate(recipe) {
    return `<figure class="recipe">
        <img src="${recipe.image}" alt="image of ${recipe.name}" />
        <figcaption>
            <ul class="recipe__tags">
                ${tagsTemplate(recipe.tags)}
            </ul>
            <h2><a href="#">${recipe.name}</a></h2>
            <p class="recipe__ratings">
                ${ratingTemplate(recipe.rating)}
            </p>
            <p class="recipe__description">
                ${recipe.description}
            </p>
        </figcaption>
    </figure>`;
}

// Function to render a list of recipes
function renderRecipes(recipeList) {
    const recipeListElement = document.getElementById('recipe-list');
    const recipesHTML = recipeList.map(recipe => recipeTemplate(recipe)).join('');
    recipeListElement.innerHTML = recipesHTML;
}

// Function to filter recipes based on search query
function filter(query) {
    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(query) ||
            recipe.description.toLowerCase().includes(query) ||
            recipe.tags.find(tag => tag.toLowerCase().includes(query)) ||
            recipe.recipeIngredient.find(ingredient =>
                ingredient.toLowerCase().includes(query)
            )
        );
    });

    // Sort by name alphabetically
    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

    return sorted;
}

// Search handler function
function searchHandler(e) {
    e.preventDefault();
    // Get the search input
    const searchInput = document.getElementById('search-input');
    // Convert the value in the input to lowercase
    const query = searchInput.value.toLowerCase();

    // If query is empty, show a random recipe
    if (!query.trim()) {
        const recipe = getRandomListEntry(recipes);
        renderRecipes([recipe]);
        return;
    }

    // Use the filter function to filter our recipes
    const filtered = filter(query);
    // Render the filtered list
    renderRecipes(filtered);
}

// Initialize the page
function init() {
    // Get a random recipe
    const recipe = getRandomListEntry(recipes);
    // Render the recipe with renderRecipes
    renderRecipes([recipe]);

    // Set up search functionality
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('search-input');

    // Handle form submission
    searchForm.addEventListener('submit', searchHandler);

    // Handle input changes for real-time search (optional enhancement)
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();

        // If query is empty, show a random recipe
        if (!query.trim()) {
            const recipe = getRandomListEntry(recipes);
            renderRecipes([recipe]);
            return;
        }

        const filtered = filter(query);
        renderRecipes(filtered);
    });
}

// Run init when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}