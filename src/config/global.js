export default {
  global: {
    Name: 'Análisis de datos y cliente digital',
    Description:
      'El componente formativo desarrolla competencias para planear contenido digital en redes sociales, alineando los objetivos de <em>marketing</em> con las metas organizacionales. Integra análisis del entorno digital, segmentación del cliente, definición de propuesta de valor, línea editorial, formatos de contenido y calendario estratégico, permitiendo formular planes coherentes, medibles y orientados al posicionamiento de marca en las redes.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Plan estratégico organizacional',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '1.1', titulo: 'Concepto', hash: 't_1_1' },
          { numero: '1.2', titulo: 'Componentes', hash: 't_1_2' },
          { numero: '1.3', titulo: 'Estructura', hash: 't_1_3' },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Entorno digital',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '2.1', titulo: 'Concepto', hash: 't_2_1' },
          { numero: '2.2', titulo: 'Variables', hash: 't_2_2' },
          { numero: '2.3', titulo: 'Características', hash: 't_2_3' },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Mezcla de mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '3.1', titulo: 'Concepto', hash: 't_3_1' },
          { numero: '3.2', titulo: 'Aplicabilidad', hash: 't_3_2' },
          { numero: '3.3', titulo: 'Variables', hash: 't_3_3' },
          { numero: '3.4', titulo: 'Estrategias', hash: 't_3_4' },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: '<em>E-marketing</em>',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '4.1', titulo: 'Concepto', hash: 't_4_1' },
          { numero: '4.2', titulo: 'Fundamentos', hash: 't_4_2' },
          { numero: '4.3', titulo: 'Estrategias', hash: 't_4_3' },
          { numero: '4.4', titulo: 'Tácticas', hash: 't_4_4' },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Segmentación de mercados',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '5.1', titulo: 'Concepto', hash: 't_5_1' },
          { numero: '5.2', titulo: 'Técnicas', hash: 't_5_2' },
          { numero: '5.3', titulo: 'Variables', hash: 't_5_3' },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Publicidad digital',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '6.1', titulo: 'Concepto', hash: 't_6_1' },
          { numero: '6.2', titulo: 'Técnicas', hash: 't_6_2' },
          { numero: '6.3', titulo: 'Tipologías', hash: 't_6_3' },
        ],
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Comunicación <em>online</em>',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '7.1', titulo: 'Concepto', hash: 't_7_1' },
          { numero: '7.2', titulo: 'Medios', hash: 't_7_2' },
          { numero: '7.3', titulo: 'Canales', hash: 't_7_3' },
          { numero: '7.4', titulo: 'Aplicabilidad', hash: 't_7_4' },
        ],
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Contenidos',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '8.1', titulo: 'Concepto', hash: 't_8_1' },
          { numero: '8.2', titulo: 'Metodología', hash: 't_8_2' },
          { numero: '8.3', titulo: 'Aplicabilidad', hash: 't_8_3' },
          { numero: '8.4', titulo: 'Arquitectura web', hash: 't_8_4' },
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Consumidor digital',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '9.1', titulo: 'Concepto', hash: 't_9_1' },
          { numero: '9.2', titulo: 'Comportamiento', hash: 't_9_2' },
          { numero: '9.3', titulo: 'Variables', hash: 't_9_3' },
        ],
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: '<em>Insights</em>',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '10.1', titulo: 'Concepto', hash: 't_10_1' },
          { numero: '10.2', titulo: 'Aplicabilidad', hash: 't_10_2' },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: 'Conversión',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '11.1', titulo: 'Concepto', hash: 't_11_1' },
          { numero: '11.2', titulo: 'Tasa', hash: 't_11_2' },
          { numero: '11.3', titulo: 'Aplicabilidad', hash: 't_11_3' },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'SEM (<em>Search Engine Marketing</em>)',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '12.1', titulo: 'Concepto', hash: 't_12_1' },
          { numero: '12.2', titulo: 'Estrategias', hash: 't_12_2' },
          { numero: '12.3', titulo: 'Aplicabilidad', hash: 't_12_3' },
        ],
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'SEO (<em>Search Engine Optimization</em>)',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '13.1', titulo: 'Concepto', hash: 't_13_1' },
          { numero: '13.2', titulo: 'Técnicas', hash: 't_13_2' },
          { numero: '13.3', titulo: 'Aplicabilidad', hash: 't_13_3' },
        ],
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: 'SMO (<em>Social Media Optimization</em>)',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '14.1', titulo: 'Concepto', hash: 't_14_1' },
          { numero: '14.2', titulo: 'Acciones', hash: 't_14_2' },
          { numero: '14.3', titulo: 'Aplicabilidad', hash: 't_14_3' },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Alcance',
      significado:
        'Número total de personas únicas que visualizan un contenido digital en una plataforma determinada.',
    },
    {
      termino: 'Arquitectura web',
      significado:
        'Estructura organizativa de un sitio web que facilita la navegación, la experiencia del usuario y la correcta indexación en buscadores.',
    },
    {
      termino: 'Calendario editorial',
      significado:
        'Herramienta de planificación que organiza fechas, formatos y temáticas de publicación de contenidos digitales.',
    },
    {
      termino: 'Comunicación online',
      significado:
        'Proceso de interacción bidireccional entre la marca y los usuarios a través de canales digitales.',
    },
    {
      termino: 'Consumidor digital',
      significado:
        'Usuario que investiga, compara y toma decisiones de compra mediante plataformas y entornos digitales.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'Información creada en formato digital con fines informativos, educativos, comerciales o de posicionamiento.',
    },
    {
      termino: 'Conversión',
      significado:
        'Acción estratégica que realiza el usuario y que cumple un objetivo de la marca, como compra o registro.',
    },
    {
      termino: '<em>E-marketing</em>',
      significado:
        'Conjunto de estrategias de <em>marketing</em> aplicadas mediante herramientas y canales digitales.',
    },
    {
      termino: 'Entorno digital',
      significado:
        'Ecosistema tecnológico donde interactúan usuarios, marcas, plataformas y herramientas online.',
    },
    {
      termino: 'Formato digital',
      significado:
        'Tipo de presentación del contenido, como video, imagen, carrusel, reel, blog o infografía.',
    },
    {
      termino: '<em>Insight</em>',
      significado:
        'Análisis profundo que revela motivaciones, necesidades o comportamientos del consumidor digital.',
    },
    {
      termino: 'Interacción',
      significado:
        'Participación activa del usuario mediante comentarios, reacciones, clics o compartidos.',
    },
    {
      termino: 'Línea editorial',
      significado:
        'Definición estratégica del tono, estilo y temáticas que guían la comunicación digital de la marca.',
    },
    {
      termino: 'Métrica digital',
      significado:
        'Indicador cuantificable que permite medir el rendimiento de acciones y contenidos en línea.',
    },
    {
      termino: 'Mezcla de mercadeo digital',
      significado:
        'Adaptación del producto, precio, plaza y promoción al contexto y dinámicas del entorno digital.',
    },
    {
      termino: 'Plan estratégico digital',
      significado:
        'Documento que define objetivos, estrategias y acciones para posicionar la marca en medios digitales.',
    },
    {
      termino: 'Posicionamiento online',
      significado:
        'Percepción y lugar que ocupa una marca en la mente del consumidor dentro del entorno digital.',
    },
    {
      termino: 'Propuesta de valor',
      significado:
        'Beneficio diferencial que la marca comunica para destacar frente a la competencia.',
    },
    {
      termino: 'Publicidad digital',
      significado:
        'Estrategias pagadas en plataformas online para promocionar productos o servicios de manera segmentada.',
    },
    {
      termino: 'Público objetivo',
      significado:
        'Segmento específico del mercado al cual se dirigen los contenidos y estrategias digitales.',
    },
    {
      termino: 'Segmentación',
      significado:
        'Proceso de clasificación del mercado en grupos homogéneos según características demográficas, geográficas o psicográficas.',
    },
    {
      termino: 'SEM',
      significado:
        'Estrategias de <em>marketing</em> en motores de búsqueda mediante anuncios pagados para aumentar visibilidad.',
    },
    {
      termino: 'SEO',
      significado:
        'Técnicas de optimización orgánica que mejoran la posición de un sitio web en los resultados de búsqueda.',
    },
    {
      termino: 'SMO',
      significado:
        'Acciones orientadas a optimizar la presencia, visibilidad e interacción de una marca en redes sociales.',
    },
    {
      termino: 'Tasa de conversión',
      significado:
        'Porcentaje que relaciona el número de conversiones con el total de usuarios impactados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Cardona, A. (2023). <em>Marketing digital: Estrategias, métricas y contenidos para redes sociales</em>. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Cuervo-Sánchez, C. A. (2025). <em>Las redes sociales y los influencers como parte de la estrategia de ventas: Un análisis bibliométrico</em>. aDResearch ESIC International Journal of Communication Research, 34, e297.',
      link:
        'https://revistasinvestigacion.esic.edu/adresearch/index.php/adresearch/article/view/297/660',
    },
    {
      referencia:
        'Gutiérrez, M., & López, J. (2022). <em>Estrategias de contenido digital: técnicas para atraer, convertir y fidelizar audiencias</em>. Ediciones Deusto.',
      link: '',
    },
    {
      referencia:
        'Hernández, A., & Rodríguez, C. (2021). <em>Community management y social media: generación de contenido y métricas digitales</em>. Ediciones Pirámide.',
      link: '',
    },
    {
      referencia:
        'Kotler, P., & Keller, K. L. (2016). <em>Dirección de marketing</em> (15.ª ed.). Pearson.',
      link: '',
    },
    {
      referencia:
        'López Lazcano, M. (2025). <em>La influencia de la publicidad en redes sociodigitales sobre los hábitos de consumo</em>. Huella de la Palabra, <em>18</em>(18), 38–65.',
      link:
        'https://revistas.lasallep.edu.mx/index.php/huella/article/view/649/935',
    },
    {
      referencia:
        'Morales, L. (2024). <em>Marketing de contenidos en redes sociales: diseño, producción y análisis de impacto</em>. Editorial Alfaomega.',
      link: '',
    },
    {
      referencia:
        'Pérez, D., & Ramírez, S. (2022). <em>Analítica digital y métricas para redes sociales</em>. Ediciones McGraw Hill.',
      link: '',
    },
    {
      referencia:
        'Ruiz, P. (2023). <em>Publicidad digital y normativa legal en entornos digitales</em>. Editorial UOC.',
      link: '',
    },
    {
      referencia:
        'Sánchez, E., & Méndez, F. (2021). <em>SEO, SEM y posicionamiento de contenido para marketing digital</em>. Ediciones Paraninfo.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de la línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Mario Morales Cabrera',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera Roldan',
          cargo: 'Diseñador web',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Fabio Fonseca Arguelles',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Nelson Iván Vera Briceño',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Laura Daniela Burgos Rueda',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Karine Isabel Ospino Fritz',
          cargo: 'Validador y vinculador de recursos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
