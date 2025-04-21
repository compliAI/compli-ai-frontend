// src/utils/constants.js
export const FEATURES = {
    DATA_MAPPING: 'Data Mapping',
    RISK_ASSESSMENT: 'Risk Assessment',
    REAL_TIME_MONITORING: 'Real-Time Monitoring',
    CUSTOM_FRAMEWORKS: 'Customizable Frameworks',
    REMEDIATION: 'Remediation Guidance',
    OPEN_SOURCE: 'Open Source'
  };
  
  export const GETTING_STARTED_STEPS = [
    'Installation',
    'Configuration',
    'Initial Scan',
    'Review Results',
    'Implement Changes',
    'Continuous Monitoring'
  ];
  
  export const INSTALLATION_CODE = `# Clone the repository
  git clone https://github.com/compliai/intelligent-privacy-auditor.git
  
  # Navigate to the project directory
  cd intelligent-privacy-auditor
  
  # Install dependencies
  npm install
  
  # Configure your environment
  cp .env.example .env
  # Edit .env with your settings
  
  # Start the application
  npm start`;
  
  export const COMMUNITY_RESOURCES = [
    {
      title: "GitHub Repository",
      description: "Access our code, contribute, and report issues",
      action: "View on GitHub",
      link: "https://github.com/orgs/compliAI/repositories"
    },
    {
      title: "Documentation",
      description: "Comprehensive guides and API references",
      action: "Read Docs",
      link: "/documentation"
    },
    {
      title: "Community Forum",
      description: "Discuss, ask questions, and share insights",
      action: "Join Forum",
      link: "/community"
    },
    {
      title: "Support",
      description: "Get professional help and training",
      action: "Contact Support",
      link: "/support"
    }
  ];