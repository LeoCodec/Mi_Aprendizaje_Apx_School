//Desafio

/**
 * Para este desafío, queremos que uses main() como función principal. Luego, tendrás que declarar tres funciones 
 * (al mismo nivel que la función main) que reciban números, textos y objetos.
 * 
 * Las funciones deben recibir estos parámetros y devolver valores nuevos. Para eso las funciones los podrán sumar, 
 * concatenar o cambiar; para devolver un valor por cada función.
 * 
 * La función main() no recibe parámetros ni retorna ningún valor, simplemente nos sirve como punto de entrada de nuestro programa 
 * y tiene como misión invocar a las otras funciones, pasarles valores y recibir sus respuestas para mostrarlas en la terminal.
 * 
 */

const readline = require('readline');

// Crear una interfaz para leer la entrada del usuario
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Función para registrar el nombre completo
function registrarNombreCompleto(nombre) {
    return `Nombre completo: ${nombre}`;
}

// Función para registrar el celular
function registrarCelular(celular) {
    return `Celular: ${celular}`;
}

// Función para registrar el email
function registrarEmail(email) {
    return `Email: ${email}`;
}

// Función para registrar el teléfono
function registrarTelefono(telefono) {
    return `Teléfono: ${telefono}`;
}

// Función principal
function main() {
    let opcion;
    const menu = () => {
        console.log("Seleccione una opción:");
        console.log("1. Registrar Nombre Completo");
        console.log("2. Registrar Celular");
        console.log("3. Registrar Email");
        console.log("4. Registrar Teléfono");
        console.log("0. Salir");
    };

    const preguntarOpcion = () => {
        menu();
        rl.question("Ingrese su opción: ", (respuesta) => {
            opcion = parseInt(respuesta);
            switch (opcion) {
                case 1:
                    rl.question("Ingrese su nombre completo: ", (nombre) => {
                        console.log(registrarNombreCompleto(nombre));
                        preguntarOpcion();
                    });
                    break;
                case 2:
                    rl.question("Ingrese su celular: ", (celular) => {
                        console.log(registrarCelular(celular));
                        preguntarOpcion();
                    });
                    break;
                case 3:
                    rl.question("Ingrese su email: ", (email) => {
                        console.log(registrarEmail(email));
                        preguntarOpcion();
                    });
                    break;
                case 4:
                    rl.question("Ingrese su teléfono: ", (telefono) => {
                        console.log(registrarTelefono(telefono));
                        preguntarOpcion();
                    });
                    break;
                case 0:
                    console.log("Saliendo...");
                    rl.close();
                    break;
                default:
                    console.log("Opción no válida");
                    preguntarOpcion();
            }
        });
    };

    preguntarOpcion();
}

// Llamada a la función principal
main();
