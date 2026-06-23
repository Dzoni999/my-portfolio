export interface SkillGroup {
  category: string;
  eyebrow: string;
  description: string;
  accent: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  status: string;
  imageLabel: string;
}

export const profile = {
  name: 'Nikola Sajic',
  location: 'Serbia, Belgrade',
  role: 'Junior Backend Developer',
  email: 'nikolasajic7@gmail.com',
  github: 'https://github.com/Dzoni999',
  linkedin: 'https://www.linkedin.com/in/nikola-sajic/',
  cvUrl: '/Nikola_Sajic_CV.pdf'
} as const;

export const metrics: Metric[] = [
  {
    value: '4',
    label: 'Core skill categories'
  },
  {
    value: '.NET',
    label: 'Primary backend stack'
  },
  {
    value: 'SQL',
    label: 'Relational database focus'
  },
  {
    value: 'REST',
    label: 'API-first application design'
  }
];

export const skillGroups: SkillGroup[] = [
  {
    category: 'Backend',
    eyebrow: 'Application core',
    description: 'Designing maintainable APIs, business logic, authentication flows, and data access layers.',
    accent: 'API',
    skills: [
      { name: 'C#', level: 88 },
      { name: 'ASP.NET Core Web API', level: 84 },
      { name: 'Entity Framework Core', level: 80 },
      { name: 'LINQ', level: 82 },
      { name: 'REST APIs', level: 86 },
      { name: 'JWT Authentication', level: 76 }
    ]
  },
  {
    category: 'Databases',
    eyebrow: 'Data modeling',
    description: 'Building relational schemas that stay understandable as product requirements grow.',
    accent: 'SQL',
    skills: [
      { name: 'SQL Server', level: 82 },
      { name: 'PostgreSQL', level: 74 }
    ]
  },
  {
    category: 'Frontend',
    eyebrow: 'Full-stack fluency',
    description: 'Creating clean client experiences and collaborating confidently across the stack.',
    accent: 'UI',
    skills: [
      { name: 'Angular', level: 76 },
      { name: 'TypeScript', level: 78 },
      { name: 'JavaScript', level: 74 },
      { name: 'HTML', level: 84 },
      { name: 'CSS', level: 80 },
      { name: 'Tailwind CSS', level: 78 }
    ]
  },
  {
    category: 'Tools',
    eyebrow: 'Developer workflow',
    description: 'Working with modern tooling for version control, API documentation, debugging, and database work.',
    accent: 'DX',
    skills: [
      { name: 'Git', level: 82 },
      { name: 'GitHub', level: 80 },
      { name: 'Visual Studio', level: 84 },
      { name: 'VS Code', level: 82 },
      { name: 'Swagger', level: 78 },
      { name: 'DBeaver', level: 74 }
    ]
  }
];

export const principles = [
  'Clean, maintainable code over clever shortcuts',
  'Clear REST contracts and predictable API behavior',
  'Database design that supports future product change',
  'Software architecture that balances simplicity and scale'
] as const;

export const highlights = [
  {
    title: 'API-first thinking',
    description: 'I shape backend features around clear contracts, validation rules, predictable status codes, and useful documentation.'
  },
  {
    title: 'Maintainable delivery',
    description: 'I prefer simple layers, readable naming, and code that future teammates can understand without a long tour.'
  },
  {
    title: 'Data awareness',
    description: 'I treat schemas, relationships, migrations, and query behavior as part of the product architecture.'
  }
] as const;

export const projects: Project[] = [
  {
  title: 'Employee Management API',
  description: 'Backend REST API for managing employees, authentication, and business workflows using ASP.NET Core, Entity Framework Core, and SQL Server.',
  technologies: ['ASP.NET Core', 'EF Core', 'SQL Server', 'JWT'],
  githubUrl: 'https://github.com/Dzoni999/employee-management-api',
  liveUrl: '#',
  status: 'Completed',
  imageLabel: 'Employee Management API'
  },
  {
  title: 'Product Management System',
  description: 'Enterprise-style product management application featuring CRUD operations, database integration, REST APIs, and a responsive Angular frontend. Designed to demonstrate full-stack development using the Microsoft technology stack.',
  technologies: ['Angular', 'ASP.NET Core', 'EF Core', 'SQL Server', 'REST API'],
  githubUrl: 'https://github.com/Dzoni999/Product_Management',
  liveUrl: '#',
  status: 'Completed',
  imageLabel: 'Product Management'
  },
  {
  title: 'AI CV Analyzer',
  description: 'AI-powered workflow built with n8n that analyzes CVs, extracts relevant information, and automates candidate evaluation. Demonstrates workflow automation, AI integration, and process orchestration.',
  technologies: ['n8n', 'AI', 'Automation', 'Workflow'],
  githubUrl: 'https://github.com/Dzoni999/n8n-ai-cv-analyzer',
  liveUrl: '#',
  status: 'AI Automation',
  imageLabel: 'AI CV Analyzer'
  },
];
