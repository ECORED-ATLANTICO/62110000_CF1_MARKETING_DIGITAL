<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Plan estratégico organizacional
    .fullwidth-bg.fullwidth-bg--1
    img(data-aos="fade-up")(src="@/assets/curso/tema1/1.png", alt="").z-2
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 La creación de contenido digital para redes sociales es una acción táctica que debe estar subordinada al direccionamiento estratégico de la organización. Ninguna estrategia de contenidos puede generar resultados sostenibles si no responde a un marco estratégico previamente definido. En el ámbito del mercadeo y las ventas, el plan estratégico organizacional actúa como la hoja de ruta que determina hacia dónde se dirige la empresa, cómo competirá y qué posición desea ocupar en la mente del consumidor.
 
    p Cuando una empresa produce contenido sin alineación estratégica, incurre en dispersión de mensajes, inversión ineficiente y pérdida de coherencia de marca. Por el contrario, cuando el contenido digital se fundamenta en el plan estratégico, se convierte en una herramienta de posicionamiento, generación de valor y apoyo directo a los objetivos comerciales. La planeación del contenido, por tanto, no inicia en la creatividad, sino en la estrategia corporativa.

    Separador
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Concepto

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema1/2.png", alt="")
      .col-lg-8
        p El plan estratégico organizacional puede definirse como el conjunto estructurado de decisiones que determinan el propósito, los objetivos de largo plazo y las estrategias necesarias para alcanzar ventajas competitivas sostenibles. Según Fred R. David (2017), la planeación estratégica implica formular, implementar y evaluar decisiones interfuncionales que permiten a la organización alcanzar sus metas.
        .cajon.color-acento-contenido.p-4
          p.mb-0 Desde la perspectiva del #[em marketing], autores como Philip Kotler y Kevin Lane Keller (2016) sostienen que la estrategia corporativa orienta las decisiones de mercado, segmentación, posicionamiento y mezcla de mercadeo. En consecuencia, el contenido digital debe derivarse de dichas decisiones y no operar como un elemento aislado.
    
    .p-4.rounded-4.bg-primario-p5
      p.mb-0 Por ejemplo, si una empresa define como objetivo estratégico posicionarse como líder en innovación tecnológica, su contenido en redes sociales deberá comunicar avances, demostraciones de producto, casos de uso y liderazgo intelectual. En contraste, si la estrategia organizacional se orienta hacia precios competitivos y alta rotación, el contenido priorizará promociones, ofertas temporales y llamados directos a la acción. En ambos casos, la narrativa digital responde a una decisión estratégica previa.

    Separador
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Componentes

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-lg-8
        p.mb-4.mb-lg-0 El plan estratégico organizacional está compuesto por elementos que orientan la toma de decisiones en todas las áreas funcionales, incluyendo el marketing digital. Estos componentes permiten traducir la visión corporativa en acciones concretas y medibles. La siguiente tabla presenta los principales componentes del plan estratégico organizacional y su incidencia directa en la planeación del contenido digital, evidenciando cómo la estrategia empresarial se traduce en decisiones comunicacionales estructuradas.
      .col-sm-8.col-lg-4
        figure
          img(data-aos="fade-down-right", src="@/assets/curso/tema1/3.png", alt="")

    .row.justify-content-center.mb-4.mb-lg-5
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 1.
          span Componentes del plan estratégico organizacional y su incidencia en la planeación del contenido digital
        .tabla-a.color-secundario
          table
            caption Nota. Adaptada David (2017) y Kotler & Keller (2016).
            thead
              tr(style="background-color: #F1B6FC")
                th Componente
                th Descripción
                th Incidencia en el contenido digital
            tbody
              tr
                td Misión
                td Define la razón de ser de la organización.
                td Determina el propósito central del mensaje comunicacional.
              tr(style="background-color: #F6F6F6")
                td Visión
                td Expresa la proyección futura deseada.
                td Orienta el posicionamiento aspiracional en redes sociales.
              tr
                td Objetivos estratégicos.
                td Resultados generales que la empresa espera alcanzar.
                td Se traducen en objetivos de alcance, interacción o conversión.
              tr(style="background-color: #F6F6F6")
                td Metas.
                td Resultados cuantificables en tiempo determinado.
                td Permiten establecer indicadores digitales (KPI).
              tr
                td Análisis interno y externo.
                td Diagnóstico de capacidades, entorno y competencia.
                td Identifica oportunidades temáticas y riesgos reputacionales.
              tr(style="background-color: #F6F6F6")
                td Propuesta de valor.
                td Elemento diferenciador frente al mercado.
                td Define los mensajes clave y la narrativa de marca.

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/4.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Cada componente impacta directamente la creación de contenido. Por ejemplo, cuando el análisis externo identifica una tendencia creciente hacia el consumo sostenible, la organización puede incorporar contenido educativo sobre responsabilidad ambiental, fortaleciendo su reputación y conectando con segmentos conscientes. De igual manera, si el diagnóstico interno revela debilidad en reconocimiento de marca, la estrategia digital puede orientarse inicialmente hacia contenido de posicionamiento y recordación antes que a campañas de venta directa.
        
    Separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Estructura

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
