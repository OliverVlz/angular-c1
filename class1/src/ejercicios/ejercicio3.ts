/***
 * This is an example of a TypeScript file.
 */
function sumar(a:number , b:number) {
    return a+b+" hola";
}
console.log(sumar(1,2));

const sumar2 = (n1:number, n2:number):number => {
    return n1+n2;
}
console.log(sumar2(3,4));

function multiplicar(n1:number, base:number = 2, n2:number = 4):number {
    return n1*base*n2;
}

console.log(multiplicar(5,10,6));

interface Ipersonaje {
    nombre: string;
    vida: number;
    mostrarDetalle: () => void;
}

const porcentajeVida = (personaje: Ipersonaje, valor: number) => {
    personaje.vida -= valor;
}

const personaje: Ipersonaje = {
    nombre: 'Goku',
    vida: 1000,
    mostrarDetalle() {
        console.log(`Personaje: ${this.nombre}, Vida: ${this.vida}`);
    }
}

console.log(personaje)
porcentajeVida(personaje, 100);
personaje.mostrarDetalle();

interface IDireccion {
    ciudad?: string;
    pais?: string;
}

interface IUsuario {
    id: number;
    nombre: string;
    email: string;
    activo: boolean;
    roles: string[];
    direccion: IDireccion;
    saludar: () => void;
    actualizarEmail: (nuevoEmail: string) => void ;
}

const usuario1: IUsuario = {
    id: 1,
    nombre: 'Juan',
    email: 'juan@example.com',
    activo: true,
    roles: ['admin', 'user'],
    direccion: {
        ciudad: 'Villavicencio',
        pais: 'Colombia'
    },
    saludar(){
        return `Hola, soy ${this.nombre}`;
    },
    actualizarEmail(nuevoEmail: string){
        this.email = nuevoEmail;
    }
};
console.log(usuario1.email);
usuario1.actualizarEmail('ola');
console.log(usuario1.email);

export {};