// Importamos librerías necesarias (si es necesario)
// const fs = require('fs'); // Ejemplo de importación de una librería

// Declaración de variables
const PI = Math.PI; // Constante para el valor de PI

// Función para calcular el área de un círculo
function calcularAreaCirculo(radio) {
  // Verificamos que el radio sea positivo
  if (radio <= 0) {
    throw new Error('El radio debe ser mayor a cero');
  }

  // Calculamos el área
  const area = PI * Math.pow(radio, 2); // Área = π * radio^2
  return area; // Devolvemos el resultado
}

// Función principal
function main() {
  const radio = 5; // Radio del círculo
  try {
    const resultado = calcularAreaCirculo(radio); // Llamada a la función
    console.log(`El área del círculo es: ${resultado}`); // Mostramos el resultado
  } catch (error) {
    console.error(error.message); // Mostramos el error si ocurre
  }
}

// Ejecutamos la función principal
main();


/**
    * Tips para formatear un código:
    * 1. Utilizar sangrías para identar el código.
    * ejemplo:
    * function main() {
    *  const radio = 5; // Radio del círculo
    * try {
    * const resultado = calcularAreaCirculo(radio); // Llamada a la función
    * console.log(`El área del círculo es: ${resultado}`); // Mostramos el resultado
    * } catch (error) {
    * console.error(error.message); // Mostramos el error si ocurre
    * }
    * 2. Utilizar comentarios para explicar el código.
    * ejemplo:
    * // Función para calcular el área de un círculo
    * function calcularAreaCirculo(radio) {
    * // Verificamos que el radio sea positivo
    * if (radio <= 0) {
    * throw new Error('El radio debe ser mayor a cero');
    * }
    * // Calculamos el área
    * const area = PI * Math.pow(radio, 2); // Área = π * radio^2
    * return area; // Devolvemos el resultado
    * } 
    * 3. Utilizar nombres descriptivos para las variables y funciones.
    * ejemplo:
    * const PI = Math.PI; // Constante para el valor de PI
    * function main() {
    * const radio = 5; // Radio del círculo
    * try {
    * const resultado = calcularAreaCirculo(radio); // Llamada a la función
    * console.log(`El área del círculo es: ${resultado}`); // Mostramos el resultado
    * } catch (error) {
    * console.error(error.message); // Mostramos el error si ocurre
    * }
    * }
    * 
    * 4. Separar el código en funciones para facilitar la lectura.
    * 5. Utilizar constantes para valores que no cambian.
    * 6. Manejar errores con try-catch para evitar que el programa falle.
    * 7. Utilizar mensajes de error claros y descriptivos.
    * 8. Utilizar mensajes de log para mostrar información relevante.
    * 9. Evitar el uso de variables globales.
    * 10. Utilizar funciones puras para facilitar el testing
    * 11. Utilizar funciones de flecha para simplificar la sintaxis.
    * 12. Utilizar funciones de alto orden para reutilizar código.
    * 13. Utilizar destructuring para acceder a propiedades de objetos.
    * 14. Utilizar template strings para concatenar strings.
    * 15. Utilizar operadores ternarios para simplificar condicionales.
    * 16. Utilizar el modo estricto para evitar errores comunes.
    * 17. Utilizar módulos para organizar el código en archivos separados.
    * 18. Utilizar imports y exports para compartir código entre módulos.
 */