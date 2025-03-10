/*
 * Casilla de mensajes
    *El siguiente código evalúa un array de mensajes de una casilla de email 
    *para mostrar un mensaje en la pantalla.
    *Si el usuario no tiene mensajes (o sea que el array está vacío) hay que 
    *mostrar un mensaje que diga "No tenés mensajes".
    *Si el usuario tiene mensajes hay que mostrar un mensaje que diga 
    "Tenés X mensaje(s) nuevos".
    *-Pista-*
    *Para lograr esto tenés que usar dos ternarios. 
    *Uno para definir cual de los dos mensajes mostrar y otro ternario para definir 
    *si la palabra mensaje debe mostrarse en singular o plural (mensajes).
 */

    const inbox = [
        {
          messageId: 1,
          asunto: "Oferta especial",
          preview: "Aprovechá este descuento exclusivo por tiempo limitado..."
        },
        {
          messageId: 2,
          asunto: "Reunión programada",
          preview: "Recordatorio: tenés una reunión mañana a las 10 AM."
        },
        {
          messageId: 3,
          asunto: "Novedades en tu cuenta",
          preview: "Actualizamos nuestras políticas de privacidad. Más detalles..."
        }
      ];
      
      const count = inbox.length;
      
      // El ternario que debés agregar debe devolver
      // "mensaje" si count es == 1
      // y "mensajes" si mayor
      
      
      const message = count === 0 
        ? "No tenés mensajes" 
        : `Tenés ${count} ${count === 1 ? "mensaje" : "mensajes"} en tu casilla`; 
      
      console.log(message);