//Todo en funciones

/**
 * El objetivo es que ninguna instrucción quede por fuera de estas estructuras, porque así es más sencillo leer el programa, poder encontrar 
 * errores y nos da la posibilidad de que nuestro proyecto crezca o se optimice. Las funciones nos dan orden, poder y complejidad cuando 
 * escribimos código.
 * 
 * Un programa está compuesto por muchas funcionalidades. Estas pueden ser hacer una búsqueda, filtrar resultados, loguear usuarios, 
 * enviar formularios, etc. La mejor forma de integrar todos estos procesos es a través de pequeñas funciones que se encargan de tareas 
 * específicas, a las que podemos invocar desde cualquier lugar del programa.
 * 
 * Como ya adelantamos, desde nuestros primeros proyectos vamos a usar este tipo de arquitectura, donde una función llama a otra, 
 * formando una especie de árbol. Para eso, implementaremos una función principal, desde la que se invocará a las demás, 
 * en la medida que el programa lo requiera.
 * 
 * Por convención, en el mundo del desarrollo, le llamamos main a la función principal de un programa. 
 * Esta subrutina será el punto de entrada (entry point) a la aplicación y en su interior se llamarán a las demás funciones.
 */

//Ejemplo

function main() {
    console.log("Hola, mundo!");
}

//Ejemplo de Apx School

// 1. declaro la funcion crearSaludo
function crearSaludo(nombre){
    console.log("empieza la función crearSaludo con el parámetro", nombre)
    return "Hola" + nombre;
  }
  
  // 2. declaro la funcion main
  function main(){
    console.log("empieza la función main")
  
    var saludoAMarce = crearSaludo("Marce");
    var saludoAPau = crearSaludo("Paula");
    
    console.log("se imprimen los resultados")
    console.log(saludoAMarce);
    console.log(saludoAPau);
    
    console.log("se termina el programa")
  }
  
  // 3. ejecuto la función main
  main();
  
