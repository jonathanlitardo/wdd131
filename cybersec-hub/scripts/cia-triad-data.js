// ciaTriadData.js - CIA Triad Information
// ES Module for CIA Triad data

export const ciaData = {
  confidentiality: {
    icon: 'fas fa-user-secret',
    color: '#A855F7',
    title: 'Confidentiality',
    tagline: 'Keeping Secrets Secret',
    description: 'Ensuring that information is accessible only to those authorized to have access. This principle protects sensitive data from unauthorized disclosure, whether intentional or accidental.',
    keyPoints: [
      'Data should only be accessed by authorized individuals',
      'Information must be protected during storage AND transmission',
      'Access should be granted on a need-to-know basis',
      'Both technical and physical controls are necessary'
    ],
    threats: [
      { name: 'Data breaches', description: 'Unauthorized access to sensitive databases' },
      { name: 'Eavesdropping', description: 'Intercepting network traffic or communications' },
      { name: 'Social engineering', description: 'Manipulating people to reveal information' },
      { name: 'Insider threats', description: 'Employees with legitimate access misusing it' },
      { name: 'Improper disposal', description: 'Throwing away unshredded documents or unwiped drives' }
    ],
    countermeasures: [
      { name: 'Encryption', description: 'Protect data at rest and in transit (AES-256, TLS)' },
      { name: 'Access Control Lists', description: 'Define who can access what resources' },
      { name: 'Multi-Factor Authentication', description: 'Require multiple verification methods' },
      { name: 'Data Classification', description: 'Label data by sensitivity level' },
      { name: 'Security Training', description: 'Educate employees on protecting information' },
      { name: 'Physical Security', description: 'Locks, badges, and secure areas' }
    ],
    realWorldExamples: [
      {
        title: 'HIPAA Compliance',
        description: 'Healthcare organizations must protect patient medical records from unauthorized access.'
      },
      {
        title: 'Banking Encryption',
        description: 'Banks use SSL/TLS to encrypt all web traffic and protect customer financial data.'
      },
      {
        title: 'Military Classification',
        description: 'Government secrets are classified (Confidential, Secret, Top Secret) with strict access controls.'
      },
      {
        title: 'Corporate Trade Secrets',
        description: 'Companies protect proprietary formulas, code, and strategies from competitors.'
      }
    ],
    standards: ['GDPR', 'HIPAA', 'PCI-DSS', 'SOC 2', 'ISO 27001']
  },
  
  integrity: {
    icon: 'fas fa-check-double',
    color: '#00FF88',
    title: 'Integrity',
    tagline: 'Trust Your Data',
    description: 'Maintaining and assuring the accuracy and completeness of data over its entire lifecycle. Data must not be modified in an unauthorized or undetected manner, and systems must work correctly.',
    keyPoints: [
      'Data must remain accurate and unaltered',
      'Changes should only be made by authorized parties',
      'All modifications must be logged and traceable',
      'Data should be recoverable to a known good state'
    ],
    threats: [
      { name: 'Man-in-the-middle attacks', description: 'Intercepting and modifying data in transit' },
      { name: 'Malware', description: 'Viruses or ransomware corrupting files' },
      { name: 'SQL injection', description: 'Manipulating database contents through exploits' },
      { name: 'Unauthorized modifications', description: 'Employees changing data without permission' },
      { name: 'Human error', description: 'Accidental changes or deletions' }
    ],
    countermeasures: [
      { name: 'Hashing', description: 'SHA-256 checksums to verify file integrity' },
      { name: 'Digital Signatures', description: 'Cryptographic proof of authenticity' },
      { name: 'Version Control', description: 'Git and similar systems to track changes' },
      { name: 'Input Validation', description: 'Sanitize all user inputs before processing' },
      { name: 'Audit Trails', description: 'Log all changes with timestamps and user IDs' },
      { name: 'File Integrity Monitoring', description: 'Tools like OSSEC or Tripwire' }
    ],
    realWorldExamples: [
      {
        title: 'Banking Transactions',
        description: 'Banks verify every transaction hasn\'t been tampered with before processing.'
      },
      {
        title: 'Software Downloads',
        description: 'Publishers provide SHA-256 hashes so you can verify downloads are authentic.'
      },
      {
        title: 'Blockchain',
        description: 'Cryptocurrencies use cryptographic chains to ensure transaction integrity.'
      },
      {
        title: 'Digital Evidence',
        description: 'Law enforcement maintains chain of custody to prove evidence hasn\'t been altered.'
      }
    ],
    standards: ['SOX', 'FISMA', 'NIST', 'ISO 27001', 'COBIT']
  },
  
  availability: {
    icon: 'fas fa-server',
    color: '#FFD93D',
    title: 'Availability',
    tagline: 'Always There When Needed',
    description: 'Ensuring that information and resources are accessible to authorized users when needed. Systems must be reliable, accessible, and able to recover quickly from disruptions.',
    keyPoints: [
      'Systems must be accessible when users need them',
      'Downtime should be minimized through redundancy',
      'Recovery plans must be tested regularly',
      'Performance must meet user expectations'
    ],
    threats: [
      { name: 'DDoS attacks', description: 'Flooding servers with traffic to overwhelm them' },
      { name: 'Hardware failures', description: 'Disk crashes, power supply failures' },
      { name: 'Natural disasters', description: 'Earthquakes, floods, fires destroying data centers' },
      { name: 'Power outages', description: 'Loss of electricity to critical systems' },
      { name: 'Ransomware', description: 'Encrypting files so users can\'t access them' }
    ],
    countermeasures: [
      { name: 'Redundancy', description: 'RAID arrays, clustering, and failover systems' },
      { name: 'Regular Backups', description: 'Follow the 3-2-1 rule for data backup' },
      { name: 'DDoS Protection', description: 'Services like Cloudflare or AWS Shield' },
      { name: 'Disaster Recovery', description: 'Documented plans with regular testing' },
      { name: 'Load Balancing', description: 'Distribute traffic across multiple servers' },
      { name: 'UPS & Generators', description: 'Backup power for critical systems' }
    ],
    realWorldExamples: [
      {
        title: 'Cloud SLAs',
        description: 'AWS, Azure, and Google Cloud guarantee 99.99% uptime in their service agreements.'
      },
      {
        title: 'Hospital Systems',
        description: 'Life-support and emergency systems must operate 24/7 without interruption.'
      },
      {
        title: 'E-commerce',
        description: 'Amazon loses approximately $220,000 per minute of downtime during peak times.'
      },
      {
        title: 'Financial Markets',
        description: 'Stock exchanges invest heavily in redundancy to prevent trading disruptions.'
      }
    ],
    standards: ['ITIL', 'ISO 22301', 'NIST', 'SOC 2', 'HIPAA']
  }
};

// Helper function to get CIA principle data
export function getCIAData(principle) {
  return ciaData[principle] || null;
}

// Get all CIA principles
export function getAllCIAPrinciples() {
  return Object.keys(ciaData);
}
