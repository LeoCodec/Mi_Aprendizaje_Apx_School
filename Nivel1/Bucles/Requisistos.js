/**
 * Requisitos
 * El objetivo de este ejercicio es comparar dos arrays usando for...in. En este caso vamos a comparar el array 
 * de requisitos de un aviso y el array que representa las habilidades de un usuario de nuestro sistema.
 * 
 * Copiá el siguiente código base y sumá la lógica para chequear si el usuario cumple o no con todos los requisitos 
 * solicitados. Cuando tengas todo andando modifica el array de requisitos con un requisito que el usuario 
 * no tenga y chequeá tu lógica.
 */

const requisitos = ["javascript", "react"];

const usuario = {
  habilidades: ["javascript", "react", "typescript"],
};

// inicializamos la variable 'cumpleTodos' en true 
// ya que es más facil pasar esta variable a false 
// si encontramos un requisito que no se encuentre 
// en las habilidades del usuario
let cumpleTodos = true;
for (const r in requisitos) {
    const requisito = requisitos[r];
  
    let encontrado = false;
    // Para cada requisito vamos a recorrer todo el array de habilidades
    // del usuario y ver si este usuario tiene esta habilidad
    for (const habilidad of usuario.habilidades) {
      if (habilidad === requisito) {
        encontrado = true;
        break;
      }
    }
  
    if (!encontrado) {
      cumpleTodos = false;
      break; // Si no cumple con un requisito, no hace falta seguir verificando
    }
  }

// Resultado final
if (cumpleTodos) {
  console.log("El usuario cumple con todos los requisitos");
} else {
  console.log("El usuario no cumple con todos los requisitos");
}