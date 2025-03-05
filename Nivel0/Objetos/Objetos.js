// usando solo primitivos tenemos que usar muchos nombres
const tituloJurassicPark = "Parque Jurásico";
const añoEstrenoJurassicPark = 1993;
const duracionMinutosJurassicPark = 127;


const tituloTerminator2 = "Terminator 2: Judgment Day";
const añoEstrenoTerminator2 = 1991;
const duracionMinutosTerminator2 = 137;

console.log(tituloJurassicPark);
console.log(tituloTerminator2);

// usando objetos podemos repetir los nombres dentro de los objetos
const jurassicPark = {
  titulo: "Parque Jurásico",
  estreno: 1993,
  duracionMinutos: 127,
}

const terminator2 = {
  titulo: "Terminator 2: Judgment Day",
  estreno: 1991,
  duracionMinutos: 137,
};

// la propiedad titulo del objeto jurassicPark
console.log(jurassicPark.titulo);

// la propiedad titulo del objeto terminator2
console.log(terminator2.titulo);