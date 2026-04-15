<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/1-sintesis.png", alt="")
      .col-lg-8
        p El componente formativo Planeación del contenido digital integra el plan estratégico organizacional, el entorno digital, la mezcla de mercadeo y el #[em e-marketing] como bases para la formulación de estrategias #[em online]. Desarrolla la segmentación de mercados, la publicidad digital, la comunicación #[em online] y la creación de contenidos, incluyendo arquitectura web, consumidor digital e #[em insights] para orientar la conversión. Finalmente, aborda las estrategias de posicionamiento y visibilidad mediante SEM, SEO y SMO, consolidando un enfoque estratégico para planear, organizar y ejecutar contenidos digitales alineados con los objetivos organizacionales.
    .row.justify-content-center
      .col-12
        figure
          img(src="@/assets/curso/sintesis.svg", alt="")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
