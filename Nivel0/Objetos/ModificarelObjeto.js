// NO modifiques la siguiente lína
const peli = { titulo: "Jurassic Park", estreno: 1994 };

// Ahora vamos a imprimir la película con la data erronea
console.log("Data erronea", peli);

// Modificamos la fecha del objeto
peli.estreno = 1993; // Cambiamos el año de estreno

// Agregamos la propiedad 'director' al objeto 
peli.director = "Steven Spielberg"; // Asignamos el director

// Ahora deberías ver el objeto con la data correcta
console.log("Data correcta", peli);
