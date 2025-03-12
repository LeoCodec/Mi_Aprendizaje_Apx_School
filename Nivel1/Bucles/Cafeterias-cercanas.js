/**
 * Cafeterías cercanas
    *En este caso queremos filtrar una collection de cafeterías para quedarnos solo con las más cercanas. 
    *Para esto debemos iterar todas las cafeterías y acumular en otro array las que estén a menos de 1 km.
 */

    const cafes = [
        {
          name: "Café Aurora",
          products: ["Latte", "Croissant", "Capuchino"],
          distance: 1.2,
        },
        {
          name: "El Rincón del Espresso",
          products: ["Espresso", "Bagel", "Café Mocha"],
          distance: 0.8,
        },
        {
          name: "Java Lounge",
          products: ["Americano", "Té Verde", "Sándwich"],
          distance: 2.5,
        },
        {
          name: "La Taza Feliz",
          products: ["Macchiato", "Muffin", "Frappuccino"],
          distance: 1.8,
        },
        {
          name: "Brewtopia",
          products: ["Cold Brew", "Brownie", "Flat White"],
          distance: 0.5,
        },
        {
          name: "Café Nómada",
          products: ["Café Negro", "Churro", "Matcha Latte"],
          distance: 3.0,
        },
      ];
      
      // Iniciamos un array vacio
      const distanciaMaxima = 1;
      const cercanas = [];
      let indiceCercanas = 0;      
      for (const c of cafes) {
        // acá tenemos que usar un if para saber
        // si la distancia c.distance es menor a ditanciaMaxima
        // si es asi lo metemos dentro del array cercanas[]
        
        // PISTA: Necesitamos un indice extra para ir 
        // acumulando cosas en el array cercanas[]
        
        if (c.distance < distanciaMaxima) { 
            cercanas[indiceCercanas] = c;
            indiceCercanas++; 
        }
        
        
      }
      
      console.log(
        "La cafeterías más cercanas son:",
        cercanas
      );
      