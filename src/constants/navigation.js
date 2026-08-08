/**
 * Navigation items for the main navbar.
 * Labels only — sections are created separately.
 */

import { SECTION_IDS } from './sections';

export const NAV_ITEMS = [
  { id: SECTION_IDS.HOME, label: 'Home', number: '01', href: `#${SECTION_IDS.HOME}` },
  { id: SECTION_IDS.ABOUT, label: 'About', number: '02', href: `#${SECTION_IDS.ABOUT}` },
  { id: SECTION_IDS.SKILLS, label: 'Skills', number: '03', href: `#${SECTION_IDS.SKILLS}` },
  { id: SECTION_IDS.EXPERIENCE, label: 'Experience', number: '04', href: `#${SECTION_IDS.EXPERIENCE}` },
  { id: SECTION_IDS.PROJECTS, label: 'Projects', number: '05', href: `#${SECTION_IDS.PROJECTS}` },
  { id: SECTION_IDS.SERVICES, label: 'Services', number: '06', href: `#${SECTION_IDS.SERVICES}` },
  { id: SECTION_IDS.CONTACT, label: 'Contact', number: '07', href: `#${SECTION_IDS.CONTACT}` },
];
