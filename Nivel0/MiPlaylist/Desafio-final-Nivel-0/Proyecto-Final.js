/*
    La misión de este desafío es construir un pequeño software que almacene una 
    playlist de videos del canal de YouTube de apx https://www.youtube.com/apxschool. 
    Para esto vas a tener que elegir al menos 5 videos y armar una estructura similar 
    a esta:

*/

// Este es el codigo que mande en gist: https://gist.github.com/LeoCodec/c615bca2b7cf986eb08eb65d8fcaee39

const miPlaylist = [
    {
      titulo: "Cómo aprender JavaScript en 10 minutos",
      url: "https://youtu.be/LttJdPtXmw4?si=eGWZCJ17_ZYnYPj3",
      resumen: "Un video rápido y efectivo para aprender los conceptos básicos de JavaScript.",
      tags: ["JavaScript", "Programación", "Básico"],
      visto: false,
      dificultad: 2,
    },
    {
      titulo: "Introducción a React para principiantes",
      url: "https://youtu.be/yIRWzNIacJc?si=_ZgtbkLE2LXb6E6g",
      resumen: "Aprende los fundamentos de React y cómo crear tu primera aplicación.",
      tags: ["React", "Frontend", "JavaScript"],
      visto: false,
      dificultad: 3,
    },
    {
      titulo: "Node.js desde cero: Guía completa",
      url: "https://youtu.be/NK4CbPxzZQU?si=YJ2xh3yYhNMWc0wU",
      resumen: "Descubre cómo usar Node.js para construir aplicaciones backend robustas.",
      tags: ["Node.js", "Backend", "JavaScript"],
      visto: false,
      dificultad: 4,
    },
    {
      titulo: "HTML y CSS para principiantes",
      url: "https://youtu.be/aK1mwitXWXU?si=yRXcXsG8E9MXQ7r0",
      resumen: "Aprende los conceptos básicos de HTML y CSS para crear páginas web.",
      tags: ["HTML", "CSS", "Web Development"],
      visto: false,
      dificultad: 1,
    },
    {
      titulo: "Desarrollo de APIs con Express.js",
      url: "https://youtu.be/Ac7_qK6OJEs?si=I86S6t-DHFL9jpha",
      resumen: "Aprende a crear APIs RESTful utilizando Express.js y Node.js.",
      tags: ["Express.js", "API", "Backend"],
      visto: false,
      dificultad: 5,
    },
  ];
  
  // Reporte
  console.log("Total de videos en la playlist:", miPlaylist.length);
  console.log("Primer video - Título:", miPlaylist[0].titulo);
  console.log("Primer video - URL:", miPlaylist[0].url);
  console.log("Resumen del primer video:", miPlaylist[0].resumen);
  console.log("Último video - Título:", miPlaylist[miPlaylist.length - 1].titulo);
  console.log("Último video - URL:", miPlaylist[miPlaylist.length - 1].url);
  console.log("Resumen del último video:", miPlaylist[miPlaylist.length - 1].resumen);

