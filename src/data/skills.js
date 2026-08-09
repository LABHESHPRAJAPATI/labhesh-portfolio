/**
 * Skills data organized by category.
 */

export const skillsSection = {
  title: 'Skills & Technologies',
  subtitle: 'A practical set of technologies and tools I use to build scalable web applications, APIs, third-party integrations, and mobile solutions.',
  enjoyedTitle: 'What I Enjoy Working With',
};

export const skillCategories = [
  {
    id: 'backend',
    name: 'Backend',
    description: 'Building robust server-side logic, APIs, and scalable application architectures.',
    skills: [
      { name: 'Laravel', level: 90 },
      { name: 'PHP', level: 90 },
      { name: 'REST API Development', level: 85 },
    ],
  },
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Crafting responsive, accessible, and delightful user interfaces.',
    skills: [
      { name: 'Vue.js', level: 85 },
      { name: 'React', level: 70 },
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
    id: 'tools',
    name: 'Tools',
    description: 'Day-to-day tools that streamline development, testing, and collaboration.',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 85 },
      { name: 'Postman', level: 75 },
      { name: 'AWS S3', level: 70 },
    ],
  },
];

export const allSkills = skillCategories.flatMap((category) => category.skills);

/**
 * Technologies featured in the skill grid and "What I Enjoy Working With" block.
 */
export const enjoyedTechnologies = [
  'Laravel',
  'PHP',
  'JavaScript',
  'Vue.js',
  'React',
  'jQuery',
  'MySQL',
  'SQL',
  'REST APIs',
  'Git',
  'GitHub',
  'Postman',
  'Tailwind CSS',
  'Bootstrap',
  'HTML',
  'CSS',
  'AI-Assisted Development',
];
