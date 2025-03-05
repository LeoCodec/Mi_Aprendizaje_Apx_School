//En base al siguiente código, suma un producto al carrito de 
// compras y muestra la cantidad total de productos.

const carrito = [
    {
      articulo: 'Maceta',
      price: 500,
      cantidad: 1
    },
    {
      articulo: 'Tierra',
      price: 100,
      cantidad: 3
    }
  ]
  
  console.log("Hasta acá hay", carrito.length, "productos en el carrito");
  
  // suma un nuevo producto al carrito (recuerda utilizar length como vimos previamente)
  carrito[carrito.length] = {
    articulo: 'Planta',
    price: 300,
    cantidad: 2
  }
  
  // vuelve a imprimir el nuevo total de producto en el carrito
    console.log("Ahora hay", carrito.length, "productos en el carrito");
  