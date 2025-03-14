/**
 * Promedios de temperatura
    - El objetivo de este ejercicio es calcular el promedio de la temperatura en Buenos Aires en los primeros 3 días del 2024. 
    - Para esto vamos a usar 3 muestras de datos distintas y ver que diferencia hay.

    - Para esto vamos a recorrer un array que tiene la información de la temperatura por hora y vamos a recorrerlo de a una 
    - posición, luego de a dos y luego de a tres, para ver que diferencia hay en el promedio final de cada muestra.
 */

//Codigo Base:
//Codigo Base:

const temperaturaPorHora = [
    { fecha: "2024-01-01", hora: "00:00", temperatura: 24.2 },
    { fecha: "2024-01-01", hora: "01:00", temperatura: 23.5 },
    { fecha: "2024-01-01", hora: "02:00", temperatura: 22.8 },
    { fecha: "2024-01-01", hora: "03:00", temperatura: 22.0 },
    { fecha: "2024-01-01", hora: "04:00", temperatura: 21.5 },
    { fecha: "2024-01-01", hora: "05:00", temperatura: 21.1 },
    { fecha: "2024-01-01", hora: "06:00", temperatura: 21.0 },
    { fecha: "2024-01-01", hora: "07:00", temperatura: 22.3 },
    { fecha: "2024-01-01", hora: "08:00", temperatura: 24.0 },
    { fecha: "2024-01-01", hora: "09:00", temperatura: 26.5 },
    { fecha: "2024-01-01", hora: "10:00", temperatura: 29.2 },
    { fecha: "2024-01-01", hora: "11:00", temperatura: 31.0 },
    { fecha: "2024-01-01", hora: "12:00", temperatura: 32.8 },
    { fecha: "2024-01-01", hora: "13:00", temperatura: 34.0 },
    { fecha: "2024-01-01", hora: "14:00", temperatura: 35.2 },
    { fecha: "2024-01-01", hora: "15:00", temperatura: 36.0 },
    { fecha: "2024-01-01", hora: "16:00", temperatura: 35.0 },
    { fecha: "2024-01-01", hora: "17:00", temperatura: 33.5 },
    { fecha: "2024-01-01", hora: "18:00", temperatura: 31.8 },
    { fecha: "2024-01-01", hora: "19:00", temperatura: 29.7 },
    { fecha: "2024-01-01", hora: "20:00", temperatura: 27.5 },
    { fecha: "2024-01-01", hora: "21:00", temperatura: 26.2 },
    { fecha: "2024-01-01", hora: "22:00", temperatura: 25.0 },
    { fecha: "2024-01-01", hora: "23:00", temperatura: 24.5 },
  
    { fecha: "2024-01-02", hora: "00:00", temperatura: 24.0 },
    { fecha: "2024-01-02", hora: "01:00", temperatura: 23.4 },
    { fecha: "2024-01-02", hora: "02:00", temperatura: 22.6 },
    { fecha: "2024-01-02", hora: "03:00", temperatura: 22.0 },
    { fecha: "2024-01-02", hora: "04:00", temperatura: 21.8 },
    { fecha: "2024-01-02", hora: "05:00", temperatura: 21.6 },
    { fecha: "2024-01-02", hora: "06:00", temperatura: 21.5 },
    { fecha: "2024-01-02", hora: "07:00", temperatura: 23.0 },
    { fecha: "2024-01-02", hora: "08:00", temperatura: 25.3 },
    { fecha: "2024-01-02", hora: "09:00", temperatura: 28.0 },
    { fecha: "2024-01-02", hora: "10:00", temperatura: 30.5 },
    { fecha: "2024-01-02", hora: "11:00", temperatura: 32.7 },
    { fecha: "2024-01-02", hora: "12:00", temperatura: 34.2 },
    { fecha: "2024-01-02", hora: "13:00", temperatura: 35.5 },
    { fecha: "2024-01-02", hora: "14:00", temperatura: 36.0 },
    { fecha: "2024-01-02", hora: "15:00", temperatura: 36.5 },
    { fecha: "2024-01-02", hora: "16:00", temperatura: 35.8 },
    { fecha: "2024-01-02", hora: "17:00", temperatura: 34.2 },
    { fecha: "2024-01-02", hora: "18:00", temperatura: 32.5 },
    { fecha: "2024-01-02", hora: "19:00", temperatura: 30.2 },
    { fecha: "2024-01-02", hora: "20:00", temperatura: 28.0 },
    { fecha: "2024-01-02", hora: "21:00", temperatura: 26.8 },
    { fecha: "2024-01-02", hora: "22:00", temperatura: 25.5 },
    { fecha: "2024-01-02", hora: "23:00", temperatura: 24.9 },
  
    { fecha: "2024-01-03", hora: "00:00", temperatura: 23.5 },
    { fecha: "2024-01-03", hora: "01:00", temperatura: 22.9 },
    { fecha: "2024-01-03", hora: "02:00", temperatura: 22.2 },
    { fecha: "2024-01-03", hora: "03:00", temperatura: 21.7 },
    { fecha: "2024-01-03", hora: "04:00", temperatura: 21.1 },
    { fecha: "2024-01-03", hora: "05:00", temperatura: 20.8 },
    { fecha: "2024-01-03", hora: "06:00", temperatura: 20.5 },
    { fecha: "2024-01-03", hora: "07:00", temperatura: 21.2 },
    { fecha: "2024-01-03", hora: "08:00", temperatura: 23.0 },
    { fecha: "2024-01-03", hora: "09:00", temperatura: 25.2 },
    { fecha: "2024-01-03", hora: "10:00", temperatura: 27.6 },
    { fecha: "2024-01-03", hora: "11:00", temperatura: 29.1 },
    { fecha: "2024-01-03", hora: "12:00", temperatura: 30.3 },
    { fecha: "2024-01-03", hora: "13:00", temperatura: 31.0 },
    { fecha: "2024-01-03", hora: "14:00", temperatura: 32.1 },
    { fecha: "2024-01-03", hora: "15:00", temperatura: 32.5 },
    { fecha: "2024-01-03", hora: "16:00", temperatura: 31.8 },
    { fecha: "2024-01-03", hora: "17:00", temperatura: 30.2 },
    { fecha: "2024-01-03", hora: "18:00", temperatura: 28.6 },
    { fecha: "2024-01-03", hora: "19:00", temperatura: 27.0 },
    { fecha: "2024-01-03", hora: "20:00", temperatura: 25.3 },
    { fecha: "2024-01-03", hora: "21:00", temperatura: 24.1 },
    { fecha: "2024-01-03", hora: "22:00", temperatura: 23.4 },
    { fecha: "2024-01-03", hora: "23:00", temperatura: 22.8 },
  ];
  
  // Igual que en el ejercicio anteriro del promedio
  // tenemos una suma total y un contador
  let sumaTotal1 = 0;
  let contador1 = 0;
  
  // Recorremos de a 1 posición (cada hora)
  for (let i = 0; i < temperaturaPorHora.length; i++) {
    sumaTotal1 += temperaturaPorHora[i].temperatura;
    contador1++;
  }
  
  let promedio1 = sumaTotal1 / contador1;
  console.log("Promedio cada hora:", promedio1);
  
  let sumaTotal2 = 0;
  let contador2 = 0;
  
  // Recorrer de a 2 posiciones (cada 2 horas)
  for (let i = 0; i < temperaturaPorHora.length; i += 2) {
    sumaTotal2 += temperaturaPorHora[i].temperatura;
    contador2++;
  }
  
  let promedio2 = sumaTotal2 / contador2;
  console.log("Promedio cada 2 horas:", promedio2);
  
  let sumaTotal3 = 0;
  let contador3 = 0;
  
  // Recorrer de a 3 posiciones (cada 3 horas)
  for (let i = 0; i < temperaturaPorHora.length; i += 3) {
    sumaTotal3 += temperaturaPorHora[i].temperatura;
    contador3++;
  }
  
  let promedio3 = sumaTotal3 / contador3;
  console.log("Promedio cada 3 horas:", promedio3);