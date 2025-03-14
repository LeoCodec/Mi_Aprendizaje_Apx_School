/**
 * Filtrando propiedades
    - En este desafío de cierre del capítulo, pondremos en práctica el uso de bucles para abordar uno de los problemas 
    - que más lagrimas de devs principiantes provocan: el filtrado de listas.

    - En este desafío vamos a tener que filtrar un array de propiedades en base a un objeto que representa los filtros de una búsqueda.
 */

//Codigo Base:

const propiedades = [
    {
      barrio: "Palermo",
      tipoOperacion: "alquiler",
      tipoPropiedad: "departamento",
      ambientes: 2,
      precio: 120000,
      metrosCuadrados: 50,
    },
    {
      barrio: "Recoleta",
      tipoOperacion: "alquiler",
      tipoPropiedad: "departamento",
      ambientes: 3,
      precio: 250000,
      metrosCuadrados: 85,
    },
    {
      barrio: "Belgrano",
      tipoOperacion: "alquiler",
      tipoPropiedad: "casa",
      ambientes: 5,
      precio: 350000,
      metrosCuadrados: 120,
    },
    {
      barrio: "Villa Crespo",
      tipoOperacion: "alquiler",
      tipoPropiedad: "departamento",
      ambientes: 2,
      precio: 100000,
      metrosCuadrados: 45,
    },
    {
      barrio: "San Telmo",
      tipoOperacion: "compra",
      tipoPropiedad: "departamento",
      ambientes: 4,
      precio: 300000,
      metrosCuadrados: 90,
    },
    {
      barrio: "Caballito",
      tipoOperacion: "alquiler",
      tipoPropiedad: "casa",
      ambientes: 4,
      precio: 280000,
      metrosCuadrados: 110,
    },
    {
      barrio: "Núñez",
      tipoOperacion: "compra",
      tipoPropiedad: "quinta",
      ambientes: 6,
      precio: 900000,
      metrosCuadrados: 200,
    },
    {
      barrio: "Almagro",
      tipoOperacion: "alquiler",
      tipoPropiedad: "departamento",
      ambientes: 1,
      precio: 80000,
      metrosCuadrados: 35,
    },
    {
      barrio: "Barracas",
      tipoOperacion: "compra",
      tipoPropiedad: "departamento",
      ambientes: 2,
      precio: 150000,
      metrosCuadrados: 60,
    },
    {
      barrio: "La Boca",
      tipoOperacion: "alquiler",
      tipoPropiedad: "departamento",
      ambientes: 3,
      precio: 110000,
      metrosCuadrados: 70,
    },
    {
      barrio: "Flores",
      tipoOperacion: "compra",
      tipoPropiedad: "casa",
      ambientes: 4,
      precio: 400000,
      metrosCuadrados: 130,
    },
    {
      barrio: "Boedo",
      tipoOperacion: "alquiler",
      tipoPropiedad: "departamento",
      ambientes: 2,
      precio: 95000,
      metrosCuadrados: 55,
    },
    {
      barrio: "Villa Devoto",
      tipoOperacion: "compra",
      tipoPropiedad: "quinta",
      ambientes: 5,
      precio: 750000,
      metrosCuadrados: 180,
    },
    {
      barrio: "Liniers",
      tipoOperacion: "alquiler",
      tipoPropiedad: "casa",
      ambientes: 3,
      precio: 200000,
      metrosCuadrados: 100,
    },
    {
      barrio: "Parque Patricios",
      tipoOperacion: "compra",
      tipoPropiedad: "departamento",
      ambientes: 2,
      precio: 220000,
      metrosCuadrados: 65,
    },
  ];
  
  const filtros = {
    barrio: ["Palermo", "Recoleta"], // Lista de barrios aceptados
    tipoOperacion: "alquiler", // Filtrar por tipo de operación ('alquiler' o 'compra')
    tipoPropiedad: ["departamento", "casa"], // Lista de tipos de propiedad aceptados
    ambientesMin: 2, // Número mínimo de ambientes
    ambientesMax: 4, // Número máximo de ambientes
    precioMin: 100000, // Precio mínimo
    precioMax: 300000, // Precio máximo
    metrosCuadradosMin: 50, // Metros cuadrados mínimos
    metrosCuadradosMax: 100, // Metros cuadrados máximos
  };
  
  const propiedadesFiltradas = [];
  let indicePropsFiltradas = 0;
  
  // Acá tenés que plantear el for...of que recorre el array de propiedades
  for (const propiedad of propiedades) {
    // en cada propiedad tenés que hacer las preguntas pertinentes
    const cumpleBarrio = filtros.barrio.includes(propiedad.barrio);
    const cumpleTipoOperacion = propiedad.tipoOperacion === filtros.tipoOperacion;
    const cumpleTipoPropiedad = filtros.tipoPropiedad.includes(propiedad.tipoPropiedad);
    const cumpleAmbientes = propiedad.ambientes >= filtros.ambientesMin && propiedad.ambientes <= filtros.ambientesMax;
    const cumplePrecio = propiedad.precio >= filtros.precioMin && propiedad.precio <= filtros.precioMax;
    const cumpleMetrosCuadrados = propiedad.metrosCuadrados >= filtros.metrosCuadradosMin && propiedad.metrosCuadrados <= filtros.metrosCuadradosMax;
  
    // y en caso de cumplir los requisitos de los filtros,
    if (cumpleBarrio && cumpleTipoOperacion && cumpleTipoPropiedad && cumpleAmbientes && cumplePrecio && cumpleMetrosCuadrados) {
      // agregar la propiedad al array propiedadesFiltradas
      // usando la variable indicePropsFiltradas para "empujar" la propiedad en el array
      propiedadesFiltradas[indicePropsFiltradas] = propiedad;
      indicePropsFiltradas++;
    }
  }
  
  console.log(propiedadesFiltradas);
  console.log("Resultados encontrados: " + propiedadesFiltradas.length);
