import { personal } from './personal';

/**
 * Social profile links.
 */

export const socials = [
  {
    id: 'github',
    name: 'GitHub',
    url: 'https://github.com/LABHESHPRAJAPATI',
    label: 'GitHub profile',
  },
  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/labhesh-prajapati?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'LinkedIn profile',
  },
  {
    id: 'email',
    name: 'Email',
    url: `mailto:${personal.email}`,
    label: 'Send an email',
  },
  {
    id: 'phone',
    name: 'Phone',
    url: `tel:${personal.phone}`,
    label: 'Call phone number',
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: personal.phone ? `https://wa.me/91${personal.phone}` : '',
    label: 'WhatsApp chat',
  },
];
