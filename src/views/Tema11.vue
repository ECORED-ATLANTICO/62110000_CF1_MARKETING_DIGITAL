<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 11
      h1 Conversión
    img(data-aos="fade-up")(src="@/assets/curso/tema11/1.png", alt="").z-2
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 La conversión representa uno de los indicadores más importantes dentro de la estrategia digital, ya que mide el momento en que un usuario realiza la acción esperada por la empresa. No se limita únicamente a la compra; puede incluir registros, descargas, suscripciones o cualquier objetivo previamente definido. La conversión permite evaluar la efectividad del contenido, la segmentación y la comunicación online, convirtiéndose en un punto clave para la toma de decisiones estratégicas.

    Separador
    #t_11_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 11.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4  
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema11/2.png", alt="")
      .col-lg-8
        p La conversión es la acción específica que un usuario realiza en coherencia con los objetivos de la estrategia digital. Esta acción puede variar según la meta establecida: completar una compra, registrarse en un formulario, suscribirse a un boletín o descargar un recurso.
        .p-4.bg-terciario-t20.rounded-4
          p.mb-0 Por ejemplo, en un comercio electrónico como Amazon, la conversión principal suele ser la compra de un producto. En plataformas de servicios como Netflix, la conversión puede ser la suscripción a un plan. En el caso de empresas como HubSpot, puede consistir en la descarga de un recurso gratuito a cambio de datos de contacto. La definición de conversión depende del objetivo estratégico previamente planteado.
    
    Separador
    #t_11_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 11.2 Tasa

    .row.justify-content-center.z-2
      .col-xl-10
        .rounded-4.bg-acento-contenido-a5.mb-4
          .row.justify-content-center.align-items-center
            .col-lg-9.col-xl-10
              .p-4
                p La tasa de conversión es el indicador que mide el porcentaje de usuarios que realizan la acción esperada respecto al total de usuarios impactados o visitantes.
                p.mb-0 Se calcula mediante la siguiente fórmula:
            .col-lg-3.col-xl-2
              figure
                img.w-190(data-aos="fade-down-left", src="@/assets/curso/tema11/3.png", alt="")

    .row.justify-content-center.z-2
      .col-xl-10
        .p-4.rounded-4.bg-primario-p5.mb-4
          p.mb-0.text-center Tasa de conversión = (Número de conversiones / Número total de visitantes) × 100

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema11/4.png", alt="")
      .col-lg-7
        .py-3.px-4.rounded-4.bg-terciario-t20
          p.mb-0 Por ejemplo, si una tienda online como Zara recibe 10.000 visitas en su sitio web y 300 personas realizan una compra, la tasa de conversión sería del 3 %. En una campaña de generación de leads de LinkedIn Ads, si 1.000 personas ven el anuncio y 50 completan el formulario, la tasa sería del 5 %.
    .row.justify-content-center.z-2
      .col-xl-10
        .p-4.rounded-4.bg-primario-p10.mb-4
          p.mb-0.text-center Este indicador permite evaluar la eficiencia de la estrategia digital y detectar oportunidades de optimización.

    Separador
    #t_11_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 11.3 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema11/5.png", alt="")
      .col-lg-8
        p La conversión se aplica estratégicamente en el diseño del embudo digital, la optimización de páginas web y la mejora de campañas publicitarias. Su análisis permite identificar puntos de fricción, ajustar mensajes y mejorar la experiencia del usuario.
        .py-3.px-4.rounded-4.bg-acento-contenido-a5.mb-4
          p.mb-0 Por ejemplo, Airbnb optimiza continuamente su proceso de reserva para reducir abandonos y aumentar confirmaciones. Spotify simplifica el proceso de registro para facilitar la suscripción. De igual forma, empresas como Mercado Libre ajustan descripciones, imágenes y métodos de pago para incrementar la probabilidad de compra.
        p.mb-0 La aplicabilidad de la conversión radica en su capacidad de traducir la estrategia digital en resultados medibles y concretos.
    


</template>

<script>
export default {
  name: 'Tema11',
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
