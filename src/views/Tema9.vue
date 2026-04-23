<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 9
      h1 Consumidor digital
    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema9/1.png", alt="").z-2
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El consumidor digital es el eje central de toda estrategia de #[em marketing] en entornos virtuales. Se caracteriza por estar permanentemente conectado, acceder a múltiples fuentes de información y tomar decisiones basadas en comparaciones, reseñas y experiencias compartidas por otros usuarios. A diferencia del consumidor tradicional, posee mayor poder de decisión, capacidad de investigación autónoma y expectativa de inmediatez.

    Separador
    #t_9_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.1 Concepto
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/2.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block El consumidor digital es la persona que utiliza medios y plataformas digitales para buscar información, comparar opciones, interactuar con marcas y realizar procesos de compra o contratación de servicios. Su comportamiento está influenciado por la conectividad, el acceso a dispositivos móviles y la disponibilidad inmediata de datos.
    
    .p-4.bg-terciario-t20.rounded-4
      p.mb-0 Este tipo de consumidor se informa antes de comprar, consulta opiniones y valora la reputación online de las marcas. Por ejemplo, antes de adquirir un producto tecnológico, un usuario puede revisar reseñas en línea, comparar precios y analizar valoraciones de otros compradores en plataformas como Amazon o Mercado Libre. El consumidor digital exige transparencia, rapidez y personalización en la comunicación.

    Separador
    #t_9_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.2 Comportamiento

    .bloque-texto-g.bloque-texto-g--inverso.bg-primario-p10.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema9/3.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 El comportamiento del consumidor digital se caracteriza por ser dinámico, comparativo y orientado a la experiencia. Investiga, interactúa y evalúa antes de tomar decisiones. Además, participa activamente mediante comentarios, calificaciones y recomendaciones. 
    
    .p-4.bg-primario-p5.rounded-4.mb-5
      p.mb-0 A continuación, se presentan las principales características que definen el comportamiento del consumidor digital y su impacto en la estrategia empresarial.

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 7.
          span Características del comportamiento del consumidor digital
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Característica
                th Descripción
                th Ejemplo empresarial
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
              tr(style="background-color: #FFFFFF")
                td Sensibilidad a la experiencia.
                td Valora facilidad y rapidez.
                td Prefiere navegación intuitiva en Amazon.
      
    Separador
    #t_9_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 9.3 Variables

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-10.col-lg-5
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema9/4.png", alt="")
      .col-lg-7
        p Las variables del consumidor digital permiten clasificar y comprender su perfil para diseñar estrategias personalizadas. Estas variables no solo incluyen datos demográficos, sino también comportamientos tecnológicos y patrones de interacción.
        p.mb-0 Entre las principales variables se encuentran:
    .row.justify-content-center.mb-5
      .col-6.col-md-4.col-lg-3.col-xl-2.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema9/5.png' alt='')
          .tarjeta.color-primario.shadow
            .p-3.pt-4
              .row.justify-content-center
                .col-auto.text-center
                  p.mb-0 Edad y nivel socioeconómico.
      .col-6.col-md-4.col-lg-3.col-xl-2.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema9/6.png' alt='')
          .tarjeta.color-primario.shadow
            .p-3.pt-4
              .row.justify-content-center
                .col-auto.text-center
                  p.mb-0 Frecuencia de conexión digital.
      .col-6.col-md-4.col-lg-3.col-xl-2.mb-4.mb-lg-0(data-aos="fade-right")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema9/7.png' alt='')
          .tarjeta.color-primario.shadow
            .p-3.pt-4
              .row.justify-content-center
                .col-auto.text-center
                  p.mb-0 Tipo de dispositivo utilizado.
      .col-6.col-md-4.col-lg-3.col-xl-2.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema9/8.png' alt='')
          .tarjeta.color-primario.shadow
            .p-3.pt-4
              .row.justify-content-center
                .col-auto.text-center
                  p.mb-0 Nivel de interacción en redes sociales.
      .col-6.col-md-4.col-lg-3.col-xl-2.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema9/9.png' alt='')
          .tarjeta.color-primario.shadow
            .p-3.pt-4
              .row.justify-content-center
                .col-auto.text-center
                  p.mb-0 Sensibilidad al precio y promociones.
      .col-6.col-md-4.col-lg-3.col-xl-2.mb-4.mb-lg-0(data-aos="fade-left")
        .tarjeta-avatar
          img.w-90(src='@/assets/curso/tema9/10.png' alt='')
          .tarjeta.color-primario.shadow
            .p-3.pt-4
              .row.justify-content-center
                .col-auto.text-center
                  p.mb-0 Grado de lealtad a la marca.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .p-4.bg-terciario-t20.rounded-4
          .row.justify-content-center.align-items-center.z-2
            .col-sm-8.col-lg-2
              figure
                img.mb-4.mb-lg-0.w-125(data-aos="fade-down-right", src="@/assets/curso/tema9/11.png", alt="")
            .col-lg-9
              p Por ejemplo, Spotify segmenta usuarios según hábitos de escucha y preferencias musicales, mientras que Netflix personaliza recomendaciones basadas en historial de consumo. Estas variables permiten diseñar mensajes y ofertas ajustadas a cada perfil.
              p.mb-0 Comprender estas variables facilita la construcción de estrategias digitales más precisas, aumentando la probabilidad de interacción y conversión.
      
    .p-4.rounded-4.bg-acento-contenido-a5
      .row.justify-content-center.align-items-center
        .col-xl-1.d-none.d-xl-block
          figure
            img.w-55(data-aos="fade-down-left", src="@/assets/curso/tema9/12.png", alt="")
        .col-lg-9
          p.mb-4.mb-lg-0 Lo invitamos a consultar el siguiente video, dónde se presentan aplicaciones prácticas de la inteligencia artificial en campañas digitales para mejorar la segmentación, personalización y efectividad de los contenidos:  
        .col-12.col-lg-3.col-xl-2
          a.boton.color-acento-botones.texto-oscuro(href="https://youtu.be/VcwClSiAj_E", target="_blank")
            span Abrir video
            i.fas.fa-file-video
</template>

<script>
export default {
  name: 'Tema9',
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
