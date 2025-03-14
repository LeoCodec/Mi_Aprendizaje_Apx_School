/**
 * Mazo de cartas
    El objetivo de este ejercicio es crear un array que represente al mazo de cartas de poker. 
    Para eso tendrás dos arrays base (palos y valores) y combinando dos for vas a generar un array final de 52 posiciones 
    con todas las cartas. Al final deberías ver lo siguiente en la terminal.
 */

//Codigo Base
const palos = ["♥️", "♦️", "♣️", "♠️"];
const valores = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const mazo = [];
let indiceGeneral = 0;

for (let i = 0; i < palos.length; i++) {
  const palo = palos[i];

  // Acá tenés que usar otro for para recorrer
  // los valores y generar cada carta

  for (let j = 0; j < valores.length; j++) {
    const valor = valores[j];
    mazo[indiceGeneral] = `${valor}${palo}`;
    indiceGeneral++;
  }
}

console.log(mazo);
