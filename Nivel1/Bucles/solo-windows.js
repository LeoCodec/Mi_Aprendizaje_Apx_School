/**
 * Solo windows
    *Imprimí en la consola solo los nombres de las computadoras cuyo sistema operativo es Windows.
 */

    const computadoras = [
        { nombre: "Asus", sistema_operativo: "Windows" },
        { nombre: "Macbook", sistema_operativo: "macOS" },
        { nombre: "Dell", sistema_operativo: "Windows" },
        { nombre: "Lenovo", sistema_operativo: "Linux" },
        { nombre: "HP", sistema_operativo: "Windows" }
      ];
      
      
      for (const compu of computadoras) {
        // Si el sistema operativo de la computadora es Windows,  
        // imprimimos su nombre 
        if (compu.sistema_operativo === "Windows") {
          console.log(compu.nombre);
        }
}

