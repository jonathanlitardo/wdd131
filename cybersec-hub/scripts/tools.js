// tools.js - Security Tools Page Functionality
// Filtering, Search, and Modal

import { securityTools, getToolsByCategory, getToolsByDifficulty, searchTools, getToolById } from './tools-data.js';

// ============================================
// DOM Elements
// ============================================
const toolsGrid = document.getElementById('tools-grid');
const searchInput = document.getElementById('search-input');
const clearSearchBtn = document.getElementById('clear-search');
const categoryFilters = document.getElementById('category-filters');
const difficultyFilters = document.getElementById('difficulty-filters');
const resultsCount = document.getElementById('results-count');
const resetFiltersBtn = document.getElementById('reset-filters');
const clearAllFiltersBtn = document.getElementById('clear-all-filters');
const noResults = document.getElementById('no-results');

// Modal elements
const modal = document.getElementById('tool-modal');
const modalClose = document.getElementById('modal-close');
const modalIcon = document.getElementById('modal-icon');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDifficulty = document.getElementById('modal-difficulty');
const modalDescription = document.getElementById('modal-description');
const modalUsecases = document.getElementById('modal-usecases');
const modalCommands = document.getElementById('modal-commands');
const modalLinks = document.getElementById('modal-links');
const modalOfficialLink = document.getElementById('modal-official-link');

// Mobile menu
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

// ============================================
// State
// ============================================
let currentCategory = 'all';
let currentDifficulty = 'all';
let currentSearch = '';

// ============================================
// Mobile Menu Toggle
// ============================================
if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

// ============================================
// Render Tools
// ============================================
function renderTools(tools) {
  if (!toolsGrid) return;
  
  if (tools.length === 0) {
    toolsGrid.style.display = 'none';
    noResults.style.display = 'block';
    resultsCount.textContent = 'No tools found';
    return;
  }
  
  toolsGrid.style.display = 'grid';
  noResults.style.display = 'none';
  resultsCount.textContent = `Showing ${tools.length} tool${tools.length !== 1 ? 's' : ''}`;
  
  toolsGrid.innerHTML = tools.map((tool, index) => `
    <div class="tool-card" data-id="${tool.id}" style="animation-delay: ${index * 0.05}s">
      <div class="tool-card-header">
        <div class="tool-icon">
          <img src="${tool.image}" alt="${tool.name}" class="tool-logo" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'${tool.icon}\\'></i>';">
        </div>
        <div class="tool-title-group">
          <h3>${tool.name}</h3>
          <div class="tool-badges">
            <span class="badge category-badge">${formatCategory(tool.category)}</span>
            <span class="badge difficulty-badge ${tool.difficulty}">${capitalize(tool.difficulty)}</span>
          </div>
        </div>
      </div>
      <p>${tool.shortDescription}</p>
      <div class="tool-card-footer">
        <span><i class="fas fa-arrow-right"></i> Learn more</span>
      </div>
    </div>
  `).join('');
  
  // Add click handlers to cards
  document.querySelectorAll('.tool-card').forEach(card => {
    card.addEventListener('click', () => {
      const toolId = parseInt(card.dataset.id);
      openModal(toolId);
    });
  });
}

// ============================================
// Filter Tools
// ============================================
function filterTools() {
  let filtered = [...securityTools];
  
  // Apply category filter
  if (currentCategory !== 'all') {
    filtered = filtered.filter(tool => tool.category === currentCategory);
  }
  
  // Apply difficulty filter
  if (currentDifficulty !== 'all') {
    filtered = filtered.filter(tool => tool.difficulty === currentDifficulty);
  }
  
  // Apply search filter
  if (currentSearch) {
    const query = currentSearch.toLowerCase();
    filtered = filtered.filter(tool => 
      tool.name.toLowerCase().includes(query) ||
      tool.shortDescription.toLowerCase().includes(query) ||
      tool.fullDescription.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query)
    );
  }
  
  renderTools(filtered);
}

// ============================================
// Category Filters
// ============================================
if (categoryFilters) {
  categoryFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    
    // Update active state
    categoryFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update filter and re-render
    currentCategory = btn.dataset.filter;
    filterTools();
  });
}

// ============================================
// Difficulty Filters
// ============================================
if (difficultyFilters) {
  difficultyFilters.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-btn');
    if (!btn) return;
    
    // Update active state
    difficultyFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    
    // Update filter and re-render
    currentDifficulty = btn.dataset.difficulty;
    filterTools();
  });
}

// ============================================
// Search
// ============================================
if (searchInput) {
  searchInput.addEventListener('input', (e) => {
    currentSearch = e.target.value;
    clearSearchBtn.style.display = currentSearch ? 'block' : 'none';
    filterTools();
  });
}

if (clearSearchBtn) {
  clearSearchBtn.addEventListener('click', () => {
    searchInput.value = '';
    currentSearch = '';
    clearSearchBtn.style.display = 'none';
    filterTools();
  });
}

// ============================================
// Reset Filters
// ============================================
function resetAllFilters() {
  currentCategory = 'all';
  currentDifficulty = 'all';
  currentSearch = '';
  
  if (searchInput) searchInput.value = '';
  if (clearSearchBtn) clearSearchBtn.style.display = 'none';
  
  // Reset filter buttons
  categoryFilters?.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === 'all');
  });
  
  difficultyFilters?.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.difficulty === 'all');
  });
  
  filterTools();
}

if (resetFiltersBtn) {
  resetFiltersBtn.addEventListener('click', resetAllFilters);
}

if (clearAllFiltersBtn) {
  clearAllFiltersBtn.addEventListener('click', resetAllFilters);
}

// ============================================
// Modal
// ============================================
function openModal(toolId) {
  const tool = getToolById(toolId);
  if (!tool || !modal) return;
  
  // Populate modal content
  modalIcon.innerHTML = `<img src="${tool.image}" alt="${tool.name}" class="modal-tool-logo" onerror="this.style.display='none'; this.parentElement.innerHTML='<i class=\\'${tool.icon}\\'></i>';">`;
  modalTitle.textContent = tool.name;
  modalCategory.textContent = formatCategory(tool.category);
  modalDifficulty.textContent = capitalize(tool.difficulty);
  modalDifficulty.className = `badge difficulty-badge ${tool.difficulty}`;
  modalDescription.textContent = tool.fullDescription;
  
  // Use cases
  modalUsecases.innerHTML = tool.useCases.map(uc => `<li>${uc}</li>`).join('');
  
  // Commands
  modalCommands.innerHTML = tool.commands.map(cmd => 
    `<code>${cmd.startsWith('#') ? `<span class="comment">${cmd}</span>` : `<span class="command">${cmd}</span>`}</code>`
  ).join('');
  
  // Installation section
  const installSection = document.getElementById('modal-installation');
  if (installSection && tool.installation) {
    installSection.innerHTML = `
      <div class="install-item"><strong><i class="fab fa-windows"></i> Windows:</strong> ${tool.installation.windows}</div>
      <div class="install-item"><strong><i class="fab fa-linux"></i> Linux:</strong> ${tool.installation.linux}</div>
      <div class="install-item"><strong><i class="fab fa-apple"></i> macOS:</strong> ${tool.installation.mac}</div>
    `;
  }
  
  // YouTube tutorials
  const youtubeSection = document.getElementById('modal-youtube');
  if (youtubeSection && tool.youtube) {
    youtubeSection.innerHTML = tool.youtube.map(yt => 
      `<a href="${yt.url}" target="_blank" rel="noopener" class="youtube-link">
        <i class="fab fa-youtube"></i>
        <span>
          <strong>${yt.title}</strong>
          <small>${yt.channel}</small>
        </span>
      </a>`
    ).join('');
  }
  
  // Resources with type icons
  modalLinks.innerHTML = tool.resources.map(res => {
    let icon = 'fas fa-external-link-alt';
    if (res.type === 'docs') icon = 'fas fa-book';
    else if (res.type === 'course') icon = 'fas fa-graduation-cap';
    else if (res.type === 'practice') icon = 'fas fa-flask';
    else if (res.type === 'database') icon = 'fas fa-database';
    else if (res.type === 'cheatsheet') icon = 'fas fa-file-alt';
    else if (res.type === 'extensions') icon = 'fas fa-puzzle-piece';
    else if (res.type === 'community') icon = 'fas fa-users';
    else if (res.type === 'blog') icon = 'fas fa-rss';
    
    return `<a href="${res.url}" target="_blank" rel="noopener"><i class="${icon}"></i> ${res.name}</a>`;
  }).join('');
  
  // Official link
  modalOfficialLink.href = tool.officialLink;
  
  // Show modal
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('active');
  document.body.style.overflow = '';
}

if (modalClose) {
  modalClose.addEventListener('click', closeModal);
}

if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeModal();
  }
});

// ============================================
// Helper Functions
// ============================================
function formatCategory(category) {
  const categories = {
    network: 'Network',
    pentesting: 'Pentesting',
    forensics: 'Forensics',
    web: 'Web Security',
    osint: 'OSINT'
  };
  return categories[category] || category;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ============================================
// Initialize
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderTools(securityTools);
});
