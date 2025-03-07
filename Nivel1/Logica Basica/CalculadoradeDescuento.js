/**
 * En base al precio inicial de un producto y un porcentaje de descuento, 
 * determina el precio final de un producto.
 */

const precioInicial = 420;

// esto quieren decir que se le aplica el 30% de descuento 
const porcentajeDescuento = 30; 

/* 
 Cuando la lógica es medianamente compleja
 lo mejor es usar datos intermedios
 y no intentar resolver todo en una sola linea
 de código.
*/

/* 
 En este caso para empezar, conviene calcular 
 cuanto es el descuento en base al precio y al porcentaje  
 
 Por ejemplo, si la constante porcentajeDescuento 
 fuese 50, valorDescuento debería ser 210 
*/

const valorDelDescuento = (precioInicial * porcentajeDescuento) / 100;

// Finalmente calcula el precio final restando el descuento
const precioFinal = precioInicial - valorDelDescuento; // Corregir la declaración

  
console.log(`Precio final con descuento aplicado, $${precioFinal}`);