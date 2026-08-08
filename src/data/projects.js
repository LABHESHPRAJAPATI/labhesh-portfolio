/**
 * Projects portfolio data.
 */

export const projectsSection = {
  title: 'Featured Projects',
  subtitle:
    'A selection of real-world applications I have worked on, from accounting systems to ecommerce platforms.',
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
    role: 'Backend Developer',
    description:
      'A hardware sales and accounting management system that includes accounting modules, inventory management, and sales tracking.',
    responsibilities: [
      'Built backend modules for sales and inventory management.',
      'Implemented accounting workflows and reporting.',
      'Maintained database schema and optimized queries.',
    ],
    features: [
      'Hardware sales management',
      'Accounting modules',
      'Inventory management',
    ],
    technologies: ['PHP', 'Laravel', 'MySQL'],
    stats: {
      modules: '5+',
      duration: '3 months',
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
    role: 'Full Stack Developer',
    description:
      'An ecommerce and inventory management platform with product import, selling, checkout, and ecommerce integrations.',
    responsibilities: [
      'Developed product import and inventory management features.',
      'Implemented selling and checkout flows.',
      'Integrated ecommerce APIs and third-party services.',
    ],
    features: [
      'Ecommerce platform',
      'Inventory management',
      'Product import',
      'Selling and checkout',
      'Ecommerce integrations',
    ],
    technologies: ['Laravel', 'Vue.js', 'MySQL'],
    stats: {
      modules: '8+',
      duration: 'Ongoing',
      status: 'Current',
    },
    previewType: 'ecommerce',
    image: '/images/projects/wye-tech.png',
    link: '',
    github: '',
  },
];
