/*
 * Monto total
    *En base a este carrito de compras utilizá un while para calcular el monto total. 
    Tené en cuenta que cada ítem tiene un precio y una cantidad, por lo que tendrás que 
    multiplicar precio * cantidad en cada ítem.
 */

//Codigo Base:
const carrito = [
    { nombre: "Manzanas", precio: 35, cantidad: 3, categoria: "Frutas" },
    { nombre: "Pan", precio: 40, cantidad: 2, categoria: "Panadería" },
    { nombre: "Leche", precio: 50, cantidad: 1, categoria: "Lácteos" },
    { nombre: "Huevos", precio: 60, cantidad: 12, categoria: "Proteínas" },
    { nombre: "Pasta", precio: 45, cantidad: 1, categoria: "Despensa" },
    { nombre: "Queso", precio: 80, cantidad: 1, categoria: "Lácteos" },
    { nombre: "Tomates", precio: 30, cantidad: 4, categoria: "Verduras" },
    { nombre: "Aceite de Oliva", precio: 99, cantidad: 1, categoria: "Despensa" },
    { nombre: "Jabón", precio: 70, cantidad: 2, categoria: "Higiene" },
    { nombre: "Cereal", precio: 55, cantidad: 1, categoria: "Despensa" },
  ];
  
  // Variable para recorrer el carrito
  let indice = 0;
  
  let totalDelCarrito = 0;
  
  while (indice < carrito.length) {
    // acá tenés que ir sumando el total de cada item a tu total general
    totalDelCarrito += carrito[indice].precio * carrito[indice].cantidad;
    indice++;
  }
  
  console.log("El total del carrito es de :", totalDelCarrito);