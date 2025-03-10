/**
 * Buscando propiedades
 * +-------------------+-------------------+-------------------+
 * El objetivo de este ejercicio es detectar ciertas condiciones en una 
 * propiedad representada por un objeto.
 * 
 * Lo que estamos buscando es una propiedad del tipo departamento, 
 * con un precio máximo de 1000 y con un mínimo de 2 habitaciones. 
 * Si la propiedad cumple con todas estas condiciones debemos mostrar 
 * un mensaje que diga "La propiedad {id} cumple con todas las condiciones" 
 * y a continuación los datos de contacto.
 
*/

//Código Base.

const propiedad = {
    id: 10543,
    titulo: "Moderno departamento en el centro",
    descripcion: "Luminoso departamento de 2 habitaciones con balcón y excelente vista a la ciudad.",
    tipo: "departamento", // Puede ser "casa", "departamento", "terreno", etc.
    precio: 800, // Precio mensual en la moneda especificada
    ubicacion: {
      direccion: "Av. Principal 123",
      ciudad: "Buenos Aires",
      provincia: "Buenos Aires",
      pais: "Argentina",
      codigoPostal: "C1000"
    },
    superficie: 80, // m²
    habitaciones: 2,
    banos: 1,
    amenities: ["Gimnasio", "Piscina", "SUM"],
    servicios: ["Luz", "Gas", "Agua", "Internet"],
    propietario: {
      nombre: "Mariana López",
      telefono: "+54 9 11 5555-1234",
      email: "mariana@example.com"
    },
    diasPublicado: 15, // Número de días que lleva publicado
    visitas: 254,
    destacado: true // Indica si la propiedad es destacada en el sitio
  };
  
  // lo más prolijo es usar variables auxiliares para evaluar cada condicion
  const esDepa = propiedad.tipo === "departamento";
  const estaEnPrecio = propiedad.precio <= 1000; // Cambié < a <= para incluir el precio máximo
  const tieneHabitaciones = propiedad.habitaciones >= 2; // Mínimo 2 habitaciones
  // lo mismo con el resto de las condiciones
  
  // luego usamos un if para chequear todas las condiciones
  if (esDepa && estaEnPrecio && tieneHabitaciones) {
    console.log("Esta propiedad cumple");
    console.log(`La propiedad ${propiedad.id} cumple con todas las condiciones`);
    console.log(`Contacto: ${propiedad.propietario.nombre}`);
    console.log(`Teléfono: ${propiedad.propietario.telefono}`);
    console.log(`Email: ${propiedad.propietario.email}`);
  
    // Chequear condiciones extra
    if (propiedad.superficie > 80 && propiedad.diasPublicado < 7) {
      console.log("⚠️ Hay que contactar esta propiedad lo antes posible.");
    }
  } else {
    console.log("Esta propiedad no cumple");
    console.log(`La propiedad ${propiedad.id} no cumple con todas las condiciones`);
  
    // Verificamos cada condición que no se cumple
    if (!esDepa) {
      console.log("No es un departamento.");
    }
    if (!estaEnPrecio) {
      console.log("El precio de la propiedad es demasiado alto.");
    }
    if (!tieneHabitaciones) {
      console.log("No tiene al menos 2 habitaciones.");
    }
}  
  