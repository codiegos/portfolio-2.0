export type Locale = 'en' | 'es'

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
    },
    intro: {
      hello: 'HELLO,',
      im: "I'M",
      role: 'FULL STACK DEVELOPER',
    },
    about: {
      title: 'About Me',
      bio1: "I'm Diego Sebastián Rivera, a software engineer with 3 years of experience, mostly in web applications. I digitize operational processes and build management systems, dashboards and e-commerce, from the data model to the interface.",
      bio2: "I've also shipped mobile apps for iOS and Android with React Native. Most of my work is in TypeScript: Next.js and NestJS for the code, PostgreSQL and Prisma for the data.",
      photoAlt:
        'Diego Sebastián Rivera on a mountain top, with the sky and hills behind him',
      cv: 'View CV',
      contact: 'Contact Me',
    },
    experience: {
      title: 'Experience',
      readMore: 'Read more',
      readLess: 'Read less',
      items: [
        {
          title: 'Full Stack Developer',
          company: 'Evolux',
          place: 'Puerto Varas · Hybrid',
          date: 'Mar 2025 – Oct 2026',
          short:
            'Industrial lighting for aquaculture. I moved the manufacturing and maintenance records, which were kept by hand, into a web platform built with Next.js, TypeScript, Prisma and PostgreSQL.',
          more: [
            'Built QR traceability for every unit: its components, its stage and the projects it goes through.',
            'Automated maintenance reports as PDF, with photos in Google Drive and client reports through Google Sheets.',
            'Implemented role-based sign-in with NextAuth and documented the system, its APIs and data flows.',
            'Helped build the backend that stores field telemetry in TimescaleDB, monitored in Grafana.',
          ],
        },
        {
          title: 'Mobile Frontend Developer',
          company: 'Infopets · CORFO project',
          place: 'Valdivia · Remote',
          date: 'Jun 2024 – Dec 2024',
          short: 'Mobile app for pet care, funded by CORFO.',
          more: [
            'Built the pet medical history and push notifications in React Native (iOS and Android).',
            'Built the vet marketplace and delivered my modules within the milestones CORFO required.',
          ],
        },
        {
          title: 'Full Stack Developer (Internship)',
          company: 'Smertec',
          place: 'Concepción · Remote',
          date: 'Dec 2023 – Apr 2024',
          short: 'Building information for firefighters during emergencies.',
          more: [
            'Built the admin panel and a dashboard with emergency and building charts, using Next.js and NestJS.',
            'Automated the report generated after each emergency.',
            'Helped integrate a 3D building viewer so rescue teams can find their way inside.',
          ],
        },
        {
          title: 'Software Development Intern',
          company: 'Smertec',
          place: 'Concepción · Remote',
          date: 'Aug 2022 – Nov 2022',
          short:
            'Built the course module used to train firefighters, with React, Redux Toolkit and Tailwind CSS.',
          more: [],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle:
        'Three recent ones in detail, and a few older ones below. Open any of them to see screenshots and what I built.',
      more: 'Other projects',
      details: 'View details',
      visit: 'Live site',
      code: 'Source code',
      private: 'Private repository',
      screenshots: 'screenshots',
      highlights: 'What I built',
      stack: 'Stack',
      close: 'Close',
      prev: 'Previous image',
      next: 'Next image',
      goTo: 'Go to image',
    },
    contact: {
      title: 'Get in touch',
      subtitle:
        'Have a role, a project or a question? Write to me here or through any of these channels.',
      name: 'Your name',
      email: 'Email address',
      message: 'Message',
      placeholderName: 'Johan Liebert',
      placeholderEmail: 'johan.liebert@example.com',
      placeholderMessage: "Tell me what you're thinking about...",
      send: 'Send',
      sending: 'Sending',
      sent: 'Message sent!',
      error: 'Something went wrong!',
      copied: 'copied to clipboard!',
      copy: 'Copy',
      open: 'Open',
    },
    footer: {
      designed: 'Designed & developed by Diego Rivera',
      stack:
        'Built with Next.js, TypeScript, Tailwind CSS, Motion and Resend. Hosted on Vercel.',
    },
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
    },
    intro: {
      hello: 'HOLA,',
      im: 'SOY',
      role: 'DESARROLLADOR FULL STACK',
    },
    about: {
      title: 'Sobre Mí',
      bio1: 'Soy Diego Sebastián Rivera, ingeniero de software con 3 años de experiencia, sobre todo en aplicaciones web. Digitalizo procesos operativos y desarrollo sistemas de gestión, dashboards y comercio electrónico, del modelo de datos a la interfaz.',
      bio2: 'También he hecho apps móviles para iOS y Android con React Native. Trabajo casi todo en TypeScript: Next.js y NestJS para el código, PostgreSQL y Prisma para los datos.',
      photoAlt:
        'Diego Sebastián Rivera en la cima de un cerro, con el cielo y los cerros de fondo',
      cv: 'Ver CV',
      contact: 'Contáctame',
    },
    experience: {
      title: 'Experiencia',
      readMore: 'Leer más',
      readLess: 'Leer menos',
      items: [
        {
          title: 'Desarrollador Full Stack',
          company: 'Evolux',
          place: 'Puerto Varas · Híbrido',
          date: 'Mar 2025 – Oct 2026',
          short:
            'Iluminación industrial para la acuicultura. Pasé a una plataforma web el control de fabricación y mantenciones, que antes se llevaba a mano, con Next.js, TypeScript, Prisma y PostgreSQL.',
          more: [
            'Implementé la trazabilidad de cada equipo con código QR: componentes, etapa y proyectos por los que pasa.',
            'Automaticé los informes de mantención en PDF, con fotos en Google Drive y reportes al cliente vía Google Sheets.',
            'Programé el inicio de sesión con permisos por rol (NextAuth) y documenté el sistema, sus APIs y flujos de datos.',
            'Apoyé el backend que guarda la telemetría de los equipos en terreno en TimescaleDB para monitorearla en Grafana.',
          ],
        },
        {
          title: 'Desarrollador Frontend Mobile',
          company: 'Infopets · Proyecto CORFO',
          place: 'Valdivia · Remoto',
          date: 'Jun 2024 – Dic 2024',
          short: 'App móvil para el cuidado de mascotas, financiada por CORFO.',
          more: [
            'Desarrollé con React Native el historial médico de las mascotas y las notificaciones push (iOS y Android).',
            'Construí el marketplace de veterinarias y entregué mis módulos dentro de los hitos exigidos por CORFO.',
          ],
        },
        {
          title: 'Desarrollador Full Stack (Práctica Profesional)',
          company: 'Smertec',
          place: 'Concepción · Remoto',
          date: 'Dic 2023 – Abr 2024',
          short: 'Información de edificios para bomberos en emergencias.',
          more: [
            'Desarrollé el panel de administración y un dashboard con gráficos de emergencias y edificios, con Next.js y NestJS.',
            'Automaticé la generación del informe posterior a cada emergencia.',
            'Apoyé la integración de un visor 3D de los edificios para que los equipos de rescate se orienten dentro de ellos.',
          ],
        },
        {
          title: 'Practicante de Desarrollo de Software',
          company: 'Smertec',
          place: 'Concepción · Remoto',
          date: 'Ago 2022 – Nov 2022',
          short:
            'Creé con React, Redux Toolkit y Tailwind CSS el módulo de cursos con el que se capacita a bomberos.',
          more: [],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      subtitle:
        'Tres recientes en detalle y algunos anteriores más abajo. Abre cualquiera para ver capturas y lo que construí.',
      more: 'Otros proyectos',
      details: 'Ver detalle',
      visit: 'Sitio en vivo',
      code: 'Código fuente',
      private: 'Repositorio privado',
      screenshots: 'capturas',
      highlights: 'Lo que construí',
      stack: 'Stack',
      close: 'Cerrar',
      prev: 'Imagen anterior',
      next: 'Imagen siguiente',
      goTo: 'Ir a la imagen',
    },
    contact: {
      title: 'Hablemos',
      subtitle:
        '¿Tienes un puesto, un proyecto o una pregunta? Escríbeme aquí o por cualquiera de estos canales.',
      name: 'Tu nombre',
      email: 'Correo electrónico',
      message: 'Mensaje',
      placeholderName: 'Johan Liebert',
      placeholderEmail: 'johan.liebert@example.com',
      placeholderMessage: 'Cuéntame en qué estás pensando...',
      send: 'Enviar',
      sending: 'Enviando',
      sent: '¡Mensaje enviado!',
      error: '¡Algo salió mal!',
      copied: '¡copiado al portapapeles!',
      copy: 'Copiar',
      open: 'Abrir',
    },
    footer: {
      designed: 'Diseñado y desarrollado por Diego Rivera',
      stack:
        'Hecho con Next.js, TypeScript, Tailwind CSS, Motion y Resend. Desplegado en Vercel.',
    },
  },
}

export type Translations = (typeof translations)['en']
