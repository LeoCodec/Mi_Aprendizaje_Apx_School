/*
 *  Detené el while
    *El while de este ejemplo no se detiene, es un bucle infinito.
    *Modificá este while para que el counter se modifique en cada ejecución del while 
    *y que se ejecute solo 50 veces. Al finalizar mostrá un mensaje usando: 
    console.log() que diga "Terminó"
 */

//Codigo Base:

let counter = 0; // Cambié const por let para poder modificar el valor de counter

while(counter < 50){
  console.log(counter);
  counter++; // Incrementa el valor de counter en cada iteración
}

console.log("Terminó"); // Mensaje al finalizar