//Operadores de Js

//Operadores de asignación
// = Asignación
let saldo = 1000;
saldo += 500; // Equivale a saldo = saldo + 500
saldo -= 200; // Equivale a saldo = saldo - 200
saldo *= 2;   // Equivale a saldo = saldo * 2
saldo /= 4;   // Equivale a saldo = saldo / 4
saldo %= 3;   // Equivale a saldo = saldo % 3
console.log(saldo); // Imprime 1  

//Operadores aritméticos
// + Suma, - Resta, * Multiplicación, / División, % Módulo
const suma = 5 + 3;    // Suma, resultado: 8
const resta = 10 - 4;  // Resta, resultado: 6
const multiplicacion = 2 * 3; // Multiplicación, resultado: 6
const division = 10 / 2;  // División, resultado: 5
const modulo = 7 % 2;     // Módulo, resultado: 1
let contador = 0;
contador++;               // Incremento, contador ahora es 1
contador--;               // Decremento, contador vuelve a ser 0
console.log(contador);    // Imprime 0



//Operadores de comparación
// == Igualdad, === Igualdad estricta, != Diferente, !== Diferente estricto
// > Mayor que, < Menor que, >= Mayor
// que o igual, <= Menor que o igual
const numero1 = 10;
const numero2 = 20;
const numero3 = 10;
console.log(numero1 == numero2); // Imprime false
console.log(numero1 == numero3); // Imprime true
console.log(numero1 === numero3); // Imprime true
console.log(numero1 === numero2); // Imprime false
console.log(numero1 != numero2); // Imprime true
console.log(numero1 !== numero3); // Imprime false
console.log(numero1 > numero2); // Imprime false
console.log(numero1 < numero2); // Imprime true
console.log(numero1 >= numero3); // Imprime true
console.log(numero1 <= numero3); // Imprime true


//Operadoes de Comparación
// && AND, || OR, ! NOT
const edad = 20;
const nombre = "Juan";
const esMayor = edad >= 18;
const esJuan = nombre === "Juan";
console.log(esMayor && esJuan); // Imprime true
console.log(esMayor || esJuan); // Imprime true
console.log(!esMayor); // Imprime false
console.log(!esJuan); // Imprime false

//Operador de Comparación Ternario
// ? : Operador ternario
const resultado = edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
console.log(resultado); // Imprime "Es mayor de edad"

/**
 Conclusión
    Los operadores en JavaScript son herramientas fundamentales que te 
    permiten realizar una amplia gama de operaciones, desde asignaciones simples 
    hasta complejas comparaciones lógicas. Aunque existen más operadores 
    para casos más específicos, los que hemos explorado en esta 
    clase son los básicos y fundamentales. Dominar estos operadores 
    te permitirá escribir gran parte de la lógica de tus programas, 
    tanto ahora como en el futuro de tu carrera como dev.
 */