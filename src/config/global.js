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
        ],
      },
      {
        nombreRuta: 'tema9',
        numero: '9',
        titulo: 'Arquitectura web',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema10',
        numero: '10',
        titulo: 'Consumidor digital',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '10.1', titulo: 'Concepto', hash: 't_10_1' },
          { numero: '10.2', titulo: 'Comportamiento', hash: 't_10_2' },
          { numero: '10.3', titulo: 'Variables', hash: 't_10_3' },
        ],
      },
      {
        nombreRuta: 'tema11',
        numero: '11',
        titulo: '<em>Insights</em>',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '11.1', titulo: 'Concepto', hash: 't_11_1' },
          { numero: '11.2', titulo: 'Aplicabilidad', hash: 't_11_2' },
        ],
      },
      {
        nombreRuta: 'tema12',
        numero: '12',
        titulo: 'Conversión',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '12.1', titulo: 'Concepto', hash: 't_12_1' },
          { numero: '12.2', titulo: 'Tasa', hash: 't_12_2' },
          { numero: '12.3', titulo: 'Aplicabilidad', hash: 't_12_3' },
        ],
      },
      {
        nombreRuta: 'tema13',
        numero: '13',
        titulo: 'SEM (<em>Search Engine Marketing</em>)',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '13.1', titulo: 'Concepto', hash: 't_13_1' },
          { numero: '13.2', titulo: 'Estrategias', hash: 't_13_2' },
          { numero: '13.3', titulo: 'Aplicabilidad', hash: 't_13_3' },
        ],
      },
      {
        nombreRuta: 'tema14',
        numero: '14',
        titulo: 'SEO (<em>Search Engine Optimization</em>)',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '14.1', titulo: 'Concepto', hash: 't_14_1' },
          { numero: '14.2', titulo: 'Técnicas', hash: 't_14_2' },
          { numero: '14.3', titulo: 'Aplicabilidad', hash: 't_14_3' },
        ],
      },
      {
        nombreRuta: 'tema15',
        numero: '15',
        titulo: 'SMO (<em>Social Media Optimization</em>)',
        desarrolloContenidos: true,
        subMenu: [
          { numero: '15.1', titulo: 'Concepto', hash: 't_15_1' },
          { numero: '15.2', titulo: 'Acciones', hash: 't_15_2' },
          { numero: '15.3', titulo: 'Aplicabilidad', hash: 't_15_3' },
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
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
  complementario: [
    {
      tema: '',
      referencia: '',
      tipo: '',
      link: '',
    },
  ],
  glosario: [
    {
      termino: '',
      significado: '',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Nombre completo',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro XYZ - Regional XYZ',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro XYZ - Regional XYZ',
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
