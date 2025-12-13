// main.js - Home Page Functionality

import { getBalancedQuestions } from './quiz-data.js';
import { ciaData } from './cia-triad-data.js';
import { attackTypes, getSeverityClass } from './attack-types.js';

// ============================================
// Mobile Menu Toggle
// ============================================
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenuBtn.classList.toggle('active');
  });
}

// ============================================
// Password Strength Analyzer
// ============================================
const passwordInput = document.getElementById('password-input');
const toggleVisibility = document.getElementById('toggle-visibility');
const meterFill = document.getElementById('meter-fill');
const strengthLabel = document.getElementById('strength-label');
const crackTimeValue = document.getElementById('crack-time-value');

// Feedback elements
const feedbackIcons = {
  length: document.getElementById('length-icon'),
  uppercase: document.getElementById('uppercase-icon'),
  lowercase: document.getElementById('lowercase-icon'),
  numbers: document.getElementById('numbers-icon'),
  symbols: document.getElementById('symbols-icon'),
  patterns: document.getElementById('patterns-icon')
};

const feedbackTexts = {
  length: document.getElementById('length-feedback'),
  uppercase: document.getElementById('uppercase-feedback'),
  lowercase: document.getElementById('lowercase-feedback'),
  numbers: document.getElementById('numbers-feedback'),
  symbols: document.getElementById('symbols-feedback'),
  patterns: document.getElementById('patterns-feedback')
};

// Common passwords and patterns to avoid
const commonPatterns = [
  /^123/, /321$/, /password/i, /qwerty/i, /abc/i,
  /111/, /000/, /admin/i, /letmein/i, /welcome/i,
  /monkey/i, /dragon/i, /master/i, /login/i
];

// Toggle password visibility
if (toggleVisibility) {
  toggleVisibility.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    toggleVisibility.innerHTML = type === 'password' 
      ? '<i class="fas fa-eye"></i>' 
      : '<i class="fas fa-eye-slash"></i>';
  });
}

// Analyze password strength
function analyzePassword(password) {
  const checks = {
    length: password.length >= 12,
    uppercase: /[A-Z]/.test(password),
    lowercase: /[a-z]/.test(password),
    numbers: /[0-9]/.test(password),
    symbols: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
    patterns: !commonPatterns.some(pattern => pattern.test(password))
  };

  // Count how many checks pass
  const passedChecks = Object.values(checks).filter(Boolean).length;
  
  // Calculate strength based on passed checks and length
  let strength;
  
  // Strong: At least 5 checks pass AND length >= 12
  if (passedChecks >= 5 && password.length >= 12) {
    strength = 'strong';
  }
  // Good: At least 4 checks pass AND length >= 8
  else if (passedChecks >= 4 && password.length >= 8) {
    strength = 'good';
  }
  // Fair: At least 3 checks pass
  else if (passedChecks >= 3) {
    strength = 'fair';
  }
  // Weak: Less than 3 checks pass
  else {
    strength = 'weak';
  }

  return { checks, passedChecks, strength };
}

// Calculate estimated crack time
function calculateCrackTime(password) {
  if (!password) return '--';
  
  let charsetSize = 0;
  if (/[a-z]/.test(password)) charsetSize += 26;
  if (/[A-Z]/.test(password)) charsetSize += 26;
  if (/[0-9]/.test(password)) charsetSize += 10;
  if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) charsetSize += 32;
  
  if (charsetSize === 0) return '--';
  
  const combinations = Math.pow(charsetSize, password.length);
  const guessesPerSecond = 10000000000; // 10 billion guesses/sec (modern GPU)
  const seconds = combinations / guessesPerSecond / 2; // Average case
  
  if (seconds < 1) return 'Instantly';
  if (seconds < 60) return `${Math.round(seconds)} seconds`;
  if (seconds < 3600) return `${Math.round(seconds / 60)} minutes`;
  if (seconds < 86400) return `${Math.round(seconds / 3600)} hours`;
  if (seconds < 31536000) return `${Math.round(seconds / 86400)} days`;
  if (seconds < 31536000 * 100) return `${Math.round(seconds / 31536000)} years`;
  if (seconds < 31536000 * 1000000) return `${Math.round(seconds / 31536000 / 1000)} thousand years`;
  return 'Millions of years';
}

// Update UI with analysis results
function updatePasswordUI(password) {
  if (!password) {
    meterFill.className = 'meter-fill';
    strengthLabel.textContent = 'Enter a password';
    strengthLabel.className = 'strength-label';
    crackTimeValue.textContent = '--';
    
    Object.keys(feedbackIcons).forEach(key => {
      if (feedbackIcons[key]) feedbackIcons[key].className = 'feedback-icon';
    });

    if (feedbackTexts.length) {
    feedbackTexts.length.textContent = '0/12 characters';
  }
    return;
  }

  const { checks, passedChecks, strength } = analyzePassword(password);
  
  // Update meter
  meterFill.className = `meter-fill ${strength}`;
  
  // Update strength label
  const labels = {
    weak: 'Weak',
    fair: 'Fair',
    good: 'Good',
    strong: 'Strong'
  };
  strengthLabel.textContent = labels[strength];
  strengthLabel.className = `strength-label ${strength}`;
  
  // Update crack time
  crackTimeValue.textContent = calculateCrackTime(password);
  
  // Update feedback icons
  Object.keys(checks).forEach(key => {
    if (feedbackIcons[key]) {
      feedbackIcons[key].className = `feedback-icon ${checks[key] ? 'pass' : 'fail'}`;
    }
  });

  // Update feedback text
  if (feedbackTexts.length) {
    feedbackTexts.length.textContent = password.length >= 12 
      ? `Great! ${password.length} characters` 
      : `${password.length}/12 characters`;
  }
  
  if (feedbackTexts.uppercase) {
    feedbackTexts.uppercase.textContent = checks.uppercase 
      ? 'Uppercase included ✓' 
      : 'Add uppercase letters';
  }
  
  if (feedbackTexts.lowercase) {
    feedbackTexts.lowercase.textContent = checks.lowercase 
      ? 'Lowercase included ✓' 
      : 'Add lowercase letters';
  }
  
  if (feedbackTexts.numbers) {
    feedbackTexts.numbers.textContent = checks.numbers 
      ? 'Numbers included ✓' 
      : 'Add numbers';
  }
  
  if (feedbackTexts.symbols) {
    feedbackTexts.symbols.textContent = checks.symbols 
      ? 'Symbols included ✓' 
      : 'Add special characters';
  }
  
  if (feedbackTexts.patterns) {
    feedbackTexts.patterns.textContent = checks.patterns 
      ? 'No common patterns ✓' 
      : 'Avoid common patterns';
  }
}

// Listen for password input
if (passwordInput) {
  passwordInput.addEventListener('input', (e) => {
    updatePasswordUI(e.target.value);
  });
}

// ============================================
// CIA Triad Interactive
// ============================================
const triadItems = document.querySelectorAll('.triad-item');
const triadDetails = document.getElementById('triad-details');

// Show CIA principle details
function showTriadDetails(principle) {
  const data = ciaData[principle];
  if (!data || !triadDetails) return;

  triadDetails.innerHTML = `
    <div class="details-content">
      <h3><i class="${data.icon}" style="color: ${data.color}"></i> ${data.title}</h3>
      <p class="details-tagline">${data.tagline}</p>
      <p class="details-description">${data.description}</p>
      
      <div class="details-section">
        <h4><i class="fas fa-key"></i> Key Points</h4>
        <ul class="details-list key-points">
          ${data.keyPoints.map(point => `<li><i class="fas fa-check"></i> ${point}</li>`).join('')}
        </ul>
      </div>
      
      <div class="details-section">
        <h4><i class="fas fa-exclamation-triangle"></i> Common Threats</h4>
        <ul class="details-list threats">
          ${data.threats.map(threat => `<li><i class="fas fa-skull-crossbones"></i> <strong>${threat.name}:</strong> ${threat.description}</li>`).join('')}
        </ul>
      </div>
      
      <div class="details-section">
        <h4><i class="fas fa-shield-alt"></i> Countermeasures</h4>
        <ul class="details-list countermeasures">
          ${data.countermeasures.map(cm => `<li><i class="fas fa-check-circle"></i> <strong>${cm.name}:</strong> ${cm.description}</li>`).join('')}
        </ul>
      </div>
      
      <div class="details-section">
        <h4><i class="fas fa-building"></i> Real-World Examples</h4>
        <div class="examples-grid">
          ${data.realWorldExamples.map(ex => `
            <div class="example-card">
              <h5>${ex.title}</h5>
              <p>${ex.description}</p>
            </div>
          `).join('')}
        </div>
      </div>
      
      <div class="details-section">
        <h4><i class="fas fa-certificate"></i> Related Standards</h4>
        <div class="standards-tags">
          ${data.standards.map(std => `<span class="standard-tag">${std}</span>`).join('')}
        </div>
      </div>
    </div>
  `;
}

// Add click handlers to triad items
triadItems.forEach(item => {
  item.addEventListener('click', () => {
    // Remove active class from all items
    triadItems.forEach(i => i.classList.remove('active'));
    // Add active class to clicked item
    item.classList.add('active');
    // Show details
    showTriadDetails(item.dataset.principle);
  });
});

// ============================================
// CIA Quiz (Using imported questions)
// ============================================
const QUIZ_LENGTH = 6;
let currentQuestion = 0;
let score = 0;
let shuffledQuestions = [];
let answered = false;

const quizContainer = document.getElementById('quiz-container');
const quizResults = document.getElementById('quiz-results');
const quizQuestion = document.getElementById('quiz-question');
const quizOptions = document.getElementById('quiz-options');
const quizFeedback = document.getElementById('quiz-feedback');
const quizProgress = document.getElementById('quiz-progress');
const quizProgressText = document.getElementById('quiz-progress-text');
const nextButton = document.getElementById('next-question');
const restartButton = document.getElementById('restart-quiz');
const finalScore = document.getElementById('final-score');
const resultsMessage = document.getElementById('results-message');

// Initialize quiz with balanced questions from module
function initQuiz() {
  shuffledQuestions = getBalancedQuestions(QUIZ_LENGTH);
  currentQuestion = 0;
  score = 0;
  answered = false;
  
  if (quizContainer) quizContainer.style.display = 'block';
  if (quizResults) quizResults.style.display = 'none';
  
  showQuestion();
}

// Show current question
function showQuestion() {
  if (!quizQuestion || currentQuestion >= shuffledQuestions.length) return;
  
  const question = shuffledQuestions[currentQuestion];
  answered = false;
  
  quizQuestion.innerHTML = `<p>${question.question}</p>`;
  quizProgress.style.width = `${((currentQuestion + 1) / shuffledQuestions.length) * 100}%`;
  quizProgressText.textContent = `Question ${currentQuestion + 1} of ${shuffledQuestions.length}`;
  
  // Reset options
  const options = quizOptions.querySelectorAll('.quiz-option');
  options.forEach(option => {
    option.classList.remove('correct', 'incorrect');
    option.disabled = false;
  });
  
  // Hide feedback and next button
  quizFeedback.classList.remove('show', 'correct', 'incorrect');
  nextButton.style.display = 'none';
}

// Handle answer selection
if (quizOptions) {
  quizOptions.addEventListener('click', (e) => {
    const option = e.target.closest('.quiz-option');
    if (!option || answered) return;
    
    answered = true;
    const selectedAnswer = option.dataset.answer;
    const correctAnswer = shuffledQuestions[currentQuestion].answer;
    const explanation = shuffledQuestions[currentQuestion].explanation;
    
    // Disable all options
    const options = quizOptions.querySelectorAll('.quiz-option');
    options.forEach(opt => opt.disabled = true);
    
    // Show correct/incorrect
    if (selectedAnswer === correctAnswer) {
      option.classList.add('correct');
      score++;
      quizFeedback.innerHTML = `<i class="fas fa-check-circle"></i> Correct! ${explanation}`;
      quizFeedback.classList.add('show', 'correct');
    } else {
      option.classList.add('incorrect');
      // Highlight correct answer
      options.forEach(opt => {
        if (opt.dataset.answer === correctAnswer) {
          opt.classList.add('correct');
        }
      });
      quizFeedback.innerHTML = `<i class="fas fa-times-circle"></i> Incorrect. ${explanation}`;
      quizFeedback.classList.add('show', 'incorrect');
    }
    
    // Show next button - ALWAYS show it, change text on last question
    if (currentQuestion < shuffledQuestions.length - 1) {
      nextButton.textContent = '';
      nextButton.innerHTML = 'Next Question <i class="fas fa-arrow-right"></i>';
    } else {
      // Last question - change button to "See Results"
      nextButton.innerHTML = 'See Results <i class="fas fa-trophy"></i>';
    }
    nextButton.style.display = 'inline-flex';
  });
}

// Next question / Show results
if (nextButton) {
  nextButton.addEventListener('click', () => {
    if (currentQuestion < shuffledQuestions.length - 1) {
      // Go to next question
      currentQuestion++;
      showQuestion();
    } else {
      // Last question - show results
      showResults();
    }
  });
}

// Show results
function showResults() {
  if (!quizContainer || !quizResults) return;
  
  quizContainer.style.display = 'none';
  quizResults.style.display = 'block';
  
  finalScore.textContent = score;
  
  // Update the "out of" number
  const outOfElement = quizResults.querySelector('.results-score strong:last-child');
  if (outOfElement) outOfElement.textContent = QUIZ_LENGTH;
  
  let message;
  const percentage = (score / QUIZ_LENGTH) * 100;
  if (percentage === 100) {
    message = "Perfect! You have an excellent understanding of the CIA Triad! 🎉";
  } else if (percentage >= 80) {
    message = "Great job! You have a solid grasp of security principles. 👏";
  } else if (percentage >= 60) {
    message = "Good effort! Keep studying to strengthen your knowledge. 📚";
  } else {
    message = "Keep learning! Review the CIA Triad concepts above and try again. 💪";
  }
  resultsMessage.textContent = message;
}

// Restart quiz
if (restartButton) {
  restartButton.addEventListener('click', initQuiz);
}

// ============================================
// Attack Types Section
// ============================================
const attacksGrid = document.getElementById('attacks-grid');
const attackModal = document.getElementById('attack-modal');
const attackModalClose = document.getElementById('attack-modal-close');

// Render attack cards
function renderAttackCards() {
  if (!attacksGrid) return;
  
  attacksGrid.innerHTML = attackTypes.map((attack, index) => `
    <div class="attack-card" data-id="${attack.id}" style="animation-delay: ${index * 0.1}s">
      <div class="attack-card-icon">
        <i class="${attack.icon}"></i>
      </div>
      <h3>${attack.name}</h3>
      <p>${attack.shortDesc}</p>
      <div class="attack-card-footer">
        <span class="badge ${getSeverityClass(attack.severity)}">${attack.severity.toUpperCase()}</span>
        <span class="attack-learn-more">Learn More <i class="fas fa-arrow-right"></i></span>
      </div>
    </div>
  `).join('');
  
  // Add click handlers
  document.querySelectorAll('.attack-card').forEach(card => {
    card.addEventListener('click', () => {
      const attackId = parseInt(card.dataset.id);
      openAttackModal(attackId);
    });
  });
}

// Open attack modal
function openAttackModal(attackId) {
  const attack = attackTypes.find(a => a.id === attackId);
  if (!attack || !attackModal) return;
  
  // Populate modal
  document.getElementById('attack-modal-icon').innerHTML = `<i class="${attack.icon}"></i>`;
  document.getElementById('attack-modal-title').textContent = attack.name;
  document.getElementById('attack-modal-severity').textContent = attack.severity.toUpperCase();
  document.getElementById('attack-modal-severity').className = `badge severity-badge ${getSeverityClass(attack.severity)}`;
  document.getElementById('attack-modal-category').textContent = attack.category;
  document.getElementById('attack-modal-description').textContent = attack.howItWorks;
  
  // Examples
  document.getElementById('attack-modal-examples').innerHTML = 
    attack.realExamples.map(ex => `<li>${ex}</li>`).join('');
  
  // Defenses
  document.getElementById('attack-modal-defenses').innerHTML = 
    attack.defenses.map(def => `<li><i class="fas fa-shield-alt"></i> ${def}</li>`).join('');
  
  // CIA Impact
  document.getElementById('attack-modal-cia').innerHTML = 
    attack.ciaImpact.map(cia => {
      const icons = {
        Confidentiality: 'fas fa-user-secret',
        Integrity: 'fas fa-check-double',
        Availability: 'fas fa-server'
      };
      return `<span class="cia-tag"><i class="${icons[cia]}"></i> ${cia}</span>`;
    }).join('');
  
  // Resources
  document.getElementById('attack-modal-resources').innerHTML = 
    attack.resources.map(res => 
      `<a href="${res.url}" target="_blank" rel="noopener"><i class="fas fa-external-link-alt"></i> ${res.name}</a>`
    ).join('');
  
  // Show modal
  attackModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close attack modal
function closeAttackModal() {
  if (!attackModal) return;
  attackModal.classList.remove('active');
  document.body.style.overflow = '';
}

if (attackModalClose) {
  attackModalClose.addEventListener('click', closeAttackModal);
}

if (attackModal) {
  attackModal.addEventListener('click', (e) => {
    if (e.target === attackModal) {
      closeAttackModal();
    }
  });
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeAttackModal();
  }
});

// ============================================
// Smooth Scroll for Anchor Links
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// ============================================
// Initialize on page load
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  initQuiz();
  renderAttackCards();
});

// CIA Modal Elements
const ciaCards = document.querySelectorAll('.cia-card');
const ciaModal = document.getElementById('cia-modal');
const ciaModalClose = document.getElementById('cia-modal-close');

// Open CIA modal with principle details
function openCIAModal(principle) {
  const data = ciaData[principle];
  if (!data || !ciaModal) return;
  
  // Set header color based on principle
  const header = document.getElementById('cia-modal-header');
  header.className = `cia-modal-header ${principle}`;
  
  // Populate modal icon
  const iconEl = document.getElementById('cia-modal-icon');
  iconEl.innerHTML = `<i class="${data.icon}"></i>`;
  iconEl.className = `cia-modal-icon ${principle}`;
  
  // Populate text content
  document.getElementById('cia-modal-title').textContent = data.title;
  document.getElementById('cia-modal-tagline').textContent = data.tagline;
  document.getElementById('cia-modal-description').textContent = data.description;
  
  // Key points
  document.getElementById('cia-modal-keypoints').innerHTML = 
    data.keyPoints.map(point => `<li><i class="fas fa-check"></i> ${point}</li>`).join('');
  
  // Threats
  document.getElementById('cia-modal-threats').innerHTML = 
    data.threats.map(threat => `<li><i class="fas fa-skull-crossbones"></i> <strong>${threat.name}:</strong> ${threat.description}</li>`).join('');
  
  // Countermeasures
  document.getElementById('cia-modal-countermeasures').innerHTML = 
    data.countermeasures.map(cm => `<li><i class="fas fa-shield-alt"></i> <strong>${cm.name}:</strong> ${cm.description}</li>`).join('');
  
  // Examples
  document.getElementById('cia-modal-examples').innerHTML = 
    data.realWorldExamples.map(ex => `
      <div class="cia-example-card">
        <h5>${ex.title}</h5>
        <p>${ex.description}</p>
      </div>
    `).join('');
  
  // Standards
  document.getElementById('cia-modal-standards').innerHTML = 
    data.standards.map(std => `<span class="standard-tag">${std}</span>`).join('');
  
  // Show modal
  ciaModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// Close CIA modal
function closeCIAModal() {
  if (!ciaModal) return;
  ciaModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Add click handlers to CIA cards
ciaCards.forEach(card => {
  card.addEventListener('click', () => {
    openCIAModal(card.dataset.principle);
  });
});

// Close button
if (ciaModalClose) {
  ciaModalClose.addEventListener('click', closeCIAModal);
}

// Close on overlay click
if (ciaModal) {
  ciaModal.addEventListener('click', (e) => {
    if (e.target === ciaModal) {
      closeCIAModal();
    }
  });
}

// Close on Escape key (add closeCIAModal to your existing keydown handler)
// document.addEventListener('keydown', (e) => {
//   if (e.key === 'Escape') {
//     closeAttackModal();
//     closeCIAModal();  // <-- Add this line
//   }
// });