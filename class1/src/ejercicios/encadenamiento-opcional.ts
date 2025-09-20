export interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Juan Perez',
    hijos: ['Ana', 'Luis']
}

const pasajero2: Pasajero = {
    nombre: 'Carlos Gomez',
}

const mostrarHijos = (pasajero: Pasajero) => {
    const cuantosHijos = pasajero.hijos?.length ?? 0;
    console.log(cuantosHijos);
}

mostrarHijos(pasajero1);
mostrarHijos(pasajero2);

// Ejercicio 09-ejercicio.md
//Crea un sistema que modele libros usando TypeScript y aprovecha el encadenamiento opcional (?.)
//  y el operador nullish coalescing (??).

interface Libro {
    titulo: string;
    autor?: { 
        nombre?: string;
        pais?: string;
    }
    anioPublicacion?: number;
}

const mostrarLibro = (libro: Libro) => {
    const libroObject = {
        titulo: libro.titulo,
        autor: {
            nombre: libro.autor?.nombre ?? 'Autor desconocido',
            pais: libro.autor?.pais ?? 'País desconocido'
        },
        anioPublicacion: libro.anioPublicacion ?? 'Año de publicación desconocido'
    }
    console.log(libroObject);    
}

const libro1: Libro = {
    titulo: 'Cien Años de Soledad',
    autor: {
        nombre: 'Gabriel García Márquez',
        pais: 'Colombia'
    },
    anioPublicacion: 1967
}

const libro2: Libro = {
    titulo: 'El Aleph',
    autor: {
        nombre: 'Jorge Luis Borges',
    }
}

const libro3: Libro = {
    titulo: 'Libro sin autor ni año'
}


mostrarLibro(libro1);
mostrarLibro(libro2);
mostrarLibro(libro3);