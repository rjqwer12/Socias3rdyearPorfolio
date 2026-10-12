/**
 * Featured work: slug keys must match what ProjectCard passes to the modal.
 */
export const projects = [
  {
    slug: 'awesometodos',
    title: 'Awesometodos: Task Manager',
    kind: 'Web application',
    contribution: 'Built the task management application and deployed it on Render.',
    tags: ['Web App', 'Render', 'Productivity'],
    description:
      'A task management web application deployed on Render.',
    image: '/images/awesometodos.png',
    imageAlt: 'Awesometodos',
    url: 'https://awesome-todos-app-vlzg.onrender.com/',
  },
  {
    slug: 'challenge1',
    title: 'Mustang Website Design',
    kind: 'Interface design',
    contribution: 'Designed the website interface in Figma.',
    tags: ['Figma', 'UI/UX', 'Design'],
    description:
      'A Ford Mustang GT website concept created in Figma.',
    image: '/images/challenge1.png',
    imageAlt: 'Ford Mustang GT Project',
    url: 'https://www.figma.com/design/ftlFeLkRtiDxKES3wvlgNj/Challenge1_Socias?m=auto&t=NsReWMVujX7cmRvY-6',
  },
  {
    slug: 'challenge2',
    title: 'Music Player Interface',
    kind: 'Interface design',
    contribution: 'Designed the playback controls and playlist interface in Figma.',
    tags: ['Figma', 'UI/UX', 'Music'],
    description:
      'A music player concept with playback controls and a playlist view.',
    image: '/images/challenge2.png',
    imageAlt: 'Music Player Interface Project',
    url: 'https://www.figma.com/design/Cgp4nKQfrqtvj40vqJhS33/Challenge2-Socias?m=auto&t=NsReWMVujX7cmRvY-6',
  },
  {
    slug: 'rest_n_buds',
    title: 'Rest n Buds: Earbuds App Concept',
    kind: 'App prototype',
    contribution: 'Designed and prototyped the app interface in Figma.',
    tags: ['Figma', 'Mobile App', 'AI'],
    description:
      'An earbuds app prototype exploring noise cancellation and speech translation controls.',
    image: '/images/rest_n_buds.png',
    imageAlt: 'Rest n Buds Project',
    url: 'https://www.figma.com/design/1dbVLg11hiC3IMmvDwNQJH/Rest-N-Buds?m=auto&t=NsReWMVujX7cmRvY-6',
  },
  {
    slug: 'my_first_portfolio',
    title: 'Personal Portfolio Design',
    kind: 'Interface design',
    contribution: 'Designed the portfolio layout and section structure.',
    tags: ['Figma', 'UI/UX', 'Portfolio'],
    description:
      'An early portfolio concept with home, about, projects, skills, and contact sections.',
    image: '/images/my_first_portfolio.png',
    imageAlt: 'My First Portfolio',
    url: 'https://www.figma.com/design/nAFm6ZqoZLDguUtOtPBrol/Portfolio?m=auto&t=NsReWMVujX7cmRvY-6',
  },
  {
    slug: 'tradetime',
    title: 'Tradetime: Platform Prototype',
    kind: 'Web prototype',
    contribution: 'Designed the platform interface and connected its prototype flows.',
    tags: ['Figma', 'Prototype', 'Web Design'],
    description:
      'A platform interface and interactive prototype created in Figma.',
    image: '/images/tradetime.png',
    imageAlt: 'Tradetime Project',
    url: 'https://www.figma.com/proto/6f84eTidHmfcYpnED6RjkJ?node-id=548-2960&t=NsReWMVujX7cmRvY-6',
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) ?? null;
}
