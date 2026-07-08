/**
 * Skills data organized by category.
 */

export const skillsSection = {
  title: 'Skills & Technologies',
  subtitle: 'A curated set of tools and technologies I use to build modern, scalable applications.',
  enjoyedTitle: 'What I Enjoy Working With',
};

export const skillCategories = [
  {
    id: 'programming-languages',
    name: 'Programming Languages',
    description: 'Core languages used for building robust and scalable applications.',
    skills: [{ name: 'PHP', level: 90 }],
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Building robust server-side logic, APIs, and scalable application architectures.',
    skills: [
      { name: 'Laravel', level: 90 },
      { name: 'PHP', level: 90 },
      { name: 'REST API Development', level: 85 },
      { name: 'Laravel Features', level: 85 },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Crafting responsive, accessible, and delightful user interfaces.',
    skills: [
      { name: 'Vue.js', level: 85 },
      { name: 'React (AI-assisted)', level: 70 },
      { name: 'JavaScript (ES6+)', level: 80 },
      { name: 'HTML5', level: 80 },
      { name: 'Tailwind CSS', level: 85 },
      { name: 'Bootstrap', level: 80 },
    ],
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Designing efficient schemas, queries, and data storage solutions.',
    skills: [{ name: 'MySQL', level: 85 }],
  },
  {
    id: 'cloud',
    name: 'Cloud',
    description: 'Managing object storage, deployments, and cloud-based integrations.',
    skills: [
      { name: 'AWS S3', level: 70 },
      { name: 'Wasabi', level: 70 },
    ],
  },
  {
    id: 'version-control',
    name: 'Version Control',
    description: 'Maintaining clean code history and collaborative development workflows.',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
    ],
  },
  {
    id: 'tools',
    name: 'Tools',
    description: 'Day-to-day tools that streamline development, testing, and collaboration.',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Postman', level: 75 },
    ],
  },
  {
    id: 'ai-tools',
    name: 'AI Tools',
    description: 'Leveraging AI-assisted tools to accelerate development and problem solving.',
    skills: [
      { name: 'ChatGPT', level: 80 },
      { name: 'Cursor AI', level: 75 },
      { name: 'Claude AI', level: 75 },
      { name: 'Gemini', level: 70 },
      { name: 'Antigravity', level: 70 },
    ],
  },
];

export const allSkills = skillCategories.flatMap((category) => category.skills);

/**
 * Technologies featured in the "What I Enjoy Working With" block.
 */
export const enjoyedTechnologies = ['PHP', 'Laravel', 'Vue.js'];
