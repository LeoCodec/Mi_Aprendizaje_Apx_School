/*
 *  Inspector de objetos
    *  --------------------------------
    *   El objetivo de este ejercicio es crear una pequeña aplicación que nos 
    *   permita examinar un dato específico sobre una película.
    * 
    *   Vamos a enviar el nombre del dato que queremos obtener en forma de argumento 
    *   desde la terminal.
    *   
    *   En este caso la información de la película será la de Jurassic Park.
    *   O sea que, si ejecuto el programa con el argumento "director", debería 
    *   recibir como respuesta: "Steven Spielberg".
    * 
    *   > node peli.js "director"
        Steven Spielberg
 */

    const peli = {
        titulo: "Jurassic Park",
        sinopsis:
        "Un multimillonario construye un parque temático con dinosaurios clonados, pero todo sale mal cuando los dinosaurios escapan y aterrorizan a los visitantes.",
        añoEstreno: 1993,
        director: "Steven Spielberg",
        duracionMinutos: 127,
        calificacionIMDb: 8.1,
    };
    
    // process.argv[2] es el argumento enviado desde la terminal
    const propiedadSeleccionada = process.argv[2];
    console.log(propiedadSeleccionada);
    
    /* 
        hasta acá tenes un objeto con los datos 
        de la película y un dato con el nombre
        de la propiedad a mostrar. 
    
        Recordá que para obtener una propiedad de un objeto
        utilizando un string, debes usar la sintaxis
    */
    
    // [tu código]
    // Aquí mostramos el valor de la propiedad seleccionada
    console.log(peli[propiedadSeleccionada]);


    //Caso para pedir la pelicula:
    //>node peli.js "titulo" //Jurassic Park

    //Caso para pedir el director:
    //>node peli.js "director" //Steven
    
    //Caso para pedir la sinopsis:
    //>node peli.js "sinopsis" //Un multimillonario construye un parque temático con dinosaurios clonados, pero todo sale mal cuando los dinosaurios escapan y aterror
    
    //Caso para pedir el año de estreno:
    //>node peli.js "añoEstreno" //1993
    
    //Caso para pedir la duracion:
    //>node peli.js "duracionMinutos" //127

    //Caso para pedir la calificacion:
    //>node peli.js "calificacionIMDb" //8.1
