// quizData.js - CIA Triad Quiz Questions
// ES Module with expanded real-world scenarios

export const quizQuestions = [
  // Confidentiality Questions
  {
    id: 1,
    question: "A hacker intercepts and reads private emails between two company executives discussing a merger.",
    answer: "confidentiality",
    explanation: "This violates confidentiality because unauthorized parties gained access to private, sensitive information that should have remained secret.",
    difficulty: "easy"
  },
  {
    id: 2,
    question: "A competitor uses social engineering to obtain your company's client list and pricing strategy.",
    answer: "confidentiality",
    explanation: "This violates confidentiality because sensitive business information was disclosed to unauthorized parties through deception.",
    difficulty: "easy"
  },
  {
    id: 3,
    question: "An attacker uses SQL injection to view customer credit card numbers stored in a database.",
    answer: "confidentiality",
    explanation: "This violates confidentiality because sensitive financial data was exposed to unauthorized access through a technical exploit.",
    difficulty: "easy"
  },
  {
    id: 4,
    question: "A student gains unauthorized access to the grading system and views their upcoming exam scores.",
    answer: "confidentiality",
    explanation: "This violates confidentiality because the student accessed information they were not authorized to see, even though they didn't modify it.",
    difficulty: "easy"
  },
  {
    id: 5,
    question: "An employee accidentally sends a spreadsheet containing employee salaries to the entire company.",
    answer: "confidentiality",
    explanation: "This violates confidentiality - even accidental disclosure of sensitive information to unauthorized people is a confidentiality breach.",
    difficulty: "medium"
  },
  {
    id: 6,
    question: "A hospital employee looks up medical records of a celebrity patient out of curiosity.",
    answer: "confidentiality",
    explanation: "This is a HIPAA violation affecting confidentiality - accessing patient records without a legitimate medical need is unauthorized access.",
    difficulty: "medium"
  },
  {
    id: 7,
    question: "An attacker installs a keylogger on a corporate workstation and captures login credentials.",
    answer: "confidentiality",
    explanation: "Keyloggers capture sensitive information (passwords) without authorization, which is a confidentiality violation.",
    difficulty: "medium"
  },
  
  // Integrity Questions
  {
    id: 8,
    question: "An attacker modifies a bank's transaction records to transfer money to their own account.",
    answer: "integrity",
    explanation: "This violates integrity because financial data was modified without authorization, making records inaccurate and untrustworthy.",
    difficulty: "easy"
  },
  {
    id: 9,
    question: "A disgruntled employee changes the prices in the product database before quitting.",
    answer: "integrity",
    explanation: "This violates integrity because data was maliciously altered by an insider, compromising its accuracy.",
    difficulty: "easy"
  },
  {
    id: 10,
    question: "Network traffic is intercepted and modified to change the destination of a wire transfer.",
    answer: "integrity",
    explanation: "This is a man-in-the-middle attack that violates integrity by modifying data in transit without detection.",
    difficulty: "easy"
  },
  {
    id: 11,
    question: "A student hacks into the university system and changes their grade from C to A.",
    answer: "integrity",
    explanation: "This violates integrity - the academic records were modified without authorization, making them inaccurate.",
    difficulty: "easy"
  },
  {
    id: 12,
    question: "Malware on a web server modifies download links to distribute infected software versions.",
    answer: "integrity",
    explanation: "This violates integrity by replacing legitimate files with malicious ones - users can't trust the authenticity of downloads.",
    difficulty: "medium"
  },
  {
    id: 13,
    question: "An attacker compromises a software update server and pushes malicious updates to thousands of users.",
    answer: "integrity",
    explanation: "This is a supply chain attack violating integrity - the update mechanism was compromised to distribute malicious code instead of legitimate updates.",
    difficulty: "hard"
  },
  {
    id: 14,
    question: "A journalist's article is modified after publication on the news website without their knowledge.",
    answer: "integrity",
    explanation: "This violates integrity - the published content was altered without authorization, potentially spreading misinformation.",
    difficulty: "medium"
  },
  
  // Availability Questions
  {
    id: 15,
    question: "A hospital's patient database is down for maintenance during an emergency, preventing doctors from accessing critical medical records.",
    answer: "availability",
    explanation: "This violates availability because authorized users (doctors) cannot access needed information when it's required for patient care.",
    difficulty: "easy"
  },
  {
    id: 16,
    question: "A DDoS attack takes down an e-commerce website during Black Friday sales.",
    answer: "availability",
    explanation: "This violates availability because the service is not accessible to legitimate customers during a critical business period.",
    difficulty: "easy"
  },
  {
    id: 17,
    question: "Ransomware encrypts all files on a company server and demands payment for decryption.",
    answer: "availability",
    explanation: "While ransomware can affect all three principles, the primary and immediate impact is on availability - users cannot access their data until it's decrypted.",
    difficulty: "medium"
  },
  {
    id: 18,
    question: "A power outage takes down the data center, and the backup generators fail to start.",
    answer: "availability",
    explanation: "This is an availability issue - physical infrastructure failure prevents access to systems and data, regardless of malicious intent.",
    difficulty: "easy"
  },
  {
    id: 19,
    question: "An attacker exploits a vulnerability to crash the company's email server repeatedly.",
    answer: "availability",
    explanation: "Denial of service through crashing services violates availability - employees cannot send or receive email.",
    difficulty: "easy"
  },
  {
    id: 20,
    question: "A company's cloud storage provider goes bankrupt and shuts down servers with no data migration period.",
    answer: "availability",
    explanation: "This is an availability issue - even though caused by business failure rather than an attack, users lose access to their data.",
    difficulty: "medium"
  },
  {
    id: 21,
    question: "An employee accidentally deletes a critical production database with no recent backup.",
    answer: "availability",
    explanation: "Accidental deletion affects availability - the data is no longer accessible. This highlights why backups are essential.",
    difficulty: "medium"
  },
  
  // Complex/Tricky Questions (multiple principles, but one is primary)
  {
    id: 22,
    question: "An attacker gains access to a company's customer database, downloads all records, then deletes the original data.",
    answer: "confidentiality",
    explanation: "While this affects all three principles (data stolen, deleted, and unavailable), the PRIMARY violation is confidentiality - the sensitive data was exposed to unauthorized parties. The deletion is a secondary consequence.",
    difficulty: "hard"
  },
  {
    id: 23,
    question: "A software bug corrupts financial reports, showing incorrect quarterly earnings that get reported to shareholders.",
    answer: "integrity",
    explanation: "This is primarily an integrity issue - the data became inaccurate (even without malicious intent), leading to unreliable information being shared.",
    difficulty: "medium"
  },
  {
    id: 24,
    question: "An insider sells company trade secrets to a competitor.",
    answer: "confidentiality",
    explanation: "This is industrial espionage violating confidentiality - proprietary information was disclosed to unauthorized parties for personal gain.",
    difficulty: "easy"
  },
  {
    id: 25,
    question: "A DNS poisoning attack redirects users from a legitimate banking site to a fake one that steals credentials.",
    answer: "integrity",
    explanation: "DNS poisoning primarily violates integrity - the DNS records were modified to point to a malicious server. The credential theft is a secondary confidentiality issue.",
    difficulty: "hard"
  },
  {
    id: 26,
    question: "During a penetration test, the security team discovers they can read any file on the server without authentication.",
    answer: "confidentiality",
    explanation: "This vulnerability allows unauthorized access to sensitive files - a confidentiality weakness that could lead to data exposure.",
    difficulty: "easy"
  },
  {
    id: 27,
    question: "A hospital's life-support monitoring system goes offline due to a network configuration error.",
    answer: "availability",
    explanation: "This is a critical availability issue - medical systems must be available 24/7, and downtime could be life-threatening.",
    difficulty: "easy"
  },
  {
    id: 28,
    question: "An attacker uses stolen credentials to log in and change the company's public-facing website content to display political messages.",
    answer: "integrity",
    explanation: "Website defacement is primarily an integrity violation - the authorized content was modified without permission, affecting the trustworthiness of the information.",
    difficulty: "medium"
  },
  {
    id: 29,
    question: "A backup tape containing customer data is lost in transit to an off-site storage facility.",
    answer: "confidentiality",
    explanation: "Lost backup media is a confidentiality concern - unauthorized parties could potentially access the sensitive data on the tape.",
    difficulty: "medium"
  },
  {
    id: 30,
    question: "A disgruntled IT administrator removes all user accounts from Active Directory before leaving the company.",
    answer: "availability",
    explanation: "Deleting user accounts prevents employees from accessing systems they need - this is primarily an availability attack (denial of access).",
    difficulty: "medium"
  }
];

// Helper function to get random questions
export function getRandomQuestions(count = 5, difficulty = null) {
  let filtered = [...quizQuestions];
  
  if (difficulty) {
    filtered = filtered.filter(q => q.difficulty === difficulty);
  }
  
  // Shuffle array
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  
  return filtered.slice(0, count);
}

// Get questions by answer type
export function getQuestionsByType(type) {
  return quizQuestions.filter(q => q.answer === type);
}

// Get balanced set of questions (equal from each category)
export function getBalancedQuestions(count = 6) {
  const confidentiality = getQuestionsByType('confidentiality');
  const integrity = getQuestionsByType('integrity');
  const availability = getQuestionsByType('availability');
  
  const perCategory = Math.floor(count / 3);
  
  const shuffleArray = (arr) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  const selected = [
    ...shuffleArray(confidentiality).slice(0, perCategory),
    ...shuffleArray(integrity).slice(0, perCategory),
    ...shuffleArray(availability).slice(0, perCategory)
  ];
  
  return shuffleArray(selected);
}
