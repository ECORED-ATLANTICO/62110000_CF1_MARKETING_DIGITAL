<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Publicidad digital
    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema6/1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.d-block La publicidad digital es un componente estratégico dentro de la planeación del contenido, ya que permite amplificar el alcance del mensaje hacia segmentos previamente definidos. A diferencia de la publicidad tradicional, su principal fortaleza radica en la capacidad de segmentación precisa, medición en tiempo real y optimización basada en datos. En el entorno digital, la inversión publicitaria no se dirige a audiencias masivas indiscriminadas, sino a públicos estratégicamente seleccionados, lo que incrementa la eficiencia del presupuesto y mejora la rentabilidad de las campañas.
        p.d-block La publicidad digital se integra con la segmentación de mercados, el análisis del consumidor digital y los objetivos de conversión. No se trata únicamente de pautar anuncios, sino de diseñar acciones alineadas con metas claras, indicadores medibles y plataformas adecuadas según el perfil del público objetivo.

    Separador
    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema6/2.png", alt="descripcion")
      .col-lg-8
        p La publicidad digital es el conjunto de estrategias y acciones pagadas que utilizan canales y plataformas digitales para promocionar productos, servicios o marcas ante audiencias específicas. Se fundamenta en el uso de datos, algoritmos y herramientas tecnológicas que permiten dirigir anuncios según variables demográficas, conductuales y psicográficas.
        p.mb-0 Su principal característica es la trazabilidad. Cada acción puede medirse mediante indicadores como impresiones, clics, tasa de conversión y retorno de inversión. Esta medición constante convierte la publicidad digital en un proceso dinámico y optimizable.

    .fullwidth-bg.fullwidth-bg--2
    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido.mb-4
          h5 Figura 3.
          span Publicidad digital
        img.mb-2.d-sm-none(data-aos="fade-up", src="@/assets/curso/tema6/3-mob.png", alt="La figura 3 muestra conceptualizaciones de la publicidad digital.")
        img.mb-2.d-none.d-sm-block(data-aos="fade-up", src="@/assets/curso/tema6/3.png", alt="La figura 3 muestra conceptualizaciones de la publicidad digital.")
        figcaption Nota. SENA, (2026).

    .row.justify-content-center.align-items-center.z-2
      .col-xl-10
        .p-4.rounded.bg-primario-p5
          p.mb-0 En plataformas como Instagram, Facebook, TikTok y LinkedIn, la publicidad permite impactar usuarios según intereses, comportamiento de navegación e interacciones previas, fortaleciendo la precisión estratégica del mensaje.

    Separador
    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.2 Técnicas

    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema6/4.png", alt="").z-2
    
    .row.justify-content-center.z-2.mb-3
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 Las técnicas de publicidad digital corresponden a los métodos utilizados para ejecutar campañas de manera efectiva dentro del ecosistema digital. Estas técnicas permiten mejorar la eficiencia del presupuesto y aumentar la probabilidad de conversión. Su aplicación adecuada depende del análisis previo del público objetivo, la definición de metas claras y el seguimiento constante de indicadores de desempeño. A continuación, se presentan las principales técnicas empleadas en estrategias de publicidad digital y su finalidad estratégica.

    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Técnicas de publicidad digital y su finalidad estratégica
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Técnica
                th Descripción
                th Finalidad estratégica
            tbody
              tr
                td Segmentación avanzada.
                td Clasificación detallada de audiencias según datos demográficos y conductuales.
                td Incrementar relevancia del anuncio.
              tr(style="background-color: #F6F6F6")
                td #[em Remarketing]
                td Impacto a usuarios que ya interactuaron con la marca.
                td Aumentar probabilidad de conversión.
              tr
                td Publicidad programática.
                td Compra automatizada de espacios publicitarios mediante algoritmos.
                td Optimizar costos y alcance.
              tr(style="background-color: #F6F6F6")
                td A/B #[em testing].
                td Comparación de versiones de anuncios para evaluar rendimiento.
                td Mejorar efectividad del mensaje.
              tr
                td Optimización basada en datos.
                td Ajuste continuo según métricas de desempeño.
                td Maximizar retorno de inversión.
    Separador
    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 6.3 Tipologías

    p.mb-4 Las tipologías de publicidad digital hacen referencia a los formatos y modalidades mediante los cuales se presentan los anuncios en entornos digitales. Cada tipología cumple una función específica dentro del recorrido del usuario.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-5 
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema6/5.png", alt="")
      .col-lg-7
        .tarjeta.bg-primario-p10.p-4
          SlyderA(tipo="b")
            .row.justify-content-center
              .col-lg-10
                h4 #[em Display]
                p #[strong Características:] anuncios gráficos en sitios web y aplicaciones.
                p.mb-0 #[strong Aplicación principal:] generación de reconocimiento de marca.
            .row.justify-content-center
              .col-lg-10
                h4 Publicidad en redes sociales
                p #[strong Características:] anuncios integrados en feeds, historias o videos cortos.
                p.mb-0 #[strong Aplicación principal:] interacción y tráfico segmentado.
            .row.justify-content-center
              .col-lg-10
                h4 #[em Search Ads]
                p #[strong Características:] anuncios en resultados patrocinados de buscadores.
                p.mb-0 #[strong Aplicación principal:] captación de demanda activa.
            .row.justify-content-center
              .col-lg-10
                h4 #[em Video Ads]
                p #[strong Características:] contenido audiovisual antes o durante reproducciones digitales.
                p.mb-0 #[strong Aplicación principal:] impacto visual y recordación.
            .row.justify-content-center
              .col-lg-10
                h4 Publicidad nativa
                p #[strong Características:] contenido promocional integrado de forma orgánica.
                p.mb-0 #[strong Aplicación principal:] generar confianza y menor resistencia publicitaria.

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .p-4.rounded-4.bg-secundario-s5
          p.mb-0 Le invitamos a consultar estas lecturas recomendadas para ampliar los conocimientos en materia de publicidad digital: 

    .p-4.rounded-4.bg-terciario-t20.mb-5
      .row.justify-content-center.align-items-center
        .col-xl-1.d-none.d-xl-block
          figure
            img.w-55(data-aos="fade-down-left", src="@/assets/curso/tema6/6.png", alt="")
        .col-lg-9
          p.mb-4.mb-lg-0 Artículo para comprender cómo las redes sociales y los #[em influencers] impactan las estrategias de #[em marketing] y ventas, aportando una visión actualizada sobre tácticas modernas de posicionamiento digital: 
        .col-12.col-lg-3.col-xl-2
          a.boton.color-acento-botones.texto-oscuro(href="https://revistasinvestigacion.esic.edu/adresearch/index.php/adresearch/article/view/297/660", target="_blank")
            span Enlace web
            i.fas.fa-file-code

    .p-4.rounded-4.bg-terciario-t20
      .row.justify-content-center.align-items-center
        .col-xl-1.d-none.d-xl-block
          figure
            img.w-55(data-aos="fade-down-left", src="@/assets/curso/tema6/7.png", alt="")
        .col-lg-9
          p.mb-4.mb-lg-0 Artículo académico para comprender cómo la publicidad en redes sociodigitales, los algoritmos y la interacción con los usuarios alteran los hábitos de consumo en el entorno digital, lo cual es clave para diseñar campañas eficaces y centradas en el comportamiento del usuario: 
        .col-12.col-lg-3.col-xl-2
          a.boton.color-acento-botones.texto-oscuro(href="https://revistas.lasallep.edu.mx/index.php/huella/article/view/649/935", target="_blank")
            span Enlace web
            i.fas.fa-file-code


</template>

<script>
export default {
  name: 'Tema6',
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
