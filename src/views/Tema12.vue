<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 12
      h1 SEM (#[em Search Engine Marketing])

    img(data-aos="fade-up")(src="@/assets/curso/tema12/1.png", alt="").z-2
    
    .row.justify-content-center.z-2
      .col-lg-10.p-4.drop-shadow(data-aos="fade-down")
        div.banner-text
          p.mb-0 El SEM es una estrategia fundamental dentro del #[em marketing] digital orientada a aumentar la visibilidad de una marca en los motores de búsqueda mediante publicidad pagada. A diferencia del posicionamiento orgánico, el SEM permite obtener resultados inmediatos al ubicar anuncios en los primeros lugares de las páginas de resultados. Su efectividad depende de la correcta selección de palabras clave, la segmentación y la optimización constante de las campañas.

    Separador
    #t_12_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 12.1 Concepto
    
    .row.justify-content-center.align-items-center.mb-4.z-2
      .col-sm-8.col-lg-4  
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema12/2.png", alt="")
      .col-lg-8
        p El #[em Search Engine Marketing] (SEM) es el conjunto de estrategias de #[em marketing] digital que utilizan anuncios pagos en motores de búsqueda para atraer tráfico cualificado hacia un sitio web. Generalmente opera bajo modelos de pago por clic (CPC), donde el anunciante paga únicamente cuando el usuario hace clic en el anuncio.
        .p-4.bg-terciario-t20.rounded-4
          p.mb-0 La plataforma más utilizada para este tipo de estrategias es Google Ads, que permite posicionar anuncios en el buscador Google según palabras clave específicas. También existen opciones como Microsoft Advertising, vinculada al buscador Bing.
    
    .row.justify-content-center.z-2
      .col-xl-10
        .p-4.rounded-4.bg-secundario-s5
          p.mb-0 Por ejemplo, cuando un usuario busca “comprar tenis deportivos”, marcas como Nike o Adidas pueden aparecer en los primeros resultados mediante anuncios patrocinados.
      
    Separador
    #t_12_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 12.2 Estrategias
    
    p.mb-4.mb-lg-5 Las estrategias de SEM permiten estructurar la inversión publicitaria en motores de búsqueda de manera eficiente y orientada a resultados. A continuación, se presentan las principales acciones estratégicas utilizadas para maximizar visibilidad, tráfico cualificado y conversión.

    .row.justify-content-center.z-2
      .col-xl-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 9.
          span Estrategias de SEM y su enfoque estratégico
        .tabla-a.color-secundario
          table
            caption Nota. SENA, (2026).
            thead
              tr(style="background-color: #F1B6FC")
                th Estrategia
                th Descripción
                th Ejemplo empresarial
            tbody
              tr
                td Selección estratégica de palabras clave.
                td Identificación de términos de búsqueda relevantes con intención de compra.
                td Amazon invierte en #[em keywords] relacionadas con productos de alta demanda.
              tr(style="background-color: #F6F6F6")
                td Segmentación geográfica y demográfica.
                td Definición de públicos según ubicación, edad o intereses.
                td Rappi segmenta campañas según ciudades específicas.
              tr
                td Optimización de anuncios y #[em landing pages].
                td Mejora de textos, llamados a la acción y páginas de destino para aumentar conversiones.
                td Airbnb ajusta anuncios según temporadas y tendencias.
              tr(style="background-color: #F6F6F6")
                td Estrategias de puja (#[em bidding]).
                td Definición del valor máximo a pagar por clic para optimizar posicionamiento y presupuesto.
                td Empresas ajustan pujas en Google Ads según competencia y demanda.
              tr
                td Análisis y mejora continua.
                td Monitoreo de métricas como CTR, CPC y conversiones para optimizar campañas.
                td Booking.com ajusta campañas en tiempo real según desempeño.

    Separador
    #t_12_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 12.3 Aplicabilidad

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5.z-2
      .col-sm-8.col-lg-4
        figure
          img.mb-4.mb-lg-0(data-aos="fade-down-right", src="@/assets/curso/tema12/3.png", alt="")
      .col-lg-8
        p El SEM se aplica estratégicamente cuando la empresa busca resultados inmediatos, lanzamiento de productos, captación de clientes potenciales o incremento rápido de ventas. Es especialmente útil en mercados altamente competitivos donde el posicionamiento orgánico puede tardar más tiempo en consolidarse.
        .py-3.px-4.bg-terciario-t20.rounded-4.mb-3
          p.mb-0 Por ejemplo, Falabella utiliza SEM en temporadas de descuentos para captar compradores con intención inmediata. Booking.com invierte fuertemente en anuncios de búsqueda para aparecer cuando los usuarios buscan hoteles en destinos específicos.
        p.mb-0 La aplicabilidad del SEM radica en su capacidad de generar tráfico cualificado, medible y orientado a la conversión, siempre que exista una planificación adecuada y optimización constante.
      

</template>

<script>
export default {
  name: 'Tema12',
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
