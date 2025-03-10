/*
 * Calculadora de descuento
    *El objetivo de este ejercicio es usar los condicionales, en este caso el if, 
    para tomar decisiones y generar resultados en base a ciertas características 
    de un producto.
 */

//Codigo Base:

const laptop = {
    id: "LAP123456",
    marca: "TechBrand",
    modelo: "X200",
    especificaciones: {
      procesador: "Intel Core i7",
      ram: 16, // en GB
      almacenamiento: 512, // en GB
      pantalla: 15.6 // en pulgadas
    },
    precioBase: 1000,
    incluyeSeguro: true,
    esReacondicionado: false,
    fechaFabricacion: { dia: 20, mes: 11, anio: 2023 },
    estado: "nuevo" // puede ser "nuevo" o "usado"
  };
  
  let precioFinal = laptop.precioBase;
  
  // tu código
    //1. Si incluye seguro, añade un recargo adicional de $100 al precio final.
    if (laptop.incluyeSeguro) {
        precioFinal += 100;
    }
    //2. Si es reacondicionado, aplica un descuento de $150 al precio final.
    if (laptop.esReacondicionado) {
        precioFinal -= 150;
    }
    //3. Si la RAM es mayor o igual a 16GB, añade un recargo adicional de $50 al precio final.
    if(laptop.especificaciones.ram >= 16){
        precioFinal += 50;
    }
    
console.log(precioFinal);