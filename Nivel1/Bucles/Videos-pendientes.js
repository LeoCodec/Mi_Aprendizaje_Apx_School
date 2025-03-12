/**
 * Videos pendientes
    *En este ejercicio vamos a recorrer una collection (array de objetos) de videos del canal de apx 
    *para saber que videos todavía no vimos. Para esto contamos un objeto vistosById que en este caso 
    *está usado como un mapa o índice, que es una forma de organizar los datos en forma de "diccionario" 
    *para acceder rápidamente a un dato sin necesidad de iterar otro array. Si querés profundizar en este 
    *concepto hacelo pero no es necesario por ahora, solo estamos sumando una variante a este ejercicio.
 */

    const videos = [
        {
          title:
            "Usando webhooks para recibir la confirmación de un pago - Pagos online -  Parte 3/4",
          url: "https://www.youtube.com/watch?v=NK4CbPxzZQU",
          id: "yt-video-NK4CbPxzZQU",
        },
        {
          title: "Pensando objetivos del año con OKRs",
          url: "https://www.youtube.com/watch?v=4S1jDNY08Q8",
          id: "yt-video-4S1jDNY08Q8",
        },
        {
          title:
            "Generando un link de pago con la API de Mercado Pago - Pagos online -  Parte 2/4",
          url: "https://www.youtube.com/watch?v=yIRWzNIacJc",
          id: "yt-video-yIRWzNIacJc",
        },
        {
          title: "Pagos online - Introducción - Parte 1/4",
          url: "https://www.youtube.com/watch?v=LttJdPtXmw4",
          id: "yt-video-LttJdPtXmw4",
        },
        {
          title: "Usando AI para programar profesionalmente",
          url: "https://www.youtube.com/watch?v=ZjwMQkherN4",
          id: "yt-video-ZjwMQkherN4",
        },
        {
          title: "Mi primera línea de código",
          url: "https://www.youtube.com/watch?v=IC4c_XOCDGw",
          id: "yt-video-IC4c_XOCDGw",
        },
        {
          title: "¿Por qué uso mac?",
          url: "https://www.youtube.com/watch?v=iQeMY2Qj80U",
          id: "yt-video-iQeMY2Qj80U",
        },
        {
          title: "Plan de estudios",
          url: "https://www.youtube.com/watch?v=4sC-Cf_eDHo",
          id: "yt-video-4sC-Cf_eDHo",
        },
        {
          title: "Operar con valores en JavaScript",
          url: "https://www.youtube.com/watch?v=7my5WwSnWiI",
          id: "yt-video-7my5WwSnWiI",
        },
        {
          title: "Datos de entrada",
          url: "https://www.youtube.com/watch?v=9_0-UXCx28U",
          id: "yt-video-9_0-UXCx28U",
        },
        {
          title: "Una lista ordenada de datos",
          url: "https://www.youtube.com/watch?v=Ac7_qK6OJEs",
          id: "yt-video-Ac7_qK6OJEs",
        },
        {
          title: "En JavaScript, casi todo es un objeto",
          url: "https://www.youtube.com/watch?v=u0f8VY7-Mpw",
          id: "yt-video-u0f8VY7-Mpw",
        },
        {
          title: "Null vs Undefined - Primitivos en JavaScript",
          url: "https://www.youtube.com/watch?v=FoDnWun0gPI",
          id: "yt-video-FoDnWun0gPI",
        },
        {
          title: "¿Qué es un string?",
          url: "https://www.youtube.com/watch?v=lC9YaFXSAg0",
          id: "yt-video-lC9YaFXSAg0",
        },
        {
          title: "Programar es manipular datos",
          url: "https://www.youtube.com/watch?v=djaNQA0ypXQ",
          id: "yt-video-djaNQA0ypXQ",
        },
      ];
      
      const vistosById = {
        "yt-video-NK4CbPxzZQU": true,
        "yt-video-4S1jDNY08Q8": true,
        "yt-video-LttJdPtXmw4": true,
        "yt-video-ZjwMQkherN4": true,
        "yt-video-IC4c_XOCDGw": true
      };
      
      for (const v of videos) {
        // En base al objeto vistosById y a un if, 
        // mostra los videos que todavía no vimos
      
        if(!vistosById[v.id]){
          console.log(v.title)
        }
      }    