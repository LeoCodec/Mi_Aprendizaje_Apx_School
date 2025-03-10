//Declará una constante miNombre con el valor enviado desde la terminal

const miNombre = process.argv[2];

const saludo = "Hola " + miNombre + "!";
console.log(saludo);

//Sección de preguntas:

/*  ¿Cuál es el input?
    El input es el nombre que se le pasa como argumento al ejecutar el archivo.
    En mi ejemplo, el input es "Yo". 

    ¿Y el output? Compartí tus conclusiones:
    El output es el saludo que se imprime por consola.
    En mi caso, el output es "Hola Yo!".
    El output es el resultado de concatenar la constante "saludo" 
    con el valor de la constante "miNombre".

*/

//Caso para tener todo el nombre completo o el primer nombre y el rpiemr apellido.

const miNombreCompleto = process.argv.slice(2).join(" "); // Se obtiene el nombre completo.

const saludoNombreCompleto = "Hola " + miNombre + "!"; // Se concatena el saludo con el nombre completo.

console.log(saludoNombreCompleto); // Se imprime el saludo con el nombre completo.

