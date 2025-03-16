//Solo pares
/**
 * Para este desafío, les proponemos que:
    * Cree una función main() que no reciba ningún parámetro ni tampoco retorne nada, por ahora. Este va a representar al punto de entrada del programa.
    * Declaren un array que contenga, por lo menos, 20 objetos. Cada uno de los objetos debe tener un texto y un número distinto: { texto: "hola", unNumero: 4}
    * Cree otra función que reciba el array de objetos como parámetro y que tenga un nombre acorde a la tarea que hace.
    * Esta función tiene que devolver un nuevo array solo con los objetos que tengan números pares adentro.
    * Es decir: Si la segunda función recibe: [{ t:"a", n:1 }, { t:"b", n:2 }, { t:"c", n:3 }] solo debería devolver: [{ t:"b", n:2 }]
 */

function main() {
    // Declarar un array de objetos
    const arrayObjetos = [
      { texto: "hola", unNumero: 1 },
      { texto: "mundo", unNumero: 2 },
      { texto: "javascript", unNumero: 3 },
      { texto: "python", unNumero: 4 },
      { texto: "java", unNumero: 5 },
      { texto: "c#", unNumero: 6 },
      { texto: "php", unNumero: 7 },
      { texto: "ruby", unNumero: 8 },
      { texto: "kotlin", unNumero: 9 },
      { texto: "swift", unNumero: 10 },
      { texto: "C++", unNumero: 11 },
      { texto: "Go", unNumero: 12 },
      { texto: "Rust", unNumero: 13 },
      { texto: "Typescript", unNumero: 14 },
      { texto: "Assembly", unNumero: 15 },
      { texto: "C", unNumero: 16 },
    ];
  
    // Llamar a la función que filtra los objetos pares
    const resultado = filtrarObjetosPares(arrayObjetos);
  
    // Mostrar el resultado por consola
    console.log(resultado);
}
  
function filtrarObjetosPares(array) {
    const resultado = [];
  
    // Recorrer el array de objetos
    for (let i = 0; i < array.length; i++) {
      const objeto = array[i];
  
      // Verificar si el número dentro del objeto es par
      if (objeto.unNumero % 2 === 0) {
        // Agregar el objeto al array resultado
        resultado.push(objeto);
      }
    }
  
    return resultado;
}

main();