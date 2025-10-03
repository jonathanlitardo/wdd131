document.getElementById('menuButton').addEventListener('click', () => {
  const nav = document.querySelector('nav ul');
  nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
});
