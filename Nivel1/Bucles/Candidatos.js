/**
 * Candidatos
    - El objetivo de este ejercicio es usar un for...in para recorrer un array de usuarios y chequear si 
    - cumplen con los requisitos de un aviso laboral o no.

 */

//Codigo Base

const usuarios = [
    { nombre: "Juan", habilidades: ["javascript", "react"] },
    { nombre: "María", habilidades: ["typescript", "react", "next.js"] },
    { nombre: "Lucas", habilidades: [] },
    { nombre: "Ana", habilidades: ["inglés", "javascript"] },
    { nombre: "Sofía", habilidades: ["typescript", "react"] },
    { nombre: "Martín", habilidades: ["react", "next.js"] },
    { nombre: "Julián", habilidades: ["javascript", "typescript"] },
    { nombre: "Lucía", habilidades: ["inglés", "react"] },
    { nombre: "Ezequiel", habilidades: ["typescript", "react"] },
  ];
  
  const aviso = {
    compania: "TechFlow",
    texto:
      "Buscamos desarrolladores para unirse a nuestra startup de tecnología innovadora.",
    requisitos: ["typescript", "react"],
  };
  
  const candidatos = [];
  let indiceCandidatos = 0;
  
  // Lógica para encontrar candidatos
for (const index in usuarios) {
  const usuario = usuarios[index];

  // inicializamos esto en true porque es más fácil
  let cumpleTodosLosRequisitos = true;

  for (const requisito of aviso.requisitos) {
    // fijate si este requisito se encuentra en el array de habilidades
    let cumpleRequisito = false;

    // Verificamos si el requisito está en las habilidades del usuario
    if (usuario.habilidades.includes(requisito)) {
      cumpleRequisito = true;
    }

    // Si no cumple con un requisito, cambiamos a false
    if (!cumpleRequisito) {
      cumpleTodosLosRequisitos = false;
      break; // Salimos del bucle si no cumple
    }
  }

  // Si cumple con todos los requisitos, lo agregamos a candidatos
  if (cumpleTodosLosRequisitos) {
    candidatos[indiceCandidatos] = usuario; // Agregamos el usuario al array de candidatos
    indiceCandidatos++; // Incrementamos el índice para el próximo candidato
  }
}

  
  console.log(candidatos);