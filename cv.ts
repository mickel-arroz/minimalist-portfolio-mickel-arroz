import type { CV } from './src/cv';
import { CertificateType, ProjectType } from './src/enums/cvTypes';

export const cv = {
  basics: {
    name: 'Mickel Arroz',
    label: 'Profesional del Desarrollo de Software',
    subLabel: 'No hay nada imposible para quien lo intenta',
    subLabelAuthor: 'Alejandro Magno',
    image: '/images/profile-2025.jpg',
    email: 'arrozmickel@gmail.com',
    phone: '584242382439',
    url: null,
    summary:
      '¡Un placer conocerte! Soy Mickel, un amante de la programación, la tecnología y del crecimiento personal. Estudiante de Ing. Informática, con experiencia laboral en creación de software y aplicaciones web, análisis de problemas y gestión de proyectos. Siguiendo la filosofía de nunca rendirme y afrontar los desafíos de forma estoica, impulsándome a crecer y mejorar mis habilidades. Busco crear soluciones que generen impacto y conectar con profesionales.',
    location: {
      city: 'Caracas',
      region: 'Venezuela',
    },
    profiles: [
      {
        network: 'GitHub',
        username: 'mickel-arroz',
        url: 'https://github.com/mickel-arroz',
      },
      {
        network: 'LinkedIn',
        username: 'mickel_arroz',
        url: 'https://linkedin.com/in/mickel-arroz',
      },
      {
        network: 'FreeCodeCamp',
        username: 'mickel_arroz',
        url: 'https://www.freecodecamp.org/espanol/mickel_arroz',
      },
    ],
  },
  work: [
    {
      name: 'Avila Tek',
      position: 'Frontend Engineer Junior',
      url: 'https://www.avilatek.com/',
      startDate: '06-16-2025',
      endDate: null,
      summary:
        'Desarrollando enfocado en crear soluciones personalizadas siguiendo patrones de diseño, buenas prácticas de accesibilidad y UX. Trabajando con clientes internacionales, donde destaca mi participación en la obtención del Premio de Oro en la categoría "Experiencia del Cliente" en los premios Fintech Americas 2026 junto a Mercantil Seguros. Además, de ser parte del desarrollo de las Landing Pages para Venezuela y Panamá, así como de la creación de diversas aplicaciones "backoffice" para la gestión de sus múltiples procesos internos.',
      highlights: ['Next.js', 'TypeScript', 'Tailwind', 'Patrones de Diseño'],
    },
    {
      name: 'PwC Venezuela',
      position: 'Software Development - Associate',
      url: 'https://www.pwc.com/ve/es.html',
      startDate: '08-12-2024',
      endDate: '06-13-2025',
      summary:
        'Me especialicé en el desarrollo, mantenimiento y optimización de aplicaciones web, tanto para uso interno de la empresa como para clientes, asegurando soluciones específicas para cumplir con las necesidades. Además, colaboré en auditorías de procesos tecnológicos en el área de RAS (Risk Assurance Services) para clientes principalmente enfocados en el area bancaria y financiera.',
      highlights: [
        'Angular',
        'Express.js',
        'Bootstrap',
        'Alteryx Designer',
        'Assurance',
      ],
    },
  ],
  volunteer: [
    {
      organization: 'Federación Internacional de Fe y Alegría',
      position: 'Docente',
      url: 'https://www.feyalegria.org/venezuela/',
      startDate: '11-10-2023',
      endDate: '07-01-2024',
      summary:
        'Como parte de mi compromiso con el desarrollo de la comunidad, desempeñé el rol de Docente, impartiendo clases a estudiantes de Educación Secundaria. Con enfoque en enseñar sobre programación web básica, lógica de programación y conceptos básicos de tecnología.',
      highlights: ['HTML', 'CSS', 'JavaScript', 'Lógica de Programación'],
    },
  ],
  education: [
    {
      institution: 'Universidad de Helsinki (Finlandia)',
      url: 'https://fullstackopen.com/en/',
      area: 'FullStackOpen (Certificación Universitaria)',
      studyType: 'Diplomado',
      startDate: null,
      endDate: '09-30-2025',
      courses: [
        {
          name: 'Certificado de FullStackOpen',
          url: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/525ba9e396dc76e8602e0022f34eb6e1',
        },
      ],
    },
    {
      institution: 'Universidad Católica Andrés Bello',
      url: 'https://www.ucab.edu.ve/',
      area: 'Ingeniería en Informática',
      studyType: 'Universidad',
      startDate: null,
      endDate: null,
      courses: [],
    },
  ],
  awards: [],
  certificates: [
    {
      name: 'Curso de Productividad',
      type: CertificateType.Secondary,
      date: '03-16-2025',
      issuer: 'Platzi',
      issuerUrl: 'https://platzi.com/ ',
      url: 'https://platzi.com/p/mickel_arroz/curso/1998-productividad/diploma/detalle/ ',
      summary:
        'Dominé técnicas para gestionar tiempo, espacio y contexto, diseñando un proyecto de vida basado en hábitos positivos. Estructuré prioridades, metas claras y rutinas que impulsan mi crecimiento personal.',
      highlights: ['Gestión del Tiempo', 'Desarrollo Personal'],
    },
    {
      name: 'Curso de Finanzas Personales',
      type: CertificateType.Secondary,
      date: '03-16-2025',
      issuer: 'Platzi',
      issuerUrl: 'https://platzi.com/ ',
      url: 'https://platzi.com/p/mickel_arroz/curso/2639-presupuesto-personal/diploma/detalle/ ',
      summary:
        'Adquirí herramientas para crear presupuestos efectivos y gestionar mis finanzas. Aprendí a fijar metas realistas e implementar estrategias para una estabilidad económica sólida y alcanzar objetivos personales.',
      highlights: ['Gestión de Inversiones', 'Economía Personal'],
    },
    {
      name: 'Fundamentos de la Gestión de Proyectos',
      type: CertificateType.Secondary,
      date: '02-24-2025',
      issuer: 'LinkedIn',
      issuerUrl: 'https://www.linkedin.com/learning/ ',
      url: 'https://www.linkedin.com/learning/certificates/795c7a7cd7edeb05c380ff8f37a51db8b3059ca9377bb76acca8b7b0e421c84c ',
      summary:
        'Desarrollé habilidades en metodologías clave de gestión de proyectos, incluyendo planificación estratégica, diagramas de Gantt y liderazgo de equipos multidisciplinarios para entregar proyectos dentro de plazos y presupuestos.',
      highlights: [
        'Gestión de Proyectos',
        'Planificación Estratégica',
        'Liderazgo de Equipos',
      ],
    },
    {
      name: 'Front-End Development Libraries',
      type: CertificateType.Primary,
      date: '02-09-2025',
      issuer: 'FreeCodeCamp',
      issuerUrl: 'https://www.freecodecamp.org/ ',
      url: 'https://www.freecodecamp.org/certification/mickel_arroz/front-end-development-libraries ',
      summary:
        'Formación intensiva de +300h con 5 proyectos prácticos. Dominé React/Redux, SASS avanzado y Bootstrap para interfaces cross-device, demostrando habilidad para resolver problemas complejos en entornos reales mediante soluciones optimizadas.',
      highlights: ['React', 'Redux', 'Bootstrap', 'jQuery', 'Sass'],
    },
    {
      name: 'Cómo y Por Qué Desarrollar una Mentalidad de Aprendizaje Continuo',
      type: CertificateType.Secondary,
      date: '01-08-2025',
      issuer: 'LinkedIn',
      issuerUrl: 'https://www.linkedin.com/learning/ ',
      url: 'https://www.linkedin.com/learning/certificates/0502958d780f51ec045a3916c148ecff7233cffbf32cb30b883a0752aacc618b ',
      summary:
        'Transformé mi enfoque de aprendizaje al adoptar métodos participativos y reflexivos. Cultivé hábitos sostenibles mediante práctica activa y técnicas para retener conocimientos, alejándome de evaluaciones tradicionales.',
      highlights: ['Aprendizaje Permanente'],
    },
    {
      name: 'Cómo Establecer y Cumplir tus Objetivos Profesionales',
      type: CertificateType.Secondary,
      date: '12-29-2024',
      issuer: 'LinkedIn',
      issuerUrl: 'https://www.linkedin.com/learning/ ',
      url: 'https://www.linkedin.com/learning/certificates/523f5e56ef17f912b9893ca5ed1a5cf56775e3e4ed1c63c941dc6022ee79e3ac ',
      summary:
        'Aprendí estrategias prácticas para definir y alcanzar objetivos profesionales ambiciosos, usando técnicas como rendición de cuentas y seguimiento público, transformando metas en hábitos sostenibles para el éxito.',
      highlights: ['Gestión de Carrera Profesional'],
    },
    {
      name: 'Trucos para Cambiar o Crear Nuevos Hábitos',
      type: CertificateType.Secondary,
      date: '12-23-2024',
      issuer: 'LinkedIn',
      issuerUrl: 'https://www.linkedin.com/learning/ ',
      url: 'https://www.linkedin.com/learning/certificates/2c9795cce9885ca3d92aa71f09597e1cd798fcdee5c1b5c9b243ab7134f97644 ',
      summary:
        'Adquirí herramientas para diseñar rutinas efectivas y eliminar hábitos negativos. Comprendí cómo el subconsciente influye en mis hábitos y aprendí a aprovecharlo para lograr cambios sostenibles.',
      highlights: ['Desarrollo Personal'],
    },
    {
      name: 'JavaScript Algorithms and Data Structures',
      type: CertificateType.Primary,
      date: '07-17-2024',
      issuer: 'FreeCodeCamp',
      issuerUrl: 'https://www.freecodecamp.org/ ',
      url: 'https://www.freecodecamp.org/certification/mickel_arroz/javascript-algorithms-and-data-structures-v8 ',
      summary:
        'Certificado de +300h que demuestra dominio en JavaScript, incluyendo Programación Orientada a Objetos, Funcional, almacenamiento local e integración con APIs, además de resolver algoritmos complejos y estructuras de datos eficientes.',
      highlights: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Master CSS: Responsive, SASS, Flexbox, Grid y Bootstrap',
      type: CertificateType.Primary,
      date: '06-23-2024',
      issuer: 'Udemy',
      issuerUrl: 'https://www.udemy.com/ ',
      url: 'https://www.udemy.com/certificate/UC-17ede252-7945-4310-b2f3-dcd47d9b7a63 ',
      summary:
        'Dominé técnicas para diseñar sitios web modernos y adaptables usando CSS, SASS, Flexbox, Grid y Bootstrap, aplicando buenas prácticas para una experiencia de usuario excepcional con diseños altamente interactivos.',
      highlights: ['HTML', 'CSS', 'Sass', 'Bootstrap'],
    },
    {
      name: 'Responsive Web Design',
      type: CertificateType.Primary,
      date: '04-27-2024',
      issuer: 'FreeCodeCamp',
      issuerUrl: 'https://www.freecodecamp.org/ ',
      url: 'https://www.freecodecamp.org/espanol/certification/mickel_arroz/responsive-web-design ',
      summary:
        'Certificado de +300h que acredita mis habilidades en diseño web moderno, accesible y adaptable, dominando técnicas actuales y mejores prácticas de rendimiento junto con estándares de accesibilidad web (WCAG).',
      highlights: ['HTML', 'CSS'],
    },
    {
      name: 'Adobe XD: Crear Prototipos Profesionales desde 0',
      type: CertificateType.Primary,
      date: '12-27-2019',
      issuer: 'Udemy',
      issuerUrl: 'https://www.udemy.com/ ',
      url: 'https://www.udemy.com/certificate/UC-TCVS7XGW/ ',
      summary:
        'Acreditado en diseño UX/UI con Adobe XD, capaz de crear prototipos dinámicos y profesionales para interfaces de sitios web, apps móviles y software, integrando flujos de usuario intuitivos y colaboración en equipo.',
      highlights: ['Adobe XD', 'Prototipos de interfaces de usuario'],
    },
  ],
  publications: [],
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'Sass',
    'Bootstrap',
    'Tailwind',
    'Node.js',
    'React',
    'Next.js',
    'Angular',
    'Astro',
    'SQL',
    'MySQL',
    'PostgreSQL',
    'Python',
    'Git',
    'Alteryx Designer',
  ],
  languages: [
    { language: 'Español', fluency: 'Nivel C2 (Nativo)' },
    { language: 'Inglés', fluency: 'Nivel A2' },
    { language: 'Portugués', fluency: 'Nivel B1+' },
  ],
  interests: [],
  references: [],
  projects: [
    {
      name: 'Ecommers BackEnd',
      type: ProjectType.Practice,
      github: 'https://github.com/mickel-arroz/avila-back-mickel_arroz ',
      description:
        '(PRUEBA TÉCNICA) API REST escalable para una plataforma de comercio electrónico ficticia. Incluye autenticación JWT, gestión de productos, procesamiento de pedidos, documentación con Swagger UI y pruebas unitarias con Jest.',
      highlights: ['Express.js', 'TypeScript', 'MongoDB', 'Jest'],
      url: null,
    },
    {
      name: 'Globetrotter',
      type: ProjectType.Practice,
      github: 'https://github.com/mickel-arroz/avila-front-mickel_arroz ',
      description:
        '(PRUEBA TÉCNICA) Aplicación FrontEnd de reservas de viajes conectada a una API REST. Ofrece un formulario multistep con validaciones, cálculo dinámico de precios, soporte para múltiples viajeros y animaciones sutiles.',
      highlights: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      url: 'https://avila-front-mickel-arroz.vercel.app/ ',
    },
    {
      name: 'Arcade Arkanoid',
      type: ProjectType.Primary,
      github: 'https://github.com/mickel-arroz/arkanoid-mickel_arroz',
      description:
        "(Desktop) Proyecto web del clásico juego retro Arkanoid. Cuenta con un diseño retro inspirado en las máquinas Arcade, con una experiencia de juego que evoca la nostalgia de los años 90's.",
      highlights: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
      url: 'https://mickel-arroz.github.io/arkanoid-mickel_arroz',
    },
    {
      name: 'SpaceX Launches',
      type: ProjectType.Primary,
      github: 'https://github.com/mickel-arroz/SpaceXPageAPI',
      description:
        'Proyecto web de páginas estáticas y responsivas, el cual consume una API que posee información de SpaceX, para mostrar detalles de lanzamientos de sus cohetes y todos los datos relacionados con ellos.',
      highlights: ['HTML', 'Tailwind', 'JavaScript', 'Astro'],
      url: 'https://space-x-mickel-arroz.vercel.app/',
    },
    {
      name: 'Shrek Flowers',
      type: ProjectType.Practice,
      github: 'https://github.com/mickel-arroz/yellow-flowers',
      description:
        'Proyecto simple de una página web estática bella, creada como detalle de la costumbre de regalar flores amarillas el 21 de Septiembre en Venezuela, acompañado de la frase célebre de la película Shrek.',
      highlights: ['HTML', 'CSS', 'JavaScript', 'GitHub Pages'],
      url: 'https://mickel-arroz.github.io/yellow-flowers',
    },
    {
      name: 'Portfolio Web',
      type: ProjectType.Primary,
      github:
        'https://github.com/mickel-arroz/minimalist-portfolio-mickel-arroz',
      description:
        'Proyecto web de un portafolio minimalista y responsivo, el cual mediante un archivo JSON se puede personalizar completamente los datos dinámicamente a mostrar del usuario y todos los apartados del portafolio.',
      highlights: ['HTML', 'CSS', 'JavaScript', 'Astro'],
      url: '/',
    },
    {
      name: 'AttackerVictim',
      type: ProjectType.Practice,
      github:
        'https://github.com/mickel-arroz/DSW_GrupoG_AttackerVictim-DEPLOY-WEB/tree/develop',
      description:
        'Proyecto universitario de un sistema de control de alejamiento y protección entre usuarios de tipo víctima y agresor. Mi contribución se enfocó en el diseño e implementación del módulo web del administrador, así como en la integración con la API correspondiente.',
      highlights: ['HTML', 'CSS', 'Tailwind', 'Next.js', 'Patrones de Diseño'],
      url: null,
    },
  ],
  openGraph: {
    titleOG: 'Portfolio - Mickel Arroz',
    description:
      '¡Un Placer! Soy Mickel Arroz, un amante de la tecnología, estudiante de Ing Informática. Este es mi portafolio profesional. Espero lo disfrutes. ¡Contáctame sin pena!',
    url: 'https://portfolio-mickel-arroz.vercel.app/',
    previewImage: '/images/pagePreview.png',
  },
} satisfies CV; // Validación exhaustiva y autocompletado

// Re-export nombrado para mantener compatibilidad con import { basics } from "@cv".
export const {
  basics,
  work,
  volunteer,
  education,
  awards,
  certificates,
  publications,
  skills,
  languages,
  interests,
  references,
  projects,
  openGraph,
} = cv;

export default cv;
