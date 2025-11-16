import recipes from './recipes.mjs';

// Function to generate star rating HTML
function generateRating(rating) {
    const maxStars = 5;
    let starsHTML = '';
    
    // Add filled stars
    for (let i = 0; i < rating; i++) {
        starsHTML += '<span aria-hidden="true" class="icon-star">⭐</span>';
    }
    
    // Add empty stars
    for (let i = rating; i < maxStars; i++) {
        starsHTML += '<span aria-hidden="true" class="icon-star-empty">☆</span>';
    }
    
    return `<span class="rating" role="img" aria-label="Rating: ${rating} out of ${maxStars} stars">${starsHTML}</span>`;
}

// Function to generate tags HTML
function generateTags(tags) {
    return tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

// Function to create a recipe card
function createRecipeCard(recipe) {
    return `
        <article class="recipe">
            <div class="recipe-image-container">
                <img src="${recipe.image}" alt="${recipe.name}" class="recipe-image">
            </div>
            <div class="recipe-content">
                <div class="recipe-tags">
                    ${generateTags(recipe.tags)}
                </div>
                <h2>${recipe.name}</h2>
                ${generateRating(recipe.rating)}
                <p class="recipe-description">${recipe.description}</p>
            </div>
        </article>
    `;
}

function renderRecipes(recipesToRender = recipes) {
    const recipeList = document.getElementById('recipe-list');
    const recipesHTML = recipesToRender.map(recipe => createRecipeCard(recipe)).join('');
    recipeList.innerHTML = recipesHTML;
}

function filterRecipes(query) {
    if (!query.trim()) {
        renderRecipes(recipes);
        return;
    }
    
    const searchTerm = query.toLowerCase();
    const filtered = recipes.filter(recipe => {
        return (
            recipe.name.toLowerCase().includes(searchTerm) ||
            recipe.description.toLowerCase().includes(searchTerm) ||
            recipe.tags.some(tag => tag.toLowerCase().includes(searchTerm)) ||
            recipe.recipeIngredient.some(ingredient => 
                ingredient.toLowerCase().includes(searchTerm)
            )
        );
    });
    
    renderRecipes(filtered);
}

function init() {
    renderRecipes();
    
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.getElementById('search-input');
    
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        filterRecipes(searchInput.value);
    });
    
    searchInput.addEventListener('input', (e) => {
        filterRecipes(e.target.value);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}