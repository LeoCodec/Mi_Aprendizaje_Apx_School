//Desafio 

/**
 * Escribe una función llamada filterByLength que tome dos parámetros: un array de strings y un número n. 
 * La función debe devolver un nuevo array que contenga solo las cadenas que tienen una longitud mayor o igual a n. 
 * Debe usar arrow functions para lograr esto.
 */

// Definición de la función filterByLength
const filterByLength = (arr, n) => arr.filter(str => str.length >= n);

// Ejemplo de uso
const arr = ["hola", "adios", "bienvenido", "chau"];
console.log(filterByLength(arr, 5)); // debería imprimir ["adios", "bienvenido"]
