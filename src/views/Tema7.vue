<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 7
      h1 Comunicación #[em online]

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema7/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block La comunicación #[em online] es el proceso estratégico mediante el cual las organizaciones interactúan con sus públicos a través de entornos digitales. Se caracteriza por su inmediatez, bidireccionalidad y capacidad de medición. A diferencia de la comunicación tradicional, el usuario no es un receptor pasivo, sino un participante activo que comenta, comparte y genera retroalimentación constante.

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .p-4.rounded.bg-secundario-s10
          p.mb-0 Empresas como Coca-Cola, Nike y Amazon han fortalecido su posicionamiento global gracias a estrategias de comunicación #[em online] coherentes, centradas en la experiencia del usuario y adaptadas a distintos entornos digitales.

    Separador
    #t_7_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 7.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema7/2.png", alt="")
      .col-lg-8
        p La comunicación #[em online] consiste en la transmisión planificada de mensajes a través de medios digitales con el objetivo de informar, persuadir, fidelizar o generar interacción con audiencias específicas. Implica definir propósito, tono, formato y canal adecuado según el segmento de mercado.
        .p-4.rounded.bg-terciario-t20
          p.mb-0 Por ejemplo, Netflix utiliza un tono cercano y dinámico en redes sociales para conectar con públicos jóvenes, mientras que BBVA adopta un lenguaje más institucional y educativo para comunicar contenidos financieros. Esto demuestra que la comunicación #[em online] debe adaptarse al perfil del consumidor digital.

    Separador
    #t_7_2.titulo-segundo.color-acento-contenido(data-aos="flip-up").z-2
      h2 7.2 Medios
      
    .fullwidth-bg.fullwidth-bg--2
    .p-4.rounded-4.bg-primario-p10.mb-5.z-2
      p.mb-0 Los medios son los espacios digitales donde se desarrolla la interacción entre la marca y el usuario. Cada medio posee características propias que influyen en el tipo de contenido y en la estrategia comunicativa.

    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 4.
          span Medios de comunicación #[em online] y ejemplos empresariales
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Medio
                th Características
                th Ejemplo empresarial
            tbody
              tr(style="background-color: #FFFFFF")
                td Redes sociales.
                td Alta interacción y viralización.
                td Nike genera comunidad mediante campañas motivacionales.
              tr(style="background-color: #F6F6F6")
                td Sitio web corporativo.
                td Información institucional y conversión.
                td IKEA integra catálogo y tienda virtual.
              tr(style="background-color: #FFFFFF")
                td #[em Blog] empresarial.
                td Contenido educativo o especializado.
                td HubSpot posiciona contenido formativo en #[em marketing].
              tr(style="background-color: #F6F6F6")
                td Correo electrónico.
                td Comunicación personalizada y segmentada.
                td Amazon envía recomendaciones basadas en historial de compra.
              tr(style="background-color: #FFFFFF")
                td Mensajería instantánea.
                td Atención inmediata y soporte.
                td Claro ofrece servicio al cliente vía chat digital.

    Separador
    #t_7_3.titulo-segundo.color-acento-contenido(data-aos="flip-up").z-2
      h2 7.3 Canales

    .row.justify-content-center.z-2
      .col-xl-10
        .rounded-4.bg-terciario-t20.mb-4.mb-lg-5
          .row.justify-content-center.align-items-center
            .col-lg-9.col-xl-10
              p.p-4.mb-0 Los canales digitales permiten operacionalizar la estrategia de comunicación dentro de cada medio, facilitando la distribución del mensaje según el objetivo planteado y el comportamiento del público. Cada canal cumple una función específica dentro del recorrido del consumidor, desde la visibilidad hasta la fidelización. A continuación, se presentan los principales canales digitales y su uso estratégico con ejemplos empresariales.
            .col-lg-3.col-xl-2
              figure
                img.w-190(data-aos="fade-down-left", src="@/assets/curso/tema7/3.png", alt="")

      .row.justify-content-center.z-2
        .col-xl-10
          .titulo-sexto.color-acento-contenido
            h5 Tabla 5.
            span Canales digitales y su uso estratégico
          .tabla-a.color-secundario
            table
              caption Nota. SENA, (2026).
              thead
                tr(style="background-color: #F1B6FC")
                  th Canal
                  th Función principal
                  th Ejemplo empresarial
              tbody
                tr(style="background-color: #FFFFFF")
                  td Publicaciones en #[em feed].
                  td Posicionamiento y visibilidad.
                  td Adidas presenta lanzamientos de productos.
                tr(style="background-color: #F6F6F6")
                  td Historias.
                  td Comunicación inmediata y temporal.
                  td Starbucks promociona ofertas diarias.
                tr(style="background-color: #FFFFFF")
                  td Videos cortos.
                  td Alcance y viralización.
                  td Duolingo utiliza contenido humorístico para #[em engagement].
                tr(style="background-color: #F6F6F6")
                  td Anuncios patrocinados.
                  td Amplificación segmentada.
                  td Samsung promociona nuevos dispositivos.
                tr(style="background-color: #FFFFFF")
                  td Boletines electrónicos.
                  td Fidelización y retención.
                  td Falabella envía promociones personalizadas.


    Separador
    #t_7_4.titulo-segundo.color-acento-contenido(data-aos="flip-up").z-2
      h2 7.4 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema7/4.png", alt="descripcion")
      .col-lg-8
        p La comunicación #[em online] se aplica estratégicamente cuando existe coherencia entre el segmento identificado, el mensaje diseñado y el medio seleccionado. No todos los públicos responden al mismo formato ni interactúan de igual manera en cada plataforma, por lo que la efectividad comunicativa depende de la adecuación del contenido al contexto digital y a las características del consumidor.
        p La aplicabilidad exige analizar variables como edad, intereses, comportamiento de navegación, nivel de interacción y momento del recorrido de compra. Con base en este análisis, la organización define tono, formato, frecuencia y tipo de contenido. Una estrategia dirigida a profesionales requiere argumentación técnica y enfoque informativo, mientras que una orientada a públicos jóvenes demanda dinamismo, lenguaje cercano y recursos audiovisuales atractivos.
        .p-4.rounded.bg-primario-p10
          p.mb-0 Por ejemplo, LinkedIn es utilizado por empresas como Microsoft para comunicar innovación, liderazgo y desarrollo tecnológico mediante contenidos corporativos y artículos especializados. En contraste, TikTok es aprovechado por marcas como Maybelline para conectar con audiencias jóvenes a través de videos cortos, tendencias y demostraciones visuales de producto.

    .p-4.rounded-4.bg-acento-contenido-a5
      p.mb-0 En consecuencia, la aplicabilidad de la comunicación #[em online] depende del análisis del consumidor digital, la claridad de los objetivos estratégicos y la capacidad de adaptar el mensaje al entorno adecuado, garantizando coherencia entre contenido, canal y propósito comunicativo.



                  
</template>

<script>
export default {
  name: 'Tema7',
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
