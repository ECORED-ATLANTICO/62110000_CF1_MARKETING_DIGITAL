<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 10
      h1 #[em Insights]

    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema10/1.png", alt="").z-2
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Los insights representan uno de los elementos más estratégicos dentro del #[em marketing] digital, ya que permiten comprender las motivaciones profundas del consumidor más allá de los datos superficiales. No se trata únicamente de identificar qué hace el usuario, sino de entender por qué lo hace. Un insight bien formulado orienta la creación de contenidos, el diseño de campañas y la construcción de propuestas de valor diferenciadas.

    Separador
    #t_10_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 10.1 Concepto
    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema10/2.png", alt="")
      .col-lg-8
        p Un insight es una interpretación profunda y reveladora sobre el comportamiento, las necesidades o las motivaciones del consumidor, obtenida a partir del análisis de datos y observación del entorno. Va más allá de un dato estadístico, porque explica la razón detrás de la conducta.
        .p-4.bg-terciario-t20.rounded-4.mb-4
          p.mb-0 Por ejemplo, un dato puede indicar que los usuarios abandonan un carrito de compra; el insight podría revelar que el motivo real es la desconfianza en los costos adicionales o en los tiempos de entrega. Esa comprensión permite ajustar la estrategia de manera efectiva. Empresas como Nike, Apple y Airbnb han construido campañas exitosas a partir de insights que conectan con emociones, aspiraciones y necesidades reales de sus públicos. El insight transforma la información en comprensión estratégica.
        p.mb-0 Un insight debe cumplir tres características: relevancia para el consumidor, conexión emocional y aplicabilidad estratégica.

    .row.justify-content-center
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema10/3.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Relevancia para el consumidor
            p.mb-0 Debe responder a una necesidad, deseo o problema real. Si no es importante para el público, no genera impacto.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema10/4.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Conexión emocional
            p.mb-0 Activa emociones como confianza, identificación o pertenencia. Las decisiones de compra también se basan en sentimientos.
    
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema10/5.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Aplicabilidad estratégica
            p.mb-0 Debe transformarse en acciones concretas de comunicación y #[em marketing]. Un insight útil guía decisiones y mejora resultados.
    Separador
    #t_10_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 10.2 Aplicabilidad
    .bloque-texto-g.color-terciario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema10/6.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block La aplicabilidad de los insights consiste en convertir la comprensión obtenida en acciones concretas dentro de la estrategia digital. Cuando un insight se integra correctamente, orienta la creación de contenidos, la selección de mensajes y la definición de propuestas diferenciadoras.
        p.d-block.mb-0 Por ejemplo, Dove identificó el insight relacionado con la inseguridad femenina frente a los estándares de belleza irreales. A partir de ello, desarrolló campañas centradas en la belleza real, logrando conexión emocional y posicionamiento de marca. De manera similar, Spotify utiliza insights basados en hábitos de escucha para personalizar listas y campañas como “Wrapped”, fortaleciendo la experiencia del usuario.

    .p-4.rounded-4.bg-primario-p5.mb-4.mb-lg-5
      p.mb-0.text-center A continuación, se presentan ejemplos de cómo un insight puede transformarse en acción estratégica.
      
    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.z-2.mb-4.mb-lg-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 8.
          span Del insight a la acción estratégica
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Insight identificado
                th Interpretación estratégica
                th Aplicación empresarial
            tbody
              tr(style="background-color: #FFFFFF")
                td Búsqueda activa de información.
                td Investiga antes de comprar.
                td Usuarios comparan productos en Mercado Libre.
              tr(style="background-color: #F6F6F6")
                td Influencia social.
                td Considera opiniones y reseñas.
                td Clientes revisan valoraciones en Tripadvisor.
              tr(style="background-color: #FFFFFF")
                td Multicanalidad.
                td Utiliza varios dispositivos y plataformas.
                td Compra en #[em app] móvil y consulta #[em web] de Falabella.
              tr(style="background-color: #F6F6F6")
                td Inmediatez.
                td Espera respuestas rápidas.
                td Solicita soporte inmediato en Rappi.

    .p-4.rounded-4.bg-secundario-s5.mb-4.mb-lg-5
      p.mb-0 El insight, cuando se fundamenta en datos y se interpreta estratégicamente, se convierte en un elemento diferenciador que orienta decisiones comunicativas y comerciales con mayor precisión.

    .row.justify-content-center.align-items-stretch.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema10/7.png", alt="")
      .col-lg-7.bg-audio.rounded-4
        .row.align-items-center
          .col-sm-4
            figure.pt-3
              img.w-155(src="@/assets/curso/tema4/20.png", alt="alt")
          .col-sm-8.col-lg-8
            h5.text-white ¿Sabías qué?
            p.text-white Lo invitamos a escuchar el siguiente pódcast:
            TarjetaAudio.color-terciario.mb-3(
              texto="Charlas que venden: Insights digitales"
              :audio="require('@/assets/podcasts/P2_insights_digitales.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )

</template>

<script>
export default {
  name: 'Tema10',
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
