//Partes de una función

//1. Nombre de la función
//2. Parámetros
//3. Cuerpo de la función
//4. Valor de retorno

//Ejemplo:

function suma(a, b) {
    return a + b;
}

//1. Nombre de la función: suma
//2. Parámetros: a, b
//3. Cuerpo de la función: return a + b;
//4. Valor de retorno: a + b

//Ejecutar la función
console.log(suma(1, 2)); // 3

//Ejecutar la función con diferentes valores
console.log(suma(10, 20)); // 30

//Ejecutar la función con diferentes valores
console.log(suma(10, 20)); // 30

//Ejecutar la función con diferentes valores
console.log(suma(10, 20)); // 30


//Ejemplo de Apx School

function convertirCelsiusAFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  
  const temperaturaEnCelsius = 20;
  const temperaturaEnFahrenheit = convertirCelsiusAFahrenheit(temperaturaEnCelsius);
  console.log(temperaturaEnFahrenheit); // Imprime 68

/*
    * La palabra clave function indica que estamos definiendo una función. Después de la palabra clave function, escribimos el nombre de la 
    *función, convertirCelsiusAFahrenheit, seguido de paréntesis que contienen los argumentos que la función toma, en este caso celsius.
    *Dentro de las llaves {} de la función, definimos el código que la función ejecutará cuando se llame. En este caso, estamos declarando una variable llamada fahrenheit y asignándole el resultado de la fórmula de conversión. Luego, devolvemos fahrenheit utilizando la palabra clave return.
    *Al llamar la función, pasamos un valor de temperatura en Celsius como argumento, almacenamos el resultado devuelto en una variable llamada temperaturaEnFahrenheit y lo imprimimos en la consola.
 */

/**
 * Las funciones se utilizan para crear bloques de código reutilizable que pueden tomar argumentos y devolver valores. 
 * Una vez que se ha definido una función, se puede llamar varias veces con diferentes argumentos para realizar la misma tarea. 
 * Esto hace que el código sea más legible, más fácil de mantener y reduce la cantidad de código que necesita ser escrito y mantenido. 
 * En resumen, las funciones son una herramienta muy poderosa para crear código limpio, modular y eficiente en JavaScript.
 */