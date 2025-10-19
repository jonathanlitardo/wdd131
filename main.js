// Portfolio page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add fade-in animation on page load
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    setTimeout(() => {
        container.style.transition = 'opacity 0.5s ease-in';
        container.style.opacity = '1';
    }, 100);

    // Log page visit
    console.log('WDD 131 Portfolio loaded successfully');
    console.log('Current year:', new Date().getFullYear());
});

// Optional: Add dynamic year to footer
function updateFooterYear() {
    const footer = document.querySelector('.footer');
    const currentYear = new Date().getFullYear();
    footer.textContent = `© ${currentYear} JUN · WDD 131`;
}

// Call the function when page loads
updateFooterYear();