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
      bio1: "I'm Diego Sebastián Rivera, a Full Stack Developer focused on building industrial web platforms and SaaS products — from manufacturing dashboards to IoT telemetry pipelines.",
      bio2: 'I work mostly with TypeScript across the stack (Next.js, NestJS, Prisma) and design data architectures with PostgreSQL and TimescaleDB. I care about clean docs, agile delivery and turning operational complexity into something teams enjoy using.',
      cv: 'View CV',
      contact: 'Contact Me',
    },
    experience: {
      title: 'Experience',
      readMore: 'Read more',
      readLess: 'Read less',
      present: 'Present',
      items: [
        {
          title: 'Full Stack Developer',
          company: 'Evolux — Puerto Varas, Chile',
          date: 'Mar 2025 — Present',
          short:
            'Industrial lighting for aquaculture and photoperiod. I build and maintain the internal platform that centralizes manufacturing, maintenance and reporting.',
          more: [
            'Stack: Next.js, TypeScript, Prisma, PostgreSQL/TimescaleDB.',
            'Built the batch manufacturing module: editable tables, component management, Excel export and QR codes for serial-number traceability.',
            'Shipped the full maintenance-order flow with PDF reports and Google Drive / Sheets integration for client reporting.',
            'Built the equipment management module: barcode scanning, bulk serial uploads, stage control and traceability of movements between projects.',
            'Developed the APIs and ingestion backend for IoT telemetry, structuring data in TimescaleDB with a connection pool for high concurrency, feeding the Grafana visualization platform.',
            'Implemented NextAuth with role-based access, and standardized technical documentation for systems, APIs and data flows.',
            'Worked under Scrum with Jira for ticket and sprint management.',
          ],
        },
        {
          title: 'Mobile Frontend Developer',
          company: 'Infopets (CORFO Project) — Valdivia, Chile (remote)',
          date: 'Jun 2024 — Dec 2024',
          short:
            'Pet-health platform with medical records, bidirectional push notifications and a veterinary marketplace — delivered against state-funded milestones.',
          more: [
            'Built the iOS/Android frontend using React Native.',
            'Implemented the medical-records module and the bidirectional push notification system.',
            'Designed the veterinary marketplace UI and met all CORFO technical milestones for the funding.',
          ],
        },
        {
          title: 'Full Stack Developer',
          company: 'SmertGroup — Concepción, Chile (remote)',
          date: 'Aug 2022 — Dec 2024',
          short:
            'Proptech delivering structural building data to firefighters during emergencies via QR codes.',
          more: [
            'Built the admin panel and the auto-generation logic for post-emergency reports and analytical dashboards.',
            'Integrated an interactive 3D map viewer in the frontend to help rescue teams with spatial recognition.',
            'Worked with React, Redux Toolkit Query, TailwindCSS and contributed to the firefighter training module.',
          ],
        },
      ],
    },
    projects: {
      title: 'Projects',
      subtitle: 'A selection of personal and client work.',
      visit: 'Live site',
      code: 'Source code',
      private: 'Private repository',
    },
    contact: {
      title: 'Get in touch',
      subtitle:
        "Have an idea, a role or just want to say hi? Drop me a line — I usually reply within a day.",
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
    },
    footer: {
      designed: 'Designed & developed by Diego Rivera',
      stack:
        'Built with React & Next.js (App Router & Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email & Resend — hosted on Vercel.',
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
      bio1: 'Soy Diego Sebastián Rivera, Desarrollador Full Stack enfocado en construir plataformas web industriales y productos SaaS — desde paneles de fabricación hasta pipelines de telemetría IoT.',
      bio2: 'Trabajo principalmente con TypeScript en todo el stack (Next.js, NestJS, Prisma) y diseño arquitecturas de datos con PostgreSQL y TimescaleDB. Me importa la documentación clara, el desarrollo ágil y convertir la complejidad operativa en algo que los equipos disfruten usar.',
      cv: 'Ver CV',
      contact: 'Contáctame',
    },
    experience: {
      title: 'Experiencia',
      readMore: 'Leer más',
      readLess: 'Leer menos',
      present: 'Presente',
      items: [
        {
          title: 'Desarrollador Full Stack',
          company: 'Evolux — Puerto Varas, Chile',
          date: 'Mar 2025 — Presente',
          short:
            'Iluminación industrial para acuicultura y fotoperiodo. Desarrollo y mantengo la plataforma interna que centraliza fabricación, mantenciones y reportería.',
          more: [
            'Stack: Next.js, TypeScript, Prisma, PostgreSQL/TimescaleDB.',
            'Construí el módulo de fabricación por lotes: tablas editables, gestión de componentes, exportación a Excel y códigos QR para trazabilidad por número de serie.',
            'Implementé el flujo completo de órdenes de mantención con generación de informes en PDF e integración con Google Drive y Sheets para reportería al cliente.',
            'Desarrollé el módulo de gestión de equipos: escaneo y carga masiva de seriales, control de etapas y trazabilidad de movimientos entre proyectos.',
            'Desarrollé las APIs y el backend de ingesta de telemetría IoT, estructurando los datos en TimescaleDB con un pool de conexiones para alta concurrencia, que alimentan la plataforma de visualización (Grafana).',
            'Implementé autenticación con NextAuth y control de acceso por roles, y estandaricé la documentación técnica del sistema, APIs y flujos de datos.',
            'Participé en el flujo de desarrollo usando Jira y siguiendo metodología Scrum (tickets y sprints).',
          ],
        },
        {
          title: 'Desarrollador Frontend Mobile',
          company: 'Infopets (Proyecto CORFO) — Valdivia, Chile (remoto)',
          date: 'Jun 2024 — Dic 2024',
          short:
            'Plataforma de salud para mascotas con historiales médicos, notificaciones push bidireccionales y marketplace veterinario — entregada cumpliendo hitos de financiamiento estatal.',
          more: [
            'Desarrollé el frontend móvil (iOS/Android) utilizando React Native.',
            'Implementé el módulo de historiales médicos y el sistema de notificaciones push bidireccionales.',
            'Diseñé la interfaz del marketplace veterinario y cumplí los hitos técnicos exigidos por CORFO.',
          ],
        },
        {
          title: 'Desarrollador Full Stack',
          company: 'SmertGroup — Concepción, Chile (remoto)',
          date: 'Ago 2022 — Dic 2024',
          short:
            'Proptech que entrega información estructural a bomberos en emergencias mediante códigos QR.',
          more: [
            'Desarrollé el panel administrativo y la lógica de generación automática de informes post-emergencia y dashboards analíticos.',
            'Integré un motor de visualización interactiva de mapas 3D en el frontend para apoyar el reconocimiento espacial de los equipos de rescate.',
            'Trabajé con React, Redux Toolkit Query, TailwindCSS y participé en el módulo de capacitación para bomberos.',
          ],
        },
      ],
    },
    projects: {
      title: 'Proyectos',
      subtitle: 'Una selección de trabajo personal y de cliente.',
      visit: 'Sitio en vivo',
      code: 'Código fuente',
      private: 'Repositorio privado',
    },
    contact: {
      title: 'Hablemos',
      subtitle:
        '¿Tienes una idea, un puesto o solo quieres saludar? Escríbeme — normalmente respondo en menos de un día.',
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
    },
    footer: {
      designed: 'Diseñado y desarrollado por Diego Rivera',
      stack:
        'Hecho con React y Next.js (App Router y Server Actions), TypeScript, Tailwind CSS, Framer Motion, React Email y Resend — desplegado en Vercel.',
    },
  },
}

export type Translations = (typeof translations)['en']
