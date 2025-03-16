//Tranformá esta función a una arrow function

//Reescribe esta función en formato arrow function

const obtenerNumerosPares = (numeros) => {
    const numerosPares = [];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        numerosPares.push(numeros[i]);
      }
    }
    return numerosPares;
};