/**
 * En base a esta lógica, determina si el saldo disponible 
 * es suficiente para hacer la compra.
 */

// Estado de cuenta
const estadoDeCuenta = {
    saldoDisponible: 500
  };
  
  // Producto deseado
  const producto = {
    nombre: "Teclado Mecánico",
    precio: 300
  };
  
  // esto deberías ser un boolean
  const saldoSuficiente = estadoDeCuenta.saldoDisponible >= producto.precio;
    
  console.log("Saldo suficiente", saldoSuficiente);