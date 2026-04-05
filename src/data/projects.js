/**
 * Featured work: slug keys must match what ProjectCard passes to the modal.
 */
export const projects = [
  {
    slug: 'challenge1',
    title: 'Challenge1',
    tags: ['Figma', 'UI/UX', 'Design'],
    description:
      'A detailed UI/UX design project for a Ford Mustang GT created exclusively in Figma.',
    image: '/images/challenge1.png',
    imageAlt: 'Ford Mustang GT Project',
    url: 'https://www.figma.com/design/ftlFeLkRtiDxKES3wvlgNj/Challenge1_Socias?m=auto&t=NsReWMVujX7cmRvY-6',
  },
  {
    slug: 'challenge2',
    title: 'Challenge2',
    tags: ['Figma', 'UI/UX', 'Music'],
    description:
      'A sleek, dark-themed music player interface design with playback controls and playlist view, created exclusively in Figma.',
    image: '/images/challenge2.png',
    imageAlt: 'Music Player Interface Project',
    url: 'https://www.figma.com/design/Cgp4nKQfrqtvj40vqJhS33/Challenge2-Socias?m=auto&t=NsReWMVujX7cmRvY-6',
  },
  {
    slug: 'rest_n_buds',
    title: 'Rest n Buds',
    tags: ['Figma', 'Mobile App', 'AI'],
    description:
      'A sophisticated design and prototype for an airbuds application featuring advanced noise cancellation and real-time AI translation that detects and translates speech.',
    image: '/images/rest_n_buds.png',
    imageAlt: 'Rest n Buds Project',
    url: 'https://www.figma.com/design/1dbVLg11hiC3IMmvDwNQJH/Rest-N-Buds?m=auto&t=NsReWMVujX7cmRvY-6',
  },
  {
    slug: 'my_first_portfolio',
    title: 'My First Portfolio',
    tags: ['HTML', 'CSS', 'UI/UX'],
    description:
      'A comprehensive personal portfolio website for an IT student, featuring a clean layout with Home, About Me, Project, Skill, and Contact sections.',
    image: '/images/my_first_portfolio.png',
    imageAlt: 'My First Portfolio',
    url: 'https://www.figma.com/design/nAFm6ZqoZLDguUtOtPBrol/Portfolio?m=auto&t=NsReWMVujX7cmRvY-6',
  },
  {
    slug: 'awesometodos',
    title: 'Awesometodos',
    tags: ['Web App', 'Render', 'Productivity'],
    description:
      'A robust and clean todo web application built for task management and successfully deployed on Render.',
    image: '/images/awesometodos.png',
    imageAlt: 'Awesometodos',
    url: 'https://awesome-todos-app-vlzg.onrender.com/',
  },
  {
    slug: 'tradetime',
    title: 'Tradetime',
    tags: ['Figma', 'Prototype', 'Web Design'],
    description:
      'A comprehensive Tradetime platform design created in Figma, fully prototyped and currently in the final stages of online deployment.',
    image: '/images/tradetime.png',
    imageAlt: 'Tradetime Project',
    url: 'https://www.figma.com/proto/6f84eTidHmfcYpnED6RjkJ?node-id=548-2960&t=NsReWMVujX7cmRvY-6',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
