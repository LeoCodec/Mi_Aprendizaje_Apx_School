/**
 * Dominar el uso de operadores requiere mucha práctica resolviendo 
 * problemas más complejos que veremos más adelante. Por ahora practiquemos 
 * nuestra comprensión sobre estos operadores. 
 * En el siguiente código base vas a ver una serie de operaciones y debajo, 
 * en un comentario, un espacio para escribir cual es tu predicción 
 * sobre el resultado de esa linea de código.
 */

//Copiá el código en tu compu y completá todas las predicciones. 
// Cuando termines chequealas con Lisa.

// Valores iniciales

const base = 9; 
// creamos la constante base y la inicializamos en 9
let multiplicador = 3; 
// declaramos la variable multiplicador y la inicializamos en 3
const texto = "JavaScript"; 
// creamos la constante texto y la inicializamos con "JavaScript"
const booleano = true; 
// creamos la constante booleano y la inicializamos en true
const modulo = 5; 
// creamos la constante modulo y la inicializamos en 5
let acumulador = 5; 
// declaramos la variable acumulador y la inicializamos en 5

// ------------------------------------
// Operaciones

const suma = base + multiplicador; 
// creamos la constante suma que es la suma de base y multiplicador
// Predicción: suma va a ser 12 

const resta = base + suma - acumulador; 
// creamos la constante resta que es la suma de base y suma menos acumulador
// Predicción:
// resta va a ser 18 (base es 9 + suma que es 12 - 3 )

// De acá en más, escribí tu predicción debajo
// de cada operación y compartí todas tus predicciones 
// con Lisa. Intenta hacerlo mentalmente para
// practicar tu lectura de código.

let frase = texto 
// declaramos la variable frase y le asignamos el valor de texto
frase += " " + "es genial"; 
// concatenamos " es genial" a la variable frase
// frase va a ser JavaScript es genial
console.log(frase)

const negacion = !booleano; 
// creamos la constante negacion que es la negación de booleano
// negación va a valer false
console.log(negacion)

const dobleNegacion = !!negacion; 
// creamos la constante dobleNegacion que es la doble negación de negacion
// dobleNegacion va a valer true
console.log(dobleNegacion)

multiplicador *= 3; 
// multiplicamos multiplicador por 3 y actualizamos su valor
// multiplicador va a ser 9
console.log(multiplicador)

const division = base * 10 / multiplicador; 
// creamos la constante division que es el resultado de base por 10 dividido por multiplicador
// division va a ser 10
console.log(division)

const residuo = base % modulo; 
// creamos la constante residuo que es el resto de la división de base entre modulo
// residuo va a ser 4
console.log(residuo)

const esPar = multiplicador % 2 === 0; 
// creamos la constante esPar que verifica si multiplicador es par
// esPar va a ser true
console.log(esPar)

const comparacion = acumulador == "5"; 
// creamos la constante comparacion que verifica si acumulador es igual a "5" (comparación no estricta)
// comparacion va a ser true
console.log(comparacion)

const comparacionEstricta = acumulador === "5"; 
// creamos la constante comparacionEstricta que verifica si acumulador es estrictamente igual a "5"
// comparacionEstricta va a ser false
console.log(comparacionEstricta)

acumulador += base; 
// sumamos base a acumulador y actualizamos su valor
// acumulador va a ser 14
console.log(acumulador)

const mayor = acumulador > base; 
// creamos la constante mayor que verifica si acumulador es mayor que base
// mayor va a ser true
console.log(mayor)

const menorOigual = multiplicador <= 30; 
// creamos la constante menorOigual que verifica si multiplicador es menor o igual a 30
// menorOigual va a ser true
console.log(menorOigual)

const operadorOR = booleano || false; 
// creamos la constante operadorOR que evalúa la operación OR entre booleano y false
// operadorOR va a ser true
console.log(operadorOR)

const operadorAND = booleano && (base > 5); 
// creamos la constante operadorAND que evalúa la operación AND entre booleano y la comparación de base con 5
// operadorAND va a ser true
console.log(operadorAND)

const combinado = (base * multiplicador) - modulo; 
// creamos la constante combinado que es el resultado de base multiplicado por multiplicador menos modulo
// combinado va a ser 22
console.log(combinado)

