// Menu Toggle Functionality
const menuButton = document.querySelector(".menu-button");

function toggleMenu() {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);

// Window Resize Handler
function handleResize() {
  const menu = document.querySelector(".menu");
  if (window.innerWidth > 1000) {
    menu.classList.remove("hide");
  } else {
    menu.classList.add("hide");
  }
}

handleResize();
window.addEventListener("resize", handleResize);

// Image Viewer Modal Functionality
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('.viewer');
const modalImg = modal.querySelector('img');
const closeButton = document.querySelector('.close-viewer');

function viewHandler(event) {
  // Find the clicked image
  const clickedImg = event.target.closest('img');
  
  // If an image was clicked
  if (clickedImg) {
    // Get the source and alt text
    const src = clickedImg.src;
    const alt = clickedImg.alt;
    
    // Replace 'sm' with 'full' in the filename
    const fullSrc = src.split('-')[0] + '-full.jpeg';
    
    modalImg.src = fullSrc;
    modalImg.alt = alt;
    
    modal.showModal();
  }
}

function closeViewer() {
  modal.close();
}

// Add event listener to gallery for clicking images
gallery.addEventListener('click', viewHandler);

// Add event listener to close button
closeButton.addEventListener('click', closeViewer);

// Close modal when clicking outside the image
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.close();
  }
});