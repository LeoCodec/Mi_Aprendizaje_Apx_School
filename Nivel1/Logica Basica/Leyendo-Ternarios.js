/*
    Leyendo Ternarios
    
    *Declara las siguientes constantes relacionadas con una computadora:
    *ram (número): La cantidad de RAM en gigabytes.
    *almacenamiento (número): La capacidad de almacenamiento en gigas.
    *nucleosCPU (número): El número de núcleos de la CPU.
    *velocidadCPU (número): La velocidad de la CPU en gigahercios (GHz).
    *precio (número): El precio de la computadora.
*/

const ram = 16;
const almacenamiento = 512;
const nucleosCPU = 8;
const velocidadCPU = 2.9;
const precio = 1500;

const esPotente = ram >= 16 && almacenamiento >= 512 && nucleosCPU >= 8 && velocidadCPU >= 2.9;
const capacidad = almacenamiento > 1 ? "alta" : "baja";
const esCara = precio > 1000 ? "cara" : "económica";
const velocidad = velocidadCPU > 3.5 ? "alta" : "moderada";

console.log(`¿Es una computadora potente? ${esPotente ? "Sí" : "No"}`);
console.log(`¿Es una computadora cara? ${esCara === "cara" ? "Sí" : "No"}`);
console.log(`¿Tiene una alta capacidad de almacenamiento? ${capacidad === "alta" ? "Sí" : "No"}`);
console.log(`¿Tiene una alta velocidad de CPU? ${velocidad === "alta" ? "Sí" : "No"}`);

// Redactando una mejor descripción:
const descripcion = `Esta computadora ${esPotente ? "es potente" : "no es potente"}, 
tiene un precio ${esCara}, 
una capacidad de almacenamiento ${capacidad} 
y una velocidad de CPU ${velocidad}.`;

console.log(descripcion);
