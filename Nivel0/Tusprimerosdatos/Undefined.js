let unaVariable;

// guardamos el typeof de unaVariable en otra constante
const tipoDeUnaVariable = typeof unaVariable;
// preguntamos si el typeof de unaVariable es "undefined"
const esUndefined = tipoDeUnaVariable == "undefined"

console.log(unaVariable);
console.log(tipoDeUnaVariable);
console.log(esUndefined);

//Contesta las siguientes preguntas:
//¿Qué veremos en la terminal?
//Vemos los resultados: underfined, "undefined" y true
// ¿Cuales son los valores de unaVariable, tipoDeUnaVariable y esUndefined?
//unaVariable es undefined, tipoDeUnaVariable es "undefined" y esUndefined es true
// ¿Qué tipo de valor es unaVariable?
//undefined
// ¿Qué tipo de valor es tipoDeUnaVariable?
//string    
// ¿Qué tipo de valor es esUndefined?
//boolean
// ¿Qué pasa si cambias el valor de unaVariable a null?
//El resultado de tipoDeUnaVariable sigue siendo "undefined" y esUndefined sigue siendo true
// ¿Qué pasa si cambias el valor de unaVariable a 0?
//El resultado de tipoDeUnaVariable sigue siendo "undefined" y esUndefined sigue siendo true
// ¿Qué pasa si cambias el valor de unaVariable a ""?
//El resultado de tipoDeUnaVariable sigue siendo "undefined" y esUndefined sigue siendo true