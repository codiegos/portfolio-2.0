import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { BiLogoGmail, BiLogoDiscordAlt } from 'react-icons/bi'
import { SiCodewars } from 'react-icons/si'
import { PiMicrosoftOutlookLogoDuotone } from 'react-icons/pi'

export const links = [
  {
    name: 'Home',
    hash: '#home',
    tKey: 'home',
  },
  {
    name: 'About me',
    hash: '#about',
    tKey: 'about',
  },
  {
    name: 'Projects',
    hash: '#projects',
    tKey: 'projects',
  },
  {
    name: 'Contact',
    hash: '#contact',
    tKey: 'contact',
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

interface ProjectCopy {
  en: string
  es: string
}

export interface Project {
  id: number
  name: string
  image: string
  link?: string
  github?: string
  tags: readonly string[]
  description: ProjectCopy
}

export const projects: readonly Project[] = [
  {
    id: 0,
    name: 'Evolux Platform',
    image: '/images/evolux.webp',
    link: undefined,
    github: undefined,
    tags: ['Next.js', 'TypeScript', 'Prisma', 'TimescaleDB', 'Grafana'],
    description: {
      en: 'Internal SaaS for industrial lighting manufacturing — batch production, equipment traceability, maintenance reporting and IoT telemetry ingestion.',
      es: 'SaaS interno para fabricación de iluminación industrial — producción por lotes, trazabilidad de equipos, reportería de mantenciones e ingesta de telemetría IoT.',
    },
  },
  {
    id: 1,
    name: 'Monstercat Clone',
    image: '/images/monstercat-page.webp',
    link: 'https://monstercat-album-release-page.vercel.app/',
    github: 'https://github.com/codiegos/monstercat-album-release-page',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    description: {
      en: 'Pixel-faithful clone of the Monstercat album release page, focused on layout precision and smooth animations.',
      es: 'Clon fiel de la página de lanzamiento de álbum de Monstercat, enfocado en precisión de layout y animaciones suaves.',
    },
  },
  {
    id: 2,
    name: 'Turicuentro · Freelance',
    image: '/images/turicuentro-page.webp',
    link: undefined,
    github: undefined,
    tags: ['React', 'Material UI', 'PostgreSQL', 'Express'],
    description: {
      en: 'Tourism platform with calendar-based reservations, customer management and JWT auth — built end-to-end as a freelance project.',
      es: 'Plataforma turística con reservas por calendario, gestión de clientes y autenticación JWT — construida end-to-end como freelance.',
    },
  },
  {
    id: 3,
    name: 'Barrio Italia',
    image: '/images/barrio-italia-page.webp',
    link: 'https://barrio-italia.netlify.app/',
    github: 'https://github.com/codiegos/IyE-barrio-Italia',
    tags: ['React', 'TypeScript', 'TailwindCSS'],
    description: {
      en: 'Prototype site for a Santiago neighborhood — local commerce discovery and event listings.',
      es: 'Sitio prototipo para un barrio de Santiago — descubrimiento de comercio local y listado de eventos.',
    },
  },
  {
    id: 4,
    name: 'F2P Games Search',
    image: '/images/f2p-games-page.webp',
    link: 'https://f2p-games-search.netlify.app/',
    github: 'https://github.com/codiegos/f2p-games',
    tags: ['React', 'TailwindCSS', 'REST API'],
    description: {
      en: 'Search and filter free-to-play games across genres and platforms, consuming a public games API.',
      es: 'Buscar y filtrar juegos free-to-play por género y plataforma, consumiendo una API pública de juegos.',
    },
  },
  {
    id: 5,
    name: 'Django Shopping Cart',
    image: '/images/django-shop-page.webp',
    link: undefined,
    github: 'https://github.com/codiegos/carrito-django',
    tags: ['Django', 'Python', 'MySQL', 'Bootstrap'],
    description: {
      en: 'Classic e-commerce cart in Django with product catalog, session-based cart and admin management.',
      es: 'Carrito de e-commerce clásico en Django con catálogo, carrito por sesión y gestión administrativa.',
    },
  },
]

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
