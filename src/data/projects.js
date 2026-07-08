/**
 * Projects portfolio data.
 */

export const projectsSection = {
  title: 'Featured Projects',
  subtitle:
    'A selection of real-world applications I have built, from accounting systems to ecommerce platforms.',
  featuresLabel: 'Key Features',
  responsibilitiesLabel: 'Responsibilities',
  technologiesLabel: 'Technology Stack',
};

export const projects = [
  {
    id: 'zuma-hardware',
    name: 'Zuma Hardware',
    tagline: 'Accounting System',
    status: 'Completed',
    role: '',
    description:
      'A hardware sales and accounting management system that includes accounting modules and inventory management.',
    responsibilities: [],
    features: [
      'Hardware sales management',
      'Accounting modules',
      'Inventory management',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL'],
    stats: {
      modules: '',
      duration: '',
      status: 'Completed',
    },
    previewType: 'accounting',
    image: '/images/projects/zuma-hardware.png',
    link: '',
    github: '',
  },
  {
    id: 'wye-tech',
    name: 'WYE TECH',
    tagline: 'Ecommerce + Inventory',
    status: 'Current',
    role: '',
    description:
      'An ecommerce and inventory management platform with product import, selling, checkout, and ecommerce integrations.',
    responsibilities: [],
    features: [
      'Ecommerce platform',
      'Inventory management',
      'Product import',
      'Selling and checkout',
      'Ecommerce integrations',
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    stats: {
      modules: '',
      duration: '',
      status: 'Current',
    },
    previewType: 'ecommerce',
    image: '/images/projects/wye-tech.png',
    link: '',
    github: '',
  },
];
