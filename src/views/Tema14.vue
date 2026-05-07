<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 14
      h1 SMO (#[em Social Media Optimization])
      
    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema14/1.png", alt="").z-2
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El SMO es una estrategia orientada a optimizar la presencia y el rendimiento de una marca en redes sociales. Mientras el SEO se enfoca en motores de búsqueda, el SMO busca mejorar la visibilidad, interacción y posicionamiento dentro de plataformas sociales. Su propósito es fortalecer la identidad digital, aumentar el alcance orgánico y fomentar la participación activa de la comunidad.

    Separador
    #t_14_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 14.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4  
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema14/2.png", alt="")
      .col-lg-8
        p El #[em Social Media Optimization] (SMO) es el conjunto de estrategias y técnicas destinadas a mejorar la visibilidad, el alcance y la interacción de una marca en redes sociales como Instagram, Facebook, LinkedIn y TikTok.
        p Implica optimizar perfiles, contenidos, formatos y dinámicas de interacción para favorecer el posicionamiento dentro de los algoritmos de cada plataforma.
        .p-4.bg-secundario-s5.rounded-4
          p.mb-0 Por ejemplo, marcas como Nike optimizan su biografía, enlaces, #[em hashtags] y formatos visuales para mantener coherencia y fortalecer su presencia digital. De igual manera, Starbucks utiliza contenido visual atractivo y consistente para aumentar interacción y recordación de marca.
    
    .p-4.rounded-4.bg-primario-p5
      p.mb-0 El SMO no se limita a publicar contenido, sino a estructurarlo estratégicamente para maximizar resultados.


    Separador
    #t_14_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 14.2 Acciones

    p.mb-4 Las acciones de SMO se enfocan en optimizar perfiles, contenido e interacción dentro de las plataformas sociales. A continuación, se organizan las principales acciones de SMO de manera estructurada para facilitar su comprensión estratégica.

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 11.
          span Acciones de SMO y su enfoque estratégico
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Acción
                th Descripción
                th Ejemplo empresarial
            tbody
              tr(style="background-color: #FFFFFF")
                td Optimización de perfiles.
                td Biografías claras, palabras clave, enlaces estratégicos e identidad visual coherente.
                td Adidas mantiene uniformidad gráfica y mensajes consistentes en sus redes.
              tr(style="background-color: #F6F6F6")
                td Uso estratégico de #[em hashtags].
                td Incrementa alcance y permite segmentar audiencias interesadas en temas específicos.
                td Marcas utilizan hashtags de campaña para ampliar visibilidad.
              tr(style="background-color: #FFFFFF")
                td Publicación constante y calendarizada.
                td Mantiene relevancia y presencia ante el algoritmo de la plataforma.
                td Coca-Cola planifica contenidos según temporadas y campañas globales.
              tr(style="background-color: #F6F6F6")
                td Fomento de interacción.
                td Respuesta a comentarios, encuestas y dinámicas participativas para fortalecer #[em engagement].
                td Duolingo interactúa activamente con su comunidad digital.
              tr(style="background-color: #FFFFFF")
                td Adaptación a formatos nativos.
                td Uso estratégico de #[em reels], historias, videos cortos o transmisiones en vivo según cada red social.
                td Empresas ajustan contenidos a formatos propios de Instagram o TikTok.

    Separador
    #t_14_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 14.3 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema13/3.png", alt="")
      .col-lg-8
        p El SMO se aplica estratégicamente cuando la empresa busca fortalecer comunidad, mejorar reconocimiento de marca y aumentar interacción orgánica. Es especialmente relevante en sectores donde la experiencia visual y la comunicación directa influyen en la decisión del consumidor.
        .py-3.px-4.bg-primario-p10.rounded-4.mb-3
          p.mb-0 Sephora utiliza contenido visual y tutoriales dinámicos en Instagram para conectar con públicos interesados en belleza y tendencias, mientras IBM optimiza su presencia en LinkedIn para posicionarse como referente en tecnología e innovación empresarial.
        p.mb-0 La aplicabilidad del SMO radica en su capacidad de potenciar el alcance orgánico, mejorar la percepción de marca y generar vínculos digitales sostenibles mediante optimización continua y coherencia estratégica.

    .p-4.rounded-4.bg-acento-contenido-a5
      .row.justify-content-center.align-items-center
        .col-xl-1.d-none.d-xl-block
          figure
            img.w-55(data-aos="fade-down-left", src="@/assets/curso/tema14/4.png", alt="")
        .col-lg-9
          p.mb-4.mb-lg-0 Para profundizar los conceptos expuestos, lo invitamos a consultar el siguiente video, el cual presenta de forma práctica las estrategias de #[em Social Media Optimization] (SMO) y #[em marketing] en redes sociales, orientadas a optimizar perfiles, contenidos y dinámicas de interacción para fortalecer la visibilidad, el alcance y el engagement de marca en plataformas digitales: 
        .col-12.col-lg-3.col-xl-2
          a.boton.color-acento-botones.texto-oscuro(href="https://youtu.be/lEy9G1gtr8M", target="_blank")
            span Abrir video
            i.fas.fa-file-video


</template>

<script>
export default {
  name: 'Tema14',
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
