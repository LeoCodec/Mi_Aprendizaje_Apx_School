//En base a este código:

let variableSinValor;
const primerTipo = typeof variableSinValor;

variableSinValor = null;
const segundoTipo = typeof variableSinValor;

console.log(primerTipo, segundoTipo);

//Contestando a las siguientes preguntas:
//Que valor tienen primerTipo y segundoTipo ¿Por qué?
//respuesta: primerTipo es undefined porque la variable no tiene valor asignado, segundoTipo es object porque null es un valor especial que indica la ausencia de valor.
