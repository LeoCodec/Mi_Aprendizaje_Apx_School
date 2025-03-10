/*
 *  Datos del mes
    *  --------------------------------
    *  En este ejercicio vamos a construir una pequeña app que nos muestre la 
    * información importante de un mes en particular.
    * 
    * Para esto, nuestra app tiene que recibir el número del mes como argumento y 
    * mostrarnos información sobre ese mes.

*/

//Codigo Base: 

const numeroDeMes = process.argv[2];

/* 
 El siguiente array contiene la data de cada mes
*/

const informacionMensual = [
    {
      nombreDelMes: "Enero",
      cantidadDeDias: 31,
      eventoDelMes: "Año Nuevo",
    },
    {
      nombreDelMes: "Febrero",
      cantidadDeDias: 28,
      eventoDelMes: "Día de San Valentín",
    },
    {
      nombreDelMes: "Marzo",
      cantidadDeDias: 31,
      eventoDelMes: "Día del Padre",
    },
    {
      nombreDelMes: "Abril",
      cantidadDeDias: 30,
      eventoDelMes: "Día de la Tierra",
    },
    {
      nombreDelMes: "Mayo",
      cantidadDeDias: 31,
      eventoDelMes: "Día del Trabajo",
    },
    {
      nombreDelMes: "Junio",
      cantidadDeDias: 30,
      eventoDelMes: "Día del Medio Ambiente",
    },
    {
      nombreDelMes: "Julio",
      cantidadDeDias: 31,
      eventoDelMes: "Memes de Julio",
    },
    {
      nombreDelMes: "Agosto",
      cantidadDeDias: 31,
      eventoDelMes: "Día de la Mujer",
    },
    {
      nombreDelMes: "Septiembre",
      cantidadDeDias: 30,
      eventoDelMes: "Día de la Primavera",
    },
    {
      nombreDelMes: "Octubre",
      cantidadDeDias: 31,
      eventoDelMes: "Halloween",
    },
    {
      nombreDelMes: "Noviembre",
      cantidadDeDias: 30,
      eventoDelMes: "Día de Acción de Gracias",
    },
    {
      nombreDelMes: "Diciembre",
      cantidadDeDias: 31,
      eventoDelMes: "Navidad",
    },
  ];

// Recordá que el array comienza en 0
// el mes 1 (enero) corresponde a la posición 0 del array
// el mes 2 (febrero) corresponde a la posición 1 del array
const posicionEnElArray = numeroDeMes - 1; //Ajustamos la posición

const infoDelMes = informacionMensual[posicionEnElArray];


console.log("Numero de mes:", numeroDeMes);
console.log("Nombre del mes:", infoDelMes.nombreDelMes);
// -> Descomentá las siguientes lineas y finaliza tu programa
// console.log("Cantidad de días:" /* tu código */);
// console.log("Evento del mes:" /* tu código */);
