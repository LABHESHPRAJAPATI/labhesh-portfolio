/**
 * Education history data.
 */

export const educationSection = {
  title: 'Education',
  subtitle: 'My academic foundation in computer applications and software development.',
};

export const education = [
  {
    id: 'bca-sdj',
    degree: 'Bachelor of Computer Applications (BCA)',
    abbreviation: 'BCA',
    institution: 'SDJ International College',
    university: 'Veer Narmad South Gujarat University',
    location: 'Surat, Gujarat, India',
    year: '2024',
    grade: 'CGPA 8.5',
    description:
      'Completed a comprehensive computer applications program with strong foundations in software development, databases, web technologies, and problem solving.',
  },
];

export const academicHighlights = [
  { value: education[0].abbreviation, label: 'Degree' },
  { value: education[0].grade, label: 'Grade' },
  { value: education[0].year, label: 'Graduated' },
];
