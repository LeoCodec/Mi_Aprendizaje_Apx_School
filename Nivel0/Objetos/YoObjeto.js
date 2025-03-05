//Uno de los primeros pasos para crear software es aprender a representar entidades del mundo 
// real como objetos. Gracias a los primitivos (numbers, strings, booleans) 
// y a estructuras como arrays y objetos, podemos construir modelos bastante complejos 
// que reflejan la realidad. La clave está en saber estructurar los datos que representan 
// cosas de la vida cotidiana; esto es esencial para el desarrollo de cualquier software. 
// Aunque al principio puede parecer complicado, con la práctica se vuelve más natural 
// y dominar esta habilidad es de mucha ayuda.

/*
Consigna
En este desafío la misión es crear un objeto que te represente y que incluya los siguientes datos.

Nombre: string
Apellido: string
Edad: number
Pais: string
Profesión: string
Sabe manejar: boolean
Mascotas: array
Hobbies: array
Toca instrumentos: boolean
Nivel de inglés: string o number
Ciudad: string
Redes sociales: objeto
Películas favoritas: array
Comidas favoritas: array
Sabe cocinar: boolean
Día de la semana favorito: string
Objetivos por cumplir: array
Como notarás cada dato tiene una propuesta del tipo, pero la idea es que juegues 
y elijas vos como representar cada dato.
*/

const yo = {
    nombre: 'Leo',
    apellido: 'Cruz',
    edad: 22,
    pais: 'México',
    profesion: 'Estudiante de Ingeniería en Sistemas Computacionales y Desarrollador Web Full Stack en proceso de formación',
    sabeManejar: true,
    mascotas: ['Chihuaguas', 'Huskie Siberiano'],
    hobbies: ['Leer', 'Aprender', 'Programar', 'Escuchar música', 'Ver series y películas'],
    tocaInstrumentos: false,
    nivelIngles: 'Intermedio B2',
    ciudad: 'Ciudad de México',
    redesSociales: {
        facebook: 'Leo Cruz',
        instagram: 'Leo Codec',
        tiktok: 'Leo Codec',
        github: 'Leo Codec',
    },
    peliculasFavoritas: ['Spider-man 2002', 'Batman 2005', 'Interstelar',

    ],
    comidasFavoritas: ['Tacos', 'Pizza', 'Hamburguesa', 'Alitas', 'Pollo'

    ],
    sabeCocinar: true,
    diaSemanaFavorito: 'Viernes',
    objetivosPorCumplir: ['Mejorar mis habilidades de programación', 'Aprender a tocar un instrumento musical', 'Viajar por el mundo', 'Ser un mejor ser humano', 'Ser un mejor profesional'], 
    
}   

