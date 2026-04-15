export interface ProjectMetadata {
  repoName: string;
  customTitle?: string;
  tags: string[];
  liveDemo?: string;
  image?: string;
  featured?: boolean;
}

/**
 * Mapping of GitHub repository names to custom metadata.
 * Categories: 'Full Stack', 'Mobile', 'AI', 'Cybersecurity'
 */
export const projectsMetadata: Record<string, ProjectMetadata> = {
  // --- WEB APPLICATION PROJECTS ---
  'Introduction-to-Java-Applets': {
    repoName: 'Introduction-to-Java-Applets',
    customTitle: 'Java Applets Introduction',
    tags: ['Web Apps'],
    featured: true,
  },
  'portfolio': {
    repoName: 'portfolio',
    customTitle: 'Personal Portfolio',
    tags: ['Web Apps'],
    featured: true,
  },
  'DOM': {
    repoName: 'DOM',
    customTitle: 'DOM Manipulation Study',
    tags: ['Web Apps'],
    featured: false,
  },
  'RapidType': {
    repoName: 'RapidType',
    customTitle: 'RapidType Speed Tester',
    tags: ['Web Apps'],
    featured: true,
  },

  // --- MOBILE APPLICATION PROJECTS (Dart/Flutter) ---
  'Flutter-Auth-app': {
    repoName: 'Flutter-Auth-app',
    customTitle: 'Secure Auth System',
    tags: ['Mobile'],
    featured: true,
  },
  'keyfinder-app': {
    repoName: 'keyfinder-app',
    customTitle: 'KeyFinder Utility',
    tags: ['Mobile'],
    featured: true,
  },
  'flutter_trivon-app': {
    repoName: 'flutter_trivon-app',
    customTitle: 'Trivon App',
    tags: ['Mobile'],
    featured: true,
  },
  'pesapilot': {
    repoName: 'pesapilot',
    customTitle: 'PesaPilot Finance',
    tags: ['Mobile'],
    featured: true,
  },
  'notely': {
    repoName: 'notely',
    customTitle: 'Notely Notes',
    tags: ['Mobile'],
    featured: true,
  },
  'Mastering-Dart': {
    repoName: 'Mastering-Dart',
    customTitle: 'Dart Mastery Guide',
    tags: ['Mobile'],
    featured: true,
  },
  'KeyBeats': {
    repoName: 'KeyBeats',
    customTitle: 'KeyBeats Music',
    tags: ['Mobile'],
    featured: true,
  },
  'flutter_diary_app': {
    repoName: 'flutter_diary_app',
    customTitle: 'Digital Diary',
    tags: ['Mobile'],
    featured: true,
  },
  'Flutter_basics': {
    repoName: 'Flutter_basics',
    customTitle: 'Flutter Fundamentals',
    tags: ['Mobile'],
    featured: false,
  },
  'dailydose': {
    repoName: 'dailydose',
    customTitle: 'Daily Dose App',
    tags: ['Mobile'],
    featured: true,
  },
  'medicine_reminder-app': {
    repoName: 'medicine_reminder-app',
    customTitle: 'Medicine Reminder',
    tags: ['Mobile'],
    featured: true,
  },
  'flutter-ecommerce-app': {
    repoName: 'flutter-ecommerce-app',
    customTitle: 'Modern E-Commerce Store',
    tags: ['Mobile'],
    liveDemo: 'https://play.google.com/store/apps/details?id=example',
    featured: true,
  },
  'flutter-task-manager': {
    repoName: 'flutter-task-manager',
    customTitle: 'Smart Task Orchestrator',
    tags: ['Mobile'],
    featured: true,
  },
  'dart-finance-tracker': {
    repoName: 'dart-finance-tracker',
    customTitle: 'Personal Finance Analytics',
    tags: ['Mobile'],
    featured: true,
  },

  // --- WEB APPLICATION PROJECTS ---
  'nextjs-portfolio-pro': {
    repoName: 'nextjs-portfolio-pro',
    customTitle: 'High-Performance Portfolio',
    tags: ['Web Apps'],
    liveDemo: 'https://denismurithi.dev',
    featured: true,
  },
  'react-admin-dashboard': {
    repoName: 'react-admin-dashboard',
    customTitle: 'Enterprise Analytics Dashboard',
    tags: ['Web Apps'],
    featured: true,
  },

  // --- FULL STACK JAVA APPS ---
  'spring-boot-inventory-system': {
    repoName: 'spring-boot-inventory-system',
    customTitle: 'Enterprise Inventory Manager',
    tags: ['Web Apps'],
    featured: true,
  },
  'java-banking-api': {
    repoName: 'java-banking-api',
    customTitle: 'Secure Core Banking API',
    tags: ['Web Apps', 'Cybersecurity'],
    featured: true,
  },
  'spring-security-auth-server': {
    repoName: 'spring-security-auth-server',
    customTitle: 'OAuth2 Authentication Server',
    tags: ['Web Apps', 'Cybersecurity'],
    featured: true,
  },

  // --- CYBERSECURITY PROJECTS ---
  'Complete-Cybersecurity-Roadmap': {
    repoName: 'Complete-Cybersecurity-Roadmap',
    customTitle: 'Complete Cybersecurity Roadmap',
    tags: ['Cybersecurity'],
    featured: true,
  },
  'cybersec-hardening-guide': {
    repoName: 'cybersec-hardening-guide',
    customTitle: 'Linux Server Hardening Guide',
    tags: ['Cybersecurity'],
    featured: true,
  },
  'network-vuln-scanner': {
    repoName: 'network-vuln-scanner',
    customTitle: 'Network Vulnerability Scanner',
    tags: ['Cybersecurity'],
    featured: true,
  },
};
