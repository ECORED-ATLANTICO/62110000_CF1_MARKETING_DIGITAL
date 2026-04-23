<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 13
      h1 SEO (#[em Search Engine Optimization])
      
    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema13/1.png", alt="").z-2
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El SEO es una estrategia fundamental del #[em marketing] digital orientada a mejorar la visibilidad de un sitio web en los resultados orgánicos de los motores de búsqueda. A diferencia del SEM, no implica pago directo por clic, sino la optimización técnica y estratégica del contenido para posicionarlo de manera natural. Su efectividad radica en la constancia, la calidad del contenido y la experiencia del usuario.

    Separador
    #t_13_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 13.1 Concepto

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-6.col-xl-4
        .p-4.rounded-4.bg-primario-p10.mb-4.mb-lg-0
          p.mb-0 El #[em Search Engine Marketing] (SEM) es el conjunto de estrategias de #[em marketing] digital que utilizan anuncios pagos en motores de búsqueda para atraer tráfico cualificado hacia un sitio web. Generalmente opera bajo modelos de pago por clic (CPC), donde el anunciante paga únicamente cuando el usuario hace clic en el anuncio.
      .col-xl-4.d-none.d-xl-block
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema13/2.png", alt="")
      .col-lg-6.col-xl-4
        .p-4.rounded-4.bg-secundario-s5
          p.mb-0 La plataforma más utilizada para este tipo de estrategias es Google Ads, que permite posicionar anuncios en el buscador Google según palabras clave específicas. También existen opciones como Microsoft Advertising, vinculada al buscador Bing.
    
    .p-4.rounded-4.bg-primario-p5
      p.mb-0.text-center El SEO es una estrategia de mediano y largo plazo que contribuye a la sostenibilidad digital de la marca.

    Separador
    #t_13_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 13.2 Técnicas

    p.mb-4 Las técnicas de SEO integran acciones internas y externas que fortalecen el posicionamiento orgánico y mejoran la visibilidad digital de una marca en los motores de búsqueda. A continuación, se presentan las principales estrategias utilizadas para optimizar resultados.

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 10.
          span Técnicas de SEO y su enfoque estratégico
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Técnica
                th Descripción
                th Ejemplo empresarial
            tbody
              tr(style="background-color: #FFFFFF")
                td SEO #[em On-Page].
                td Optimización interna del sitio: palabras clave, meta descripciones, títulos, encabezados y calidad del contenido.
                td Shopify optimiza artículos con keywords orientadas a emprendedores.
              tr(style="background-color: #F6F6F6")
                td SEO Técnico.
                td Mejora de velocidad de carga, diseño responsive y arquitectura web.
                td Amazon prioriza tiempos de carga rápidos para mejorar posicionamiento.
              tr(style="background-color: #FFFFFF")
                td SEO #[em Off-Page].
                td Generación de enlaces externos (#[em backlinks]) desde sitios con autoridad.
                td Enlaces hacia Forbes fortalecen su autoridad digital.
              tr(style="background-color: #F6F6F6")
                td Optimización de experiencia de usuario (UX).
                td Diseño intuitivo que facilita navegación y permanencia.
                td Airbnb prioriza estructura clara y experiencia amigable.
              tr(style="background-color: #FFFFFF")
                td Creación de contenido de valor.
                td Producción constante de contenido útil y actualizado que responda a búsquedas reales.
                td #[em Blogs] corporativos optimizados en empresas como HubSpot.

    Separador
    #t_13_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 13.3 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema13/3.png", alt="")
      .col-lg-8
        p El SEO se aplica estratégicamente cuando la empresa busca posicionamiento sostenible, autoridad digital y generación constante de tráfico orgánico. Es especialmente útil en estrategias de contenido, blogs corporativos y comercio electrónico.
        .py-3.px-4.bg-terciario-t20.rounded-4.mb-3
          p.mb-0 Por ejemplo, Mercado Libre optimiza descripciones de productos para aparecer en búsquedas específicas. Booking.com trabaja el posicionamiento orgánico para destinos turísticos, lo que le permite captar usuarios sin depender exclusivamente de publicidad paga.
        p.mb-0 La aplicabilidad del SEO radica en su capacidad de construir visibilidad a largo plazo, reducir costos publicitarios y fortalecer la credibilidad digital de la marca mediante contenido relevante y estructurado estratégicamente.

    .p-4.rounded-4.bg-acento-contenido-a5
      .row.justify-content-center.align-items-center
        .col-xl-1.d-none.d-xl-block
          figure
            img.w-55(data-aos="fade-down-left", src="@/assets/curso/tema13/4.png", alt="")
        .col-lg-9
          p.mb-4.mb-lg-0 Lo invitamos a consultar el siguiente video, el cual complementa la comprensión de las estrategias SEO y SEM mediante ejemplos prácticos aplicables al contenido digital, orientados a mejorar el posicionamiento y el rendimiento de las páginas en los motores de búsqueda: 
        .col-12.col-lg-3.col-xl-2
          a.boton.color-acento-botones.texto-oscuro(href="https://youtu.be/WhL__dMk4xM", target="_blank")
            span Abrir video
            i.fas.fa-file-video




</template>

<script>
export default {
  name: 'Tema13',
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
