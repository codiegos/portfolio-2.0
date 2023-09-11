import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail, BiLogoDiscordAlt } from 'react-icons/bi'
import { SiCodewars } from 'react-icons/si'
import { PiMicrosoftOutlookLogoDuotone } from 'react-icons/pi'

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About me',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const

export const socialMedias = [
  {
    id: 1,
    name: 'GitHub',
    link: 'https://github.com/codiegos',
    icon: AiFillGithub,
    color: '#fff',
    clipboardCopy: 'https://github.com/codiegos',
  },
  {
    id: 2,
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/codiegos/',
    icon: AiFillLinkedin,
    color: '#0A6FC2',
    clipboardCopy: 'https://www.linkedin.com/in/codiegos/',
  },
  {
    id: 3,
    name: 'Gmail',
    link: 'mailto:diegosebsk@gmail.com',
    icon: BiLogoGmail,
    color: '#EA4335',
    clipboardCopy: 'diegosebsk@gmail.com',
  },
  {
    id: 4,
    name: 'Outlook',
    link: 'mailto:codiegos@outlook.com',
    icon: PiMicrosoftOutlookLogoDuotone,
    color: '#097CD5',
    clipboardCopy: 'codiegos@outlook.com',
  },
  {
    id: 5,
    name: 'Discord',
    link: 'https://discord.com/users/335564193745076226',
    icon: BiLogoDiscordAlt,
    color: '#7289DA',
    clipboardCopy: 'https://discord.com/users/335564193745076226',
  },
  {
    id: 6,
    name: 'CodeWars',
    link: 'https://www.codewars.com/users/codiegos',
    icon: SiCodewars,
    color: '#B1361F',
    clipboardCopy: 'https://www.codewars.com/users/codiegos',
  },
] as const

export const projects = [
  {
    id: 2,
    name: 'Monstercat Clone Page',
    image: '/images/monstercat-page.webp',
    link: 'https://monstercat-album-release-page.vercel.app/',
    github: 'https://github.com/codiegos/monstercat-album-release-page',
    tags: ['React', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 3,
    name: 'Freelance Project',
    image: '/images/turicuentro-page.webp',
    link: undefined,
    github: undefined,
    tags: ['React', 'Material-UI', 'PostgreSQL', 'Express'],
  },
  {
    id: 4,
    name: 'Django Shopping Cart',
    image: '/images/django-shop-page.webp',
    link: undefined,
    github: 'https://github.com/codiegos/carrito-django',
    tags: ['Django', 'Python', 'MySQL', 'Bootstrap'],
  },
  {
    id: 5,
    name: 'Barrio Italia Prototype',
    image: '/images/barrio-italia-page.webp',
    link: 'https://barrio-italia.netlify.app/',
    github: 'https://github.com/codiegos/IyE-barrio-Italia',
    tags: ['React', 'Typescript', 'TailwindCSS'],
  },
  {
    id: 6,
    name: 'F2P Games Search',
    image: '/images/f2p-games-page.webp',
    link: 'https://f2p-games-search.netlify.app/',
    github: 'https://github.com/codiegos/f2p-games',
    tags: ['React', 'TailwindCSS'],
  },
  {
    id: 1,
    name: 'Portfolio',
    image: '/images/portfolio-page.webp',
    link: undefined,
    github: '#',
    tags: ['React', 'Typescript', 'TailwindCSS', 'NextJS'],
  },
] as const

export const canvasImages = [
  'html',
  'javascript',
  'css',
  'sequelize',
  'java',
  'django',
  'docker',
  'nest',
  'python',
  'react',
  'typescript',
  'nodejs',
  'tailwindcss',
  'next',
  'redux-action',
  'vscode',
  'git',
  'vite',
].map((icon) => {
  const baseURL = 'https://images.weserv.nl'
  return `${baseURL}/?url=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FPKief%2Fvscode-material-icon-theme%40main%2Ficons%2F${icon}.svg&w=50&h=50`
})
