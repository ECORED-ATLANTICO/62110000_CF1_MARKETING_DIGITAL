<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/1-intro.png", alt="")
      .col-lg-8
        p El componente formativo Planeación del contenido digital aborda la estructuración estratégica del contenido en entornos digitales, integrando fundamentos del plan estratégico organizacional, el análisis del entorno digital y la aplicación de la mezcla de mercadeo en escenarios online. En un contexto donde las marcas compiten por la atención del usuario en múltiples plataformas, planear el contenido deja de ser una acción improvisada y se convierte en un proceso estratégico orientado a resultados.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Su importancia radica en que permite alinear los objetivos de comunicación y marketing con las metas organizacionales, comprender al consumidor digital, segmentar adecuadamente el mercado y diseñar propuestas de valor diferenciadas. La adecuada articulación entre publicidad digital, comunicación #[em online], arquitectura web, posicionamiento y optimización en motores de búsqueda fortalece la visibilidad de la marca y mejora su competitividad en redes sociales y entornos digitales.
    
    p.mb-4.mb-lg-5 El desarrollo temático se abordará de manera progresiva, iniciando con el plan estratégico organizacional y el entorno digital, continuando con la mezcla de mercadeo, #[em e-marketing] y segmentación de mercados. Posteriormente, se profundizará en publicidad digital, comunicación #[em online] y contenidos, para luego analizar el consumidor digital, los #[em insights] y la conversión. Finalmente, se estudiarán las estrategias de posicionamiento mediante SEM, SEO y SMO, consolidando una visión integral para la formulación de planes de contenido digital en Instagram, TikTok, Facebook y LinkedIn.
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
