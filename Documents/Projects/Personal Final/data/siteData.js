export const socialLinks = {
  github: 'https://github.com/jeevanrisal',
  linkedin: 'https://www.linkedin.com/in/jeevan-risal-a76035285/',
  email: 'mailto:jvnrisal@gmail.com',
};

export const projects = [
  {
    title: 'Personal Finance Management System',
    category: 'Full-stack',
    description:
      'Full-stack app built with modular services and scalable routing for day-to-day financial workflows.',
    bullets: [
      'REST APIs with structured data handling for accounts, budgets, and transactions.',
      'Service-oriented code organization for maintainability and growth.',
    ],
    tech: ['JavaScript', 'Node.js', 'MongoDB'],
    codeLink: 'https://github.com/jeevanrisal/finance-app-frontend',
    demoLink: 'https://finance-app-frontend-delta.vercel.app/',
    demoStatus: 'Live',
  },
  {
    title: 'Transaction Categorisation System (Research-driven)',
    category: 'Data',
    description:
      'Research project defining a rule-based transaction categorisation framework for synthetic banking statements with auditable labels for spending analysis.',
    bullets: [
      'Built a rulebook with 10 top-level categories and 27 transaction types to classify transactions as Essential, Non-Essential, or Excluded.',
      'Annotated a 5,000-row subset (500 rows across 10 files) from a 33,868-row synthetic transaction dataset for validation and downstream use.',
      'Produced categorized CSV outputs suitable for budgeting analysis and future ML/NLP-based automation experiments.',
    ],
    tech: [
      'Python',
      'CSV Processing',
      'Rule-Based Classification',
      'Data Annotation',
    ],
    codeLink: 'https://github.com/jeevanrisal/TransactionCategorization',
    demoStatus: '.....',
  },
  {
    title: 'Recipe & Image-Based Web Application',
    category: 'Frontend',
    description:
      'A full-stack Node.js application that generates recipes from uploaded food images. The system detects ingredients using image recognition and dynamically creates structured recipes through a modular backend API. Built with Express, RESTful architecture, and CI/CD deployment setup.',
    bullets: [
      'Upload food images for automated ingredient detection',
      'Server-side image analysis',
      'Dynamic recipe generation logic',
      'Modular backend structure',
    ],
    tech: ['JavaScript', 'Frontend UI', 'API Integration'],
    codeLink: 'https://github.com/jeevanrisal/Recipe-With-Image',
    demoStatus: 'Coming soon',
  },
];

export const experiences = [
  {
    company: 'HS Creations',
    role: 'Admin / Graphics Design',
    period: '2024-Present',
    highlights: [
      'Managed client communication, order operations, and delivery coordination.',
      'Supported invoicing workflows and improved day-to-day cross-team handoffs.',
    ],
  },
  {
    company: 'Wrapsy Tech Nepal',
    role: 'Owner / HR',
    period: '2022-2023',
    highlights: [
      'Secured investment and supported business growth through client acquisition.',
      'Led hiring and team coordination across project delivery and operations.',
    ],
  },
  {
    company: 'LastDoor Solutions',
    role: 'Frontend Intern',
    period: '2021',
    highlights: [
      'Built UI features with HTML, CSS, SCSS, JavaScript, and BEM conventions.',
      'Worked in Agile SDLC workflows with feedback cycles and code collaboration.',
    ],
  },
];

export const education = [
  {
    degree: "Master's in Information Technology",
    institution: 'University of Technology Sydney (UTS)',
    period: '2024-2025',
  },
  {
    degree: 'BSc (Hons) Computer Science',
    institution: 'University of Wolverhampton',
    period: '2019-2022',
  },
];
