//Transformando textos

/**
 * Crear la función transformarFrase.
 * Crear una copia del array frase con la primera letra de cada palabra en mayúscula utilizando el método map.
 * En cada iteración de map, convertir la primera letra de la palabra a mayúscula y concatenarla con el resto de la palabra 
 * en minúscula utilizando los métodos charAt y slice. Devolver cada palabra con la primera letra en mayúscula.
 * 
 * Unir las palabras de fraseMayuscula en una sola cadena de texto, separadas por un espacio, utilizando el método join
 * 
 * Devolver la variable oracion desde la función.
 * 
 * Por último, se puede invocar la función transformarFrase con el array frase como argumento para obtener la oración con las palabras en mayúscula.
 */

function transformarFrase(frase) {
    // Crear una copia del array frase
    const arrayDePalabras = frase;
    
    // Convertir la primera letra de cada palabra a mayúscula
    const fraseMayuscula = arrayDePalabras.map((palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    
    // Unir las palabras en una sola cadena de texto
    const oracion = fraseMayuscula.join(' ');
    
    return oracion;
}
  
function main() {
    const frase = ['La', 'vida', 'es', 'como', 'una', 'caja', 'de', 'chocolates'];
    const oracionMayuscula = transformarFrase(frase);
    console.log(oracionMayuscula); // 'La Vida Es Como Una Caja De Chocolates'
}
  
main();