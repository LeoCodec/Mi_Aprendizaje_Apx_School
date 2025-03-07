/**
 * En base a este array de productos (carrito de compras) calcula 
 * el total a pagar por el carrito completo.
 */

// Array con productos en el carrito
const carrito = [
    { descripcion: "Teclado Mecánico", precioUnitario: 100, cantidad: 2 },
    { descripcion: "Mouse Inalámbrico", precioUnitario: 50, cantidad: 1 }
  ];
  
  
  // calcula el precio de cada producto basado 
  // en el precioUnitario y la cantidad
  const precioProducto1 = carrito[0].precioUnitario * carrito[0].cantidad;
  const precioProducto2 = carrito[1].precioUnitario * carrito[1].cantidad;
  // lo mismo con el otro producto
  
  const total = (precioProducto1 + precioProducto2);
    
  console.log(`El total del carrito es $${total}`);
    