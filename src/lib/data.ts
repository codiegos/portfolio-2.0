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

export const CV_URL =
  'https://drive.google.com/file/d/1ac6jNh-z-vfoYi3JrIa-mGVwxzq3xJsu/view?usp=sharing'

export const socialMedias = [
  {
    id: 1,
    name: 'GitHub',
    handle: 'codiegos',
    link: 'https://github.com/codiegos',
    icon: AiFillGithub,
    color: '#fff',
    clipboardCopy: 'https://github.com/codiegos',
  },
  {
    id: 2,
    name: 'LinkedIn',
    handle: 'in/codiegos',
    link: 'https://www.linkedin.com/in/codiegos/',
    icon: AiFillLinkedin,
    color: '#0A6FC2',
    clipboardCopy: 'https://www.linkedin.com/in/codiegos/',
  },
  {
    id: 3,
    name: 'Outlook',
    handle: 'codiegos@outlook.com',
    link: 'mailto:codiegos@outlook.com',
    icon: PiMicrosoftOutlookLogoDuotone,
    color: '#097CD5',
    clipboardCopy: 'codiegos@outlook.com',
  },
  {
    id: 4,
    name: 'Gmail',
    handle: 'diegosebsk@gmail.com',
    link: 'mailto:diegosebsk@gmail.com',
    icon: BiLogoGmail,
    color: '#EA4335',
    clipboardCopy: 'diegosebsk@gmail.com',
  },
  {
    id: 5,
    name: 'Discord',
    handle: 'codiegos',
    link: 'https://discord.com/users/335564193745076226',
    icon: BiLogoDiscordAlt,
    color: '#7289DA',
    clipboardCopy: 'https://discord.com/users/335564193745076226',
  },
  {
    id: 6,
    name: 'CodeWars',
    handle: 'codiegos',
    link: 'https://www.codewars.com/users/codiegos',
    icon: SiCodewars,
    color: '#B1361F',
    clipboardCopy: 'https://www.codewars.com/users/codiegos',
  },
] as const

export interface Localized<T = string> {
  en: T
  es: T
}

export interface ProjectImage {
  src: string
  alt: Localized
}

export interface Project {
  slug: string
  name: string
  kind: Localized
  year?: string
  status?: Localized
  featured: boolean
  link?: string
  linkLabel?: string
  github?: string
  tags: readonly string[]
  summary: Localized
  highlights: Localized<readonly string[]>
  gallery: readonly ProjectImage[]
}

const evolux = '/images/projects/evolux'
const tejiendo = '/images/projects/tejiendoxpunto'
const previazo = '/images/projects/previazo'

export const projects: readonly Project[] = [
  {
    slug: 'evolux',
    name: 'Evolux Platform',
    kind: { en: 'Work · Evolux', es: 'Trabajo · Evolux' },
    year: '2025 – 2026',
    featured: true,
    tags: [
      'Next.js',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'TimescaleDB',
      'Grafana',
    ],
    summary: {
      en: 'Internal platform for a company that builds industrial lighting for aquaculture. It replaced the paper records they used to track manufacturing and maintenance.',
      es: 'Plataforma interna de un fabricante de iluminación industrial para la acuicultura. Reemplazó los registros a mano con que se controlaban la fabricación y las mantenciones.',
    },
    highlights: {
      en: [
        'QR traceability: each unit shows its components, its stage and every project it went through.',
        'Maintenance reports as PDF, with photos stored in Google Drive and client reports in Google Sheets.',
        'Role-based sign-in with NextAuth, plus documentation for the system, its APIs and data flows.',
        'Helped build the backend that stores field telemetry in TimescaleDB, monitored in Grafana.',
      ],
      es: [
        'Trazabilidad con código QR: cada equipo muestra sus componentes, su etapa y los proyectos por los que pasó.',
        'Informes de mantención en PDF, con fotos en Google Drive y reportes al cliente en Google Sheets.',
        'Inicio de sesión con permisos por rol (NextAuth) y documentación del sistema, sus APIs y flujos de datos.',
        'Apoyé el backend que guarda la telemetría de los equipos en terreno en TimescaleDB, monitoreada en Grafana.',
      ],
    },
    gallery: [
      {
        src: `${evolux}/busqueda.webp`,
        alt: {
          en: 'Search engine with workshop status and per-project progress',
          es: 'Motor de búsqueda con el estado del taller y el avance de cada proyecto',
        },
      },
      {
        src: `${evolux}/desglose.webp`,
        alt: {
          en: 'Unit breakdown by stage: initial check, opening, final check and dispatch',
          es: 'Desglose de equipos por etapa: revisión inicial, apertura, revisión final y despacho',
        },
      },
      {
        src: `${evolux}/resumen.webp`,
        alt: {
          en: 'Project summary with the checklist of each serial number',
          es: 'Resumen del proyecto con la revisión de cada número de serie',
        },
      },
      {
        src: `${evolux}/mantenimiento.webp`,
        alt: {
          en: 'Maintenance home: new intake from Excel or CSV',
          es: 'Inicio de mantenimiento: nuevo ingreso desde Excel o CSV',
        },
      },
      {
        src: `${evolux}/componentes.webp`,
        alt: {
          en: 'Component management with category filter',
          es: 'Gestión de componentes con filtro por categoría',
        },
      },
      {
        src: `${evolux}/portal.webp`,
        alt: {
          en: 'Module picker: maintenance, production, Tempest and photoperiod projects',
          es: 'Selector de módulos: mantenimiento, producción, Tempest y proyectos de fotoperiodo',
        },
      },
      {
        src: '/images/evolux.webp',
        alt: {
          en: 'Evolux platform sign-in screen',
          es: 'Pantalla de inicio de sesión de la plataforma Evolux',
        },
      },
    ],
  },
  {
    slug: 'tejiendoxpunto',
    name: 'Tejiendo x Punto',
    kind: { en: 'Online store · Small business', es: 'Tienda online · Pyme' },
    year: '2026',
    featured: true,
    link: 'https://tejiendoxpunto.cl',
    linkLabel: 'tejiendoxpunto.cl',
    tags: [
      'Next.js',
      'TypeScript',
      'Supabase',
      'Mercado Pago',
      'Tailwind CSS',
      'Vitest',
    ],
    summary: {
      en: 'Online store for a small business that sells crochet amigurumis, keychains and scrunchies. Catalog, cart, Mercado Pago checkout and an admin panel where the owner uploads her products.',
      es: 'Tienda online de una pyme que vende amigurumis, llaveros y scrunchies tejidos a crochet. Tiene catálogo, carrito, pago con Mercado Pago y un panel donde la dueña sube sus productos.',
    },
    highlights: {
      en: [
        'Per-item stock: confirming an order holds the stock for 20 minutes, and the payment link expires after 15.',
        'Mercado Pago Checkout Pro. Without credentials, the order is closed over Instagram or WhatsApp instead.',
        'Admin panel for products, photos and videos, protected by Supabase Auth and row-level security.',
        'A "Learn" section with step-by-step patterns (free or paid) and video tutorials, managed from the panel.',
        'SEO: sitemap, a share image for every product and JSON-LD structured data.',
        'Built test-first with Vitest and Testing Library.',
      ],
      es: [
        'Stock por pieza: al confirmar el pedido se reserva por 20 minutos y el link de pago vence a los 15.',
        'Pago con Mercado Pago Checkout Pro. Sin credenciales, el pedido se cierra por Instagram o WhatsApp.',
        'Panel de administración para productos, fotos y videos, protegido con Supabase Auth y políticas RLS.',
        'Sección Aprende con guías paso a paso (gratis o de pago) y tutoriales en video, administrados desde el panel.',
        'SEO: sitemap, imagen para compartir cada producto y datos estructurados JSON-LD.',
        'Desarrollado con TDD, usando Vitest y Testing Library.',
      ],
    },
    gallery: [
      {
        src: `${tejiendo}/home.webp`,
        alt: {
          en: 'Tejiendo x Punto home page',
          es: 'Portada de Tejiendo x Punto',
        },
      },
      {
        src: `${tejiendo}/catalogo.webp`,
        alt: {
          en: 'Catalog with category filters and search',
          es: 'Catálogo con filtros por categoría y buscador',
        },
      },
      {
        src: `${tejiendo}/producto.webp`,
        alt: {
          en: 'Product page with price, material and colors',
          es: 'Ficha de producto con precio, material y colores',
        },
      },
      {
        src: `${tejiendo}/aprende.webp`,
        alt: {
          en: 'Learn section with step-by-step patterns',
          es: 'Sección Aprende con guías paso a paso',
        },
      },
      {
        src: `${tejiendo}/movil.webp`,
        alt: { en: 'Home page on a phone', es: 'Portada en el celular' },
      },
    ],
  },
  {
    slug: 'previazo',
    name: 'Previazo',
    kind: { en: 'Side project', es: 'Proyecto personal' },
    year: '2026',
    status: { en: 'In development', es: 'En desarrollo' },
    featured: true,
    tags: [
      'Next.js',
      'Node.js',
      'Socket.IO',
      'Zod',
      'TypeScript',
      'Tailwind CSS',
    ],
    summary: {
      en: 'Real-time party games. The group joins a room with a 4-letter code, each person from their own phone, and the host picks the game. From 2 to 12 players, nothing to install.',
      es: 'Juegos para la previa en tiempo real. El grupo entra a una sala con un código de 4 letras, cada uno desde su celular, y la anfitriona elige a qué jugar. De 2 a 12 personas, sin descargar nada.',
    },
    highlights: {
      en: [
        'Six games, including "Recuerda y dibuja": you see a character for a few seconds, draw it from memory and everyone votes.',
        'The Node + Socket.IO server owns the game state. It syncs turns, votes and timers, and never sends a player what they should not see.',
        'pnpm monorepo: the client–server contract (types, events and Zod schemas) lives in a shared package.',
        'Custom drawing canvas with brush, shapes, fill bucket and undo. Strokes are stored as data, not pixels.',
        'Games that last minutes are tested in milliseconds with a fake clock.',
      ],
      es: [
        'Seis juegos, entre ellos «Recuerda y dibuja»: ves un personaje unos segundos, lo dibujas de memoria y todos votan.',
        'El servidor (Node + Socket.IO) manda: sincroniza turnos, votos y tiempos, y nunca le envía a un jugador lo que no debe ver.',
        'Monorepo con pnpm: el contrato cliente–servidor (tipos, eventos y esquemas Zod) vive en un paquete compartido.',
        'Lienzo de dibujo propio con pincel, figuras, balde de relleno y deshacer. Los trazos se guardan como datos, no como píxeles.',
        'Las partidas de varios minutos se prueban en milisegundos con un reloj falso.',
      ],
    },
    gallery: [
      {
        src: `${previazo}/portada.webp`,
        alt: {
          en: 'Previazo landing page with the create-room form',
          es: 'Portada de Previazo con el formulario para crear sala',
        },
      },
      {
        src: `${previazo}/sala.webp`,
        alt: {
          en: 'Waiting room with QR code, room code and game picker',
          es: 'Sala de espera con QR, código de sala y selección de juego',
        },
      },
      {
        src: `${previazo}/celulares.webp`,
        alt: {
          en: 'Three phones: drawing from memory, voting and results',
          es: 'Tres celulares: dibujar de memoria, votar y resultados',
        },
      },
      {
        src: `${previazo}/resultados.webp`,
        alt: {
          en: 'Round results: the original character next to each drawing',
          es: 'Resultados de la ronda: el personaje original junto a cada dibujo',
        },
      },
    ],
  },
  {
    slug: 'turicuentro',
    name: 'Turicuentro',
    kind: { en: 'Freelance', es: 'Freelance' },
    featured: false,
    tags: ['React', 'Material UI', 'PostgreSQL', 'Express'],
    summary: {
      en: 'Tourism platform with calendar bookings, customer management and JWT auth. I built it end to end as a freelancer.',
      es: 'Plataforma turística con reservas por calendario, gestión de clientes y autenticación JWT. La construí completa como freelance.',
    },
    highlights: { en: [], es: [] },
    gallery: [
      {
        src: '/images/turicuentro-page.webp',
        alt: {
          en: 'Turicuentro booking calendar',
          es: 'Calendario de reservas de Turicuentro',
        },
      },
    ],
  },
  {
    slug: 'barrio-italia',
    name: 'Barrio Italia',
    kind: { en: 'Prototype', es: 'Prototipo' },
    featured: false,
    link: 'https://barrio-italia.netlify.app/',
    github: 'https://github.com/codiegos/IyE-barrio-Italia',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    summary: {
      en: 'Prototype site for Barrio Italia, a Santiago neighborhood, with local shops and events.',
      es: 'Sitio prototipo para el Barrio Italia de Santiago, con comercio local y eventos.',
    },
    highlights: { en: [], es: [] },
    gallery: [
      {
        src: '/images/barrio-italia-page.webp',
        alt: {
          en: 'Barrio Italia home page',
          es: 'Portada del sitio Barrio Italia',
        },
      },
    ],
  },
  {
    slug: 'django-cart',
    name: 'Django Shopping Cart',
    kind: { en: 'Study project', es: 'Proyecto de estudio' },
    featured: false,
    github: 'https://github.com/codiegos/carrito-django',
    tags: ['Django', 'Python', 'MySQL', 'Bootstrap'],
    summary: {
      en: 'Shopping cart in Django with a product catalog, session-based cart and admin panel.',
      es: 'Carrito de compras en Django con catálogo, carrito por sesión y panel de administración.',
    },
    highlights: { en: [], es: [] },
    gallery: [
      {
        src: '/images/django-shop-page.webp',
        alt: {
          en: 'Django store catalog',
          es: 'Catálogo de la tienda en Django',
        },
      },
    ],
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
