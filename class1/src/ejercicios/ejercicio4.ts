interface Detalle {
    autor:string;
    anio:number;
}

interface Reproductor {
    volumen: number;
    duracion: number;
    cancion: string;
    detalles: Detalle;
}

const reproductor: Reproductor = {
    volumen: 0,
    duracion: 10,
    cancion: 'Mala Gente',
    detalles: {
        autor: 'Juanes',
        anio: 2024
    }
}

/*
const cancion = reproductor.cancion;
const autor = reproductor.detalles.autor;

console.log(cancion);
console.log(autor);
*/
// Desestructuración

const { cancion: nuevaCancion, detalles: { autor, anio } } = reproductor;

console.log(nuevaCancion);
console.log(autor);
console.log(anio);

//otra forma
const { detalles } = reproductor;
const { autor: nuevoAutor, anio: nuevoAnio } = detalles;
console.log(nuevoAutor);
console.log(nuevoAnio);

// arrays
const frutas = ['manzana', 'banana', 'naranja'];
console.log("frutas: " + (frutas[3] || 'No hay frutas'));

//Sintaxis poco usada
const [p1, p2, p3, p4 = 'No hay frutas'] = frutas;
console.log(p4);
//otra forma de llegar a una posición
const [,, p33] = frutas;
console.log(p33);
export {};

////---------------------------------
export interface IProducto {
    descripcion: string;
    precio: number;
}

const celular: IProducto = {
    descripcion: 'Celular',
    precio: 100,
}

const tablet: IProducto ={
    descripcion: 'Tablet',
    precio: 200,
}

// vemos que se crea un interface general IProducto para que tipe los productos
// y no tener que estar creando interfaces para cada producto
const carrito: IProducto[] = [celular, tablet];
const impuesto: number = 0.19;
const propina: number = 0.10;

// Definir una interface para las opciones del cálculo de impuestos
export interface ImpuestosOption {
    impuesto: number;
    productos: IProducto[];
    propina?: number;
}

export function calcularIpuesto(options: ImpuestosOption): number[] {
    //Cuando se usa un valor optional '?' se debe asingnar un valor por defecto
    const {impuesto, productos, propina = 0} = options;
    let total = 0;
    productos.forEach(({ precio }) => {
        total += precio;
    });

    return [total, total * impuesto, (total*2*impuesto*propina)];
}

const options: ImpuestosOption = {
    impuesto,
    productos: carrito,
    propina,
}

const resultadoCompra: number[] = calcularIpuesto(options);
console.log("Total:" + resultadoCompra[0]);
console.log("Total impuesto:" + resultadoCompra[1]);
console.log("Propina: " + resultadoCompra[2])

export {};