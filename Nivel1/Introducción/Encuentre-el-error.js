/*
    El objetivo de este ejercicio es entender como se usan algunas herramientas 
    disponibles para investigar sobre errores, en este caso vamos a probar perplexity.

    Para esto vamos a pedirle a perplexity que evalúe el siguiente bloque 
    de código que contiene un sutil error de lógica:
 */

    function getMaximum(numbers) {
        let max = 0;
        for (let i = 0; i < numbers.length; i++) {
            if (numbers[i] > max) {
                max = numbers[i];
            }
        }
        return max;
    }
    
    const testNumbers = [-5, -2, -8, -1];
    const maximum = getMaximum(testNumbers);
    console.log("Maximum value:", maximum);


// Traduccion del codigo a Español:

function obtenerMaximo(numeros) {
    let maximo = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > maximo) {
            maximo = numeros[i];
        }
    }
    return maximo;
}

const numerosPrueba = [-5, -2, -8, -1];
const maximoValor = obtenerMaximo(numerosPrueba);
console.log("Valor máximo:", maximoValor);

/*
    Explicación Paso a Paso
Declaración de la función obtenerMaximo(numeros):

Esta función recibe un arreglo de números como parámetro.

Su objetivo es encontrar el número máximo dentro del arreglo.

Inicialización de la variable maximo:

Se declara una variable maximo y se inicializa con el valor 0.

Esto es un problema porque si todos los números en el arreglo son negativos, la función siempre devolverá 0, que no es el máximo correcto.

Bucle for:

Se utiliza un bucle for para recorrer cada elemento del arreglo numeros.

En cada iteración, se compara el elemento actual (numeros[i]) con el valor actual de maximo.

Si el elemento es mayor que maximo, se actualiza el valor de maximo.

Retorno del valor máximo:

Después de recorrer todo el arreglo, la función devuelve el valor máximo encontrado.

Llamada a la función y impresión del resultado:

Se declara un arreglo numerosPrueba con algunos valores negativos.

Se llama a la función obtenerMaximo con este arreglo y se almacena el resultado en maximoValor.

Finalmente, se imprime el valor máximo encontrado.

Error de Lógica
El error de lógica está en la inicialización de la variable maximo. 
Al establecerla en 0, si todos los números en el arreglo son negativos, 
la función devolverá incorrectamente 0 como el máximo, 
en lugar del número menos negativo del arreglo.

Para corregir esto, puedes inicializar maximo con el primer elemento 
del arreglo o utilizar Number.NEGATIVE_INFINITY para asegurarte 
de que cualquier número del arreglo sea mayor que esta inicialización:
*/


