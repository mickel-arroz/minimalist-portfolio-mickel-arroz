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
      details: `
<p>Trabajo como <strong>Frontend Engineer Junior</strong> en <a href="https://www.avilatek.com/" target="_blank" rel="noopener noreferrer">Avila Tek</a>, armando soluciones web para clientes internacionales. Me enfoco bastante en la accesibilidad, la experiencia de usuario y en seguir buenos patrones de diseño.</p>
<h4>En qué ando</h4>
<ul>
  <li>Desarrollo de las <strong>Landing Pages</strong> de Venezuela y Panamá.</li>
  <li>Aplicaciones <em>backoffice</em> para manejar procesos internos.</li>
  <li>Día a día con <strong>Next.js</strong>, <strong>TypeScript</strong> y <strong>Tailwind</strong>.</li>
</ul>
<p>Un momento que recuerdo con cariño: fui parte del proyecto que ganó el <strong>Premio de Oro</strong> en "Experiencia del Cliente" en los Fintech Americas 2026, junto a Mercantil Seguros.</p>
`,
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
      details: `
<p>Estuve como <strong>Software Development Associate</strong> en <a href="https://www.pwc.com/ve/es.html" target="_blank" rel="noopener noreferrer">PwC Venezuela</a>, desarrollando y manteniendo aplicaciones web, tanto internas como para clientes.</p>
<h4>Lo que hacía</h4>
<ul>
  <li>Construir soluciones según lo que cada cliente necesitaba.</li>
  <li>Mantener y mejorar aplicaciones que ya estaban en marcha.</li>
  <li>Apoyar en <strong>auditorías tecnológicas</strong> del área de RAS (Risk Assurance Services).</li>
  <li>Automatizar y analizar datos con <strong>Alteryx Designer</strong>.</li>
</ul>
<p>Trabajé sobre todo con clientes del sector <u>bancario y financiero</u>, donde aprendí a cuidar mucho el detalle y la seguridad.</p>
`,
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
      name: 'Inmersión Profunda en el Desarrollo Web Moderno',
      type: CertificateType.Primary,
      date: '01-12-2026',
      issuer: 'FullStackOpen',
      issuerUrl: 'https://fullstackopen.com/en/',
      url: 'https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/525ba9e396dc76e8602e0022f34eb6e1',
      summary:
        'Programa académico oficial de la Universidad de Helsinki, centrado en el desarrollo web Full Stack moderno con especialización en React, Node.js, metodologías de testing y despliegue de aplicaciones.',
      details: `
<p>El curso oficial de la <strong>Universidad de Helsinki</strong>: <strong>7 módulos</strong> que recorren el desarrollo Full Stack moderno, con proyectos en cada etapa.</p>
<h4>Lo que vi</h4>
<ul>
  <li>Fundamentos web e introducción a <strong>React</strong>: componentes, estado y props.</li>
  <li>Comunicación con servidores y manejo de estado con Redux y React Query.</li>
  <li>APIs REST con <strong>Node.js</strong> y Express, con testing y autenticación.</li>
  <li>Testing en React, custom hooks y herramientas de build.</li>
  <li><strong>GraphQL</strong>, <strong>TypeScript</strong> y <strong>React Native</strong>.</li>
  <li><strong>CI/CD</strong>, Docker y bases de datos relacionales.</li>
</ul>
<p>Me sirvió un montón para entender cómo se arma un producto completo, del front al back.</p>
`,
      highlights: ['React', 'Redux', 'Node.js', 'MongoDB', 'Testing', 'CI/CD'],
    },
    {
      name: 'Curso de Productividad',
      type: CertificateType.Secondary,
      date: '03-16-2025',
      issuer: 'Platzi',
      issuerUrl: 'https://platzi.com/ ',
      url: 'https://platzi.com/p/mickel_arroz/curso/1998-productividad/diploma/detalle/ ',
      summary:
        'Dominé técnicas para gestionar tiempo, espacio y contexto, diseñando un proyecto de vida basado en hábitos positivos. Estructuré prioridades, metas claras y rutinas que impulsan mi crecimiento personal.',
      details: `
<p>Un curso práctico sobre cómo <strong>organizar mejor el tiempo</strong> y la energía en el día a día.</p>
<h4>Lo que me llevé</h4>
<ul>
  <li>Armar rutinas apoyadas en <strong>hábitos que suman</strong>.</li>
  <li>Priorizar y ponerme metas más claras.</li>
  <li>Sistemas simples para mantener el foco.</li>
</ul>
`,
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
      details: `
<p>Un curso para manejar mejor las <strong>finanzas personales</strong> y decidir con más calma.</p>
<h4>Lo que me llevé</h4>
<ul>
  <li>Armar <strong>presupuestos</strong> realistas.</li>
  <li>Ponerme metas de dinero alcanzables.</li>
  <li>Ideas para tener más estabilidad económica.</li>
</ul>
`,
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
      details: `
<p>Los fundamentos para <strong>planificar y llevar proyectos</strong> sin perder el control.</p>
<h4>Lo que aprendí</h4>
<ul>
  <li>Planificar y hacer seguimiento con <strong>diagramas de Gantt</strong>.</li>
  <li>Coordinar equipos con perfiles distintos.</li>
  <li>Manejar alcance, tiempos y presupuesto.</li>
</ul>
<p>Me ayuda a ver el proyecto completo, no solo la parte de código.</p>
`,
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
      details: `
<p>Un programa intensivo de <strong>+300 horas</strong> de FreeCodeCamp sobre las librerías más usadas del frontend.</p>
<h4>Lo que vi</h4>
<ul>
  <li><strong>React</strong>: componentes, JSX, estado y ciclo de vida.</li>
  <li><strong>Redux</strong> para manejar el estado de forma ordenada.</li>
  <li><strong>SASS</strong>, <strong>Bootstrap</strong> y jQuery para la UI.</li>
</ul>
<h4>Lo que me llevé para el trabajo</h4>
<ul>
  <li>Armar <strong>componentes reutilizables</strong> pensando en escalar.</li>
  <li>Entender bien el flujo de datos en una app React.</li>
  <li>Escribir estilos fáciles de mantener.</li>
</ul>
`,
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
      details: `
<p>Un curso sobre cómo <strong>aprender de forma continua</strong>, que en tecnología es clave.</p>
<h4>Lo que me llevé</h4>
<ul>
  <li>Aprender practicando, no solo memorizando.</li>
  <li>Trucos para retener lo que estudio.</li>
  <li>Mantener el hábito de seguir aprendiendo.</li>
</ul>
<p>Por eso me adapto rápido a herramientas nuevas.</p>
`,
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
      details: `
<p>Estrategias para <strong>ponerme metas profesionales</strong> y de verdad cumplirlas.</p>
<h4>Lo que me llevé</h4>
<ul>
  <li>Hacer seguimiento real al progreso.</li>
  <li>Convertir metas grandes en <strong>hábitos del día a día</strong>.</li>
  <li>Mantener el foco en el tiempo.</li>
</ul>
`,
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
      details: `
<p>Un curso sobre cómo <strong>crear buenos hábitos</strong> y soltar los que estorban.</p>
<h4>Ideas que me quedaron</h4>
<ul>
  <li>Cómo el <strong>subconsciente</strong> influye en lo que hacemos.</li>
  <li>Cómo usar eso a favor para cambiar.</li>
  <li>Cambios que de verdad se sostienen.</li>
</ul>
`,
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
      details: `
<p>Certificado de <strong>+300 horas</strong> de FreeCodeCamp sobre las bases del lenguaje y resolver problemas.</p>
<h4>Lo que vi</h4>
<ul>
  <li>JavaScript básico, <strong>ES6</strong>, expresiones regulares y debugging.</li>
  <li>Estructuras de datos y <strong>algoritmos</strong>, de básicos a intermedios.</li>
  <li>Programación <strong>orientada a objetos</strong> y funcional.</li>
</ul>
<h4>Lo que me llevé para el trabajo</h4>
<ul>
  <li>Resolver problemas pensando en la eficiencia.</li>
  <li>Escribir código más claro con OOP y estilo funcional.</li>
  <li>Elegir la estructura de datos correcta según el caso.</li>
</ul>
`,
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
      details: `
<p>Un curso completo de <strong>CSS moderno</strong> en Udemy para armar interfaces bien hechas y adaptables.</p>
<h4>Lo que vi</h4>
<ul>
  <li>CSS avanzado y <strong>SASS</strong>: variables, mixins y anidamiento.</li>
  <li><strong>Flexbox</strong> y <strong>CSS Grid</strong> para maquetar.</li>
  <li>Diseño <strong>responsive</strong> con enfoque mobile-first.</li>
  <li>Bootstrap, transiciones y animaciones.</li>
</ul>
`,
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
      details: `
<p>Certificado de <strong>+300 horas</strong> de FreeCodeCamp sobre armar sitios modernos, accesibles y adaptables.</p>
<h4>Lo que vi</h4>
<ul>
  <li>HTML semántico y CSS moderno.</li>
  <li><strong>Flexbox</strong> y <strong>CSS Grid</strong> para maquetar.</li>
  <li>Accesibilidad (WCAG) y diseño responsivo.</li>
</ul>
<h4>Lo que me llevé para el trabajo</h4>
<ul>
  <li>Maquetar <strong>mobile-first</strong> para cualquier dispositivo.</li>
  <li>Hacer interfaces <strong>accesibles</strong> para más gente.</li>
  <li>Cuidar el rendimiento para que cargue rápido.</li>
</ul>
`,
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
      details: `
<p>Un curso de <strong>diseño UX/UI con Adobe XD</strong> para prototipar ideas antes de programarlas.</p>
<h4>Lo que vi</h4>
<ul>
  <li>Wireframes y prototipos <strong>interactivos</strong>.</li>
  <li>Componentes reutilizables y bases de un sistema de diseño.</li>
  <li><strong>Flujos de usuario</strong> y microinteracciones.</li>
  <li>Diseño para web, móvil y software.</li>
</ul>
`,
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
      details: `
<p><strong>(Prueba técnica)</strong> Una API REST para un ecommerce, pensada para poder crecer.</p>
<h4>Qué tiene</h4>
<ul>
  <li>Autenticación con <strong>JWT</strong>.</li>
  <li>Gestión de productos y <strong>pedidos</strong>.</li>
  <li>Documentación con <strong>Swagger UI</strong>.</li>
  <li>Pruebas unitarias con Jest.</li>
</ul>
<p>Aquí puse en práctica TypeScript, MongoDB y buenas prácticas de API.</p>
`,
      highlights: ['Express.js', 'TypeScript', 'MongoDB', 'Jest'],
      url: null,
    },
    {
      name: 'Globetrotter',
      type: ProjectType.Practice,
      github: 'https://github.com/mickel-arroz/avila-front-mickel_arroz ',
      description:
        '(PRUEBA TÉCNICA) Aplicación FrontEnd de reservas de viajes conectada a una API REST. Ofrece un formulario multistep con validaciones, cálculo dinámico de precios, soporte para múltiples viajeros y animaciones sutiles.',
      details: `
<p><strong>(Prueba técnica)</strong> Un frontend de reservas de viajes conectado a una API, con foco en que se sienta fluido.</p>
<h4>Qué tiene</h4>
<ul>
  <li>Formulario <strong>multistep</strong> con validaciones.</li>
  <li>Cálculo de precios en tiempo real.</li>
  <li>Soporte para varios viajeros.</li>
  <li>Animaciones sutiles.</li>
</ul>
<p>Hecho con Next.js, TypeScript y Tailwind, desplegado en Vercel.</p>
`,
      highlights: ['Next.js', 'TypeScript', 'Tailwind', 'Vercel'],
      url: 'https://avila-front-mickel-arroz.vercel.app/ ',
    },
    {
      name: 'Arcade Arkanoid',
      type: ProjectType.Primary,
      github: 'https://github.com/mickel-arroz/arkanoid-mickel_arroz',
      description:
        "(Desktop) Proyecto web del clásico juego retro Arkanoid. Cuenta con un diseño retro inspirado en las máquinas Arcade, con una experiencia de juego que evoca la nostalgia de los años 90's.",
      details: `
<p>Una versión web del clásico <strong>Arkanoid</strong>, con estética retro de los Arcade de los 90's.</p>
<h4>Detalles</h4>
<ul>
  <li>El juego se renderiza con <strong>Canvas</strong>.</li>
  <li>Física de colisiones y niveles en <strong>JavaScript</strong> puro.</li>
  <li>Bastante cuidado en el estilo retro.</li>
</ul>
<p>Un proyecto que mezcla nostalgia, lógica y diversión.</p>
`,
      highlights: ['HTML', 'CSS', 'JavaScript', 'Canvas'],
      url: 'https://mickel-arroz.github.io/arkanoid-mickel_arroz',
    },
    {
      name: 'SpaceX Launches',
      type: ProjectType.Primary,
      github: 'https://github.com/mickel-arroz/SpaceXPageAPI',
      description:
        'Proyecto web de páginas estáticas y responsivas, el cual consume una API que posee información de SpaceX, para mostrar detalles de lanzamientos de sus cohetes y todos los datos relacionados con ellos.',
      details: `
<p>Un sitio estático y responsivo que consume la <strong>API pública de SpaceX</strong> con info real de sus misiones.</p>
<h4>Qué muestra</h4>
<ul>
  <li>Detalles de los <strong>lanzamientos</strong>.</li>
  <li>Datos de cada misión.</li>
  <li>Hecho con <strong>Astro</strong> y Tailwind.</li>
</ul>
<p>Un buen ejemplo de consumir APIs y renderizar rápido.</p>
`,
      highlights: ['HTML', 'Tailwind', 'JavaScript', 'Astro'],
      url: 'https://space-x-mickel-arroz.vercel.app/',
    },
    {
      name: 'Shrek Flowers',
      type: ProjectType.Practice,
      github: 'https://github.com/mickel-arroz/yellow-flowers',
      description:
        'Proyecto simple de una página web estática bella, creada como detalle de la costumbre de regalar flores amarillas el 21 de Septiembre en Venezuela, acompañado de la frase célebre de la película Shrek.',
      details: `
<p>Una web hecha como detalle por la costumbre venezolana de <strong>regalar flores amarillas el 21 de Septiembre</strong>.</p>
<h4>Sobre el proyecto</h4>
<ul>
  <li>Diseño simple y bonito.</li>
  <li>Un guiño a la frase de <em>Shrek</em>.</li>
  <li>Desplegado en GitHub Pages.</li>
</ul>
<p>Me gusta que el código también sirva para estos detalles.</p>
`,
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
      details: `
<p>Un portafolio <strong>minimalista y personalizable</strong>: justo este sitio que estás viendo.</p>
<h4>Lo que tiene de especial</h4>
<ul>
  <li>Todo el contenido sale de un solo archivo de datos <strong>tipado</strong>.</li>
  <li>Cada sección se configura sin tocar la interfaz.</li>
  <li>Hecho con <strong>Astro</strong>, cuidando rendimiento y accesibilidad.</li>
</ul>
<p>Pensado para reutilizarse fácil por cualquier persona.</p>
`,
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
      details: `
<p>Proyecto de la universidad: un sistema de control de alejamiento y protección entre usuarios de tipo <strong>víctima</strong> y <strong>agresor</strong>.</p>
<h4>Qué hice yo</h4>
<ul>
  <li>Armé el <strong>módulo web del administrador</strong>.</li>
  <li>Lo integré con la <strong>API</strong> del sistema.</li>
  <li>Apliqué patrones de diseño con Next.js y Tailwind.</li>
</ul>
<p>Tecnología con un propósito social, hecha en equipo.</p>
`,
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
