/**
 * Navigation items for the main navbar.
 * Labels only — sections are created separately.
 */

import { SECTION_IDS } from './sections';

export const NAV_ITEMS = [
  { id: SECTION_IDS.HOME, label: 'Home', href: `#${SECTION_IDS.HOME}` },
  { id: SECTION_IDS.ABOUT, label: 'About', href: `#${SECTION_IDS.ABOUT}` },
  { id: SECTION_IDS.SKILLS, label: 'Skills', href: `#${SECTION_IDS.SKILLS}` },
  { id: SECTION_IDS.EXPERIENCE, label: 'Experience', href: `#${SECTION_IDS.EXPERIENCE}` },
  { id: SECTION_IDS.PROJECTS, label: 'Projects', href: `#${SECTION_IDS.PROJECTS}` },
  { id: SECTION_IDS.EDUCATION, label: 'Education', href: `#${SECTION_IDS.EDUCATION}` },
  { id: SECTION_IDS.CONTACT, label: 'Contact', href: `#${SECTION_IDS.CONTACT}` },
];
