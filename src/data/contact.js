import { personal } from './personal';

/**
 * Contact information.
 */

export const contactSection = {
  title: "Let's Work Together",
  subtitle:
    'Have a project in mind or want to discuss opportunities? I would love to hear from you.',
  introduction:
    'I am currently available for full-time opportunities and collaborative projects. Whether you need a scalable Laravel backend, a modern frontend, or a complete full-stack solution, feel free to reach out.',
  emailLabel: 'Email',
  phoneLabel: 'Phone',
  whatsappLabel: 'WhatsApp',
  locationLabel: 'Location',
  availabilityLabel: 'Availability',
  emailCta: 'Email Me',
  phoneCta: 'Call Me',
};

export const contact = {
  email: personal.email,
  phone: personal.phone,
  location: personal.location,
  availability: personal.availability || 'Hybrid',
  whatsapp: personal.phone ? `https://wa.me/91${personal.phone}` : '',
  formEndpoint: '',
};
