const themeSelector = document.querySelector('select');
function changeTheme() {
    const currentTheme = themeSelector.value;
    
    if (currentTheme === 'dark') {
        document.body.classList.add('dark');
        const logoImg = document.querySelector('img');
        if (logoImg) {
            logoImg.src = 'byui-logo_white.png';
        }
    } else {
        document.body.classList.remove('dark');
        const logoImg = document.querySelector('img');
        if (logoImg) {
            logoImg.src = 'byui-logo_blue.webp';
        }
    }
}
themeSelector.addEventListener('change', changeTheme);