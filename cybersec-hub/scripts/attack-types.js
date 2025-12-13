// attackTypes.js - Common Cyber Attack Types Database
// ES Module for attack type data and helper functions

export const attackTypes = [
  {
    id: 1,
    name: "Phishing",
    icon: "fas fa-fish",
    emoji: "🎣",
    shortDesc: "Fraudulent emails or messages that trick users into revealing sensitive information.",
    howItWorks: "Attackers send emails that appear legitimate, often impersonating trusted organizations like banks, tech companies, or even colleagues. These emails contain links to fake websites designed to harvest credentials or attachments that install malware. Spear phishing targets specific individuals with personalized content.",
    realExamples: [
      "Email claiming to be from Microsoft asking you to 'verify your account' immediately",
      "Fake invoice from a supplier with a malicious PDF attachment",
      "CEO fraud: Email appearing to be from your boss requesting urgent wire transfer",
      "SMS phishing (smishing) claiming your package delivery failed"
    ],
    defenses: [
      "Verify sender email addresses carefully - look for misspellings",
      "Never click links in suspicious emails - type URLs directly",
      "Use email filtering and anti-phishing tools",
      "Enable multi-factor authentication (MFA) on all accounts",
      "Report phishing attempts to your IT security team",
      "Hover over links to preview the actual destination URL"
    ],
    severity: "high",
    category: "Social Engineering",
    ciaImpact: ["Confidentiality"],
    resources: [
      { name: "CISA Phishing Guide", url: "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing" },
      { name: "Google Phishing Quiz", url: "https://phishingquiz.withgoogle.com/" },
      { name: "KnowBe4 Phishing Resources", url: "https://www.knowbe4.com/phishing" }
    ]
  },
  {
    id: 2,
    name: "DDoS Attack",
    icon: "fas fa-bolt",
    emoji: "💥",
    shortDesc: "Overwhelming a server with traffic to make it unavailable to legitimate users.",
    howItWorks: "Distributed Denial of Service attacks use a botnet (network of infected computers called 'zombies') to flood a target server with massive amounts of traffic. This exhausts the server's resources - bandwidth, CPU, memory - preventing legitimate users from accessing services. Volumetric attacks can exceed 1 Tbps of traffic.",
    realExamples: [
      "2016 Mirai botnet attack on Dyn DNS took down Twitter, Netflix, Reddit, and GitHub",
      "2020 AWS reported mitigating a 2.3 Tbps DDoS attack",
      "Gaming platforms like Xbox Live and PlayStation Network frequently targeted",
      "GitHub survived a 1.35 Tbps memcached amplification attack in 2018"
    ],
    defenses: [
      "Use DDoS mitigation services (Cloudflare, AWS Shield, Akamai)",
      "Implement rate limiting on servers and APIs",
      "Increase bandwidth and server capacity (over-provisioning)",
      "Configure firewalls and intrusion detection systems",
      "Use content delivery networks (CDNs) to distribute traffic",
      "Have an incident response plan ready"
    ],
    severity: "high",
    category: "Network Attack",
    ciaImpact: ["Availability"],
    resources: [
      { name: "Cloudflare DDoS Learning", url: "https://www.cloudflare.com/learning/ddos/what-is-a-ddos-attack/" },
      { name: "NIST DDoS Guide", url: "https://csrc.nist.gov/publications/detail/sp/800-189/final" },
      { name: "Digital Attack Map (Live)", url: "https://www.digitalattackmap.com/" }
    ]
  },
  {
    id: 3,
    name: "Man-in-the-Middle",
    icon: "fas fa-user-secret",
    emoji: "🕵️",
    shortDesc: "Intercepting and potentially altering communications between two parties.",
    howItWorks: "The attacker secretly positions themselves between two communicating parties, intercepting all data in transit. They can eavesdrop on conversations, steal credentials, or even modify data before forwarding it. Common techniques include ARP spoofing, DNS spoofing, SSL stripping, and rogue Wi-Fi access points.",
    realExamples: [
      "Attacker on public Wi-Fi intercepts your online banking session",
      "SSL stripping downgrades HTTPS to HTTP to capture credentials",
      "Rogue cell towers (IMSI catchers) intercept mobile communications",
      "Corporate espionage through compromised network equipment"
    ],
    defenses: [
      "Use HTTPS everywhere (look for padlock icon in browser)",
      "Avoid public Wi-Fi for sensitive transactions",
      "Use VPN for encrypted connections on untrusted networks",
      "Enable HSTS (HTTP Strict Transport Security)",
      "Verify SSL/TLS certificates aren't showing warnings",
      "Use end-to-end encrypted messaging apps"
    ],
    severity: "critical",
    category: "Network Attack",
    ciaImpact: ["Confidentiality", "Integrity"],
    resources: [
      { name: "OWASP MITM Guide", url: "https://owasp.org/www-community/attacks/Manipulator-in-the-middle_attack" },
      { name: "Wireshark MITM Detection", url: "https://wiki.wireshark.org/CaptureSetup/Ethernet" },
      { name: "EFF HTTPS Everywhere", url: "https://www.eff.org/https-everywhere" }
    ]
  },
  {
    id: 4,
    name: "SQL Injection",
    icon: "fas fa-database",
    emoji: "💉",
    shortDesc: "Inserting malicious SQL code to manipulate or extract database information.",
    howItWorks: "Attackers exploit poorly coded web applications by injecting SQL commands into input fields like login forms or search boxes. When the application passes this input directly to the database without proper sanitization, the malicious SQL executes. This can allow attackers to bypass authentication, read sensitive data, modify or delete records, or even execute system commands.",
    realExamples: [
      "2017 Equifax breach exposed 147 million records via SQL injection",
      "Heartland Payment Systems lost 130 million credit cards",
      "Sony Pictures hack included SQL injection components",
      "TalkTalk breach in 2015 affected 157,000 customers"
    ],
    defenses: [
      "Use parameterized queries (prepared statements) - NEVER concatenate user input",
      "Implement input validation and sanitization",
      "Apply principle of least privilege to database accounts",
      "Use Web Application Firewalls (WAF)",
      "Regularly update and patch database software",
      "Conduct code reviews and security testing"
    ],
    severity: "critical",
    category: "Web Application Attack",
    ciaImpact: ["Confidentiality", "Integrity", "Availability"],
    resources: [
      { name: "OWASP SQL Injection", url: "https://owasp.org/www-community/attacks/SQL_Injection" },
      { name: "PortSwigger SQL Labs", url: "https://portswigger.net/web-security/sql-injection" },
      { name: "SQLMap Tool", url: "https://sqlmap.org/" }
    ]
  },
  {
    id: 5,
    name: "Cross-Site Scripting",
    icon: "fas fa-code",
    emoji: "⚠️",
    shortDesc: "Injecting malicious scripts into web pages viewed by other users.",
    howItWorks: "XSS attacks inject client-side scripts (usually JavaScript) into web applications. When other users view the affected page, the malicious script executes in their browser with the site's privileges. Stored XSS persists in the database; Reflected XSS comes from URLs; DOM-based XSS manipulates the page's DOM. Attackers can steal cookies, session tokens, or redirect users to malicious sites.",
    realExamples: [
      "Samy worm spread across 1 million MySpace profiles in 20 hours (2005)",
      "eBay XSS vulnerability allowed attackers to steal user credentials",
      "British Airways breach used XSS to skim payment data",
      "Fortnite vulnerability could have exposed player accounts"
    ],
    defenses: [
      "Encode/escape all user-supplied output",
      "Implement Content Security Policy (CSP) headers",
      "Use HTTPOnly and Secure flags on cookies",
      "Validate and sanitize all user inputs",
      "Use modern frameworks that auto-escape by default",
      "Regular security testing with tools like Burp Suite"
    ],
    severity: "high",
    category: "Web Application Attack",
    ciaImpact: ["Confidentiality", "Integrity"],
    resources: [
      { name: "OWASP XSS Prevention", url: "https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html" },
      { name: "PortSwigger XSS Labs", url: "https://portswigger.net/web-security/cross-site-scripting" },
      { name: "Google XSS Game", url: "https://xss-game.appspot.com/" }
    ]
  },
  {
    id: 6,
    name: "Ransomware",
    icon: "fas fa-lock",
    emoji: "🔒",
    shortDesc: "Malware that encrypts files and demands payment for decryption keys.",
    howItWorks: "Ransomware typically spreads through phishing emails, malicious downloads, or exploiting vulnerabilities. Once executed, it encrypts files on local drives, network shares, and sometimes cloud storage. Victims see a ransom note demanding cryptocurrency payment. Modern variants also steal data before encrypting (double extortion) and threaten to publish it.",
    realExamples: [
      "Colonial Pipeline attack (2021) disrupted fuel supply across Eastern US - $4.4M ransom",
      "WannaCry (2017) infected 300,000+ computers in 150 countries",
      "NotPetya caused $10 billion in damages globally",
      "JBS Foods paid $11 million after attack on meat processing plants"
    ],
    defenses: [
      "Maintain regular, tested, offline backups (3-2-1 rule)",
      "Keep all systems and software updated and patched",
      "Use endpoint detection and response (EDR) solutions",
      "Implement network segmentation to limit spread",
      "Train employees to recognize phishing attempts",
      "Disable macros in Office documents from unknown sources"
    ],
    severity: "critical",
    category: "Malware",
    ciaImpact: ["Availability", "Confidentiality"],
    resources: [
      { name: "CISA Ransomware Guide", url: "https://www.cisa.gov/stopransomware" },
      { name: "No More Ransom Project", url: "https://www.nomoreransom.org/" },
      { name: "ID Ransomware", url: "https://id-ransomware.malwarehunterteam.com/" }
    ]
  },
  {
    id: 7,
    name: "Social Engineering",
    icon: "fas fa-users",
    emoji: "🎭",
    shortDesc: "Manipulating people into divulging confidential information or performing actions.",
    howItWorks: "Social engineering exploits human psychology rather than technical vulnerabilities. Attackers use pretexting (fake scenarios), baiting (enticing offers), tailgating (physical following), and impersonation to manipulate targets. They exploit trust, fear, urgency, and helpfulness. Often combined with technical attacks for maximum effectiveness.",
    realExamples: [
      "Twitter hack (2020) - attackers called employees pretending to be IT support",
      "RSA breach started with an Excel file labeled 'recruitment plan'",
      "Kevin Mitnick famously used social engineering throughout his hacking career",
      "USB drops in parking lots leading to corporate network access"
    ],
    defenses: [
      "Comprehensive security awareness training for all employees",
      "Establish verification procedures for sensitive requests",
      "Implement physical security controls and visitor policies",
      "Create a culture where it's OK to question unusual requests",
      "Use multi-person authorization for financial transactions",
      "Regular social engineering penetration tests"
    ],
    severity: "high",
    category: "Human Attack",
    ciaImpact: ["Confidentiality", "Integrity", "Availability"],
    resources: [
      { name: "Social Engineering Framework", url: "https://www.social-engineer.org/" },
      { name: "SANS Security Awareness", url: "https://www.sans.org/security-awareness-training/" },
      { name: "The Art of Deception (Book)", url: "https://www.goodreads.com/book/show/18160.The_Art_of_Deception" }
    ]
  },
  {
    id: 8,
    name: "Zero-Day Exploit",
    icon: "fas fa-bug",
    emoji: "🐛",
    shortDesc: "Attacks exploiting unknown vulnerabilities before patches are available.",
    howItWorks: "Zero-day vulnerabilities are security flaws unknown to the software vendor. Attackers discover these flaws and develop exploits before any patch exists. The term 'zero-day' means developers have had zero days to fix the problem. These exploits are highly valuable on black markets and often used by nation-state actors for espionage or by cybercriminals for targeted attacks.",
    realExamples: [
      "Stuxnet used four Windows zero-days to sabotage Iranian nuclear facilities",
      "Log4Shell (2021) affected millions of Java applications worldwide",
      "Pegasus spyware used iPhone zero-days to target journalists and activists",
      "Exchange Server vulnerabilities (ProxyLogon) exploited before patches"
    ],
    defenses: [
      "Implement defense-in-depth strategies (multiple layers)",
      "Use behavior-based detection instead of just signatures",
      "Apply patches and updates as quickly as possible",
      "Network segmentation to contain potential breaches",
      "Regular vulnerability assessments and penetration testing",
      "Participate in bug bounty programs for early detection"
    ],
    severity: "critical",
    category: "Advanced Attack",
    ciaImpact: ["Confidentiality", "Integrity", "Availability"],
    resources: [
      { name: "Zero Day Initiative", url: "https://www.zerodayinitiative.com/" },
      { name: "CVE Database", url: "https://cve.mitre.org/" },
      { name: "Exploit Database", url: "https://www.exploit-db.com/" }
    ]
  }
];

// Helper function to get attack by ID
export function getAttackById(id) {
  return attackTypes.find(attack => attack.id === id);
}

// Helper function to get attacks by severity
export function getAttacksBySeverity(severity) {
  return attackTypes.filter(attack => attack.severity === severity);
}

// Helper function to get attacks by category
export function getAttacksByCategory(category) {
  return attackTypes.filter(attack => attack.category === category);
}

// Get severity color class
export function getSeverityClass(severity) {
  const classes = {
    critical: 'severity-critical',
    high: 'severity-high',
    medium: 'severity-medium',
    low: 'severity-low'
  };
  return classes[severity] || 'severity-medium';
}
