function verTipo<T>(argument: T): T {
    return argument;
}

interface Mamiferos {
    tipo: string;
    genero: string;
    edad: number;
}

const vaca: Mamiferos = {
    tipo: 'bovino',
    genero: 'hembra',
    edad: 5,
}

let prueba = verTipo("Juan");
let prueba1 = verTipo(true);
let prueba2 = verTipo(123);
let prueba3 = verTipo(vaca);
/*
console.log(prueba3);

console.log(prueba1);
console.log(prueba.toUpperCase());
const res: any = prueba2.toString();
console.log(typeof(res));
console.log(res + 2);

*/
/**Ejercicio 07-ejercicio.md
*Crea una función genérica llamada `crearCaja<T>` que reciba un valor de cualquier tipo y lo devuelva dentro de un objeto con la propiedad `contenido`.
*/

function crearCaja<T>(contenido: T): any {
    return {contenido};
}

console.log(crearCaja(5));
console.log(crearCaja(vaca));


//solucion

interface ReturnEnvolver<T> {
    contenido: T;
}

function envolverEnCaja<T>(param: T): ReturnEnvolver<T> {
    return { contenido: param };
}

//solucion 2
/*
function envolverEnCaja<T>(param: T): { contenido: T } {
    return { contenido: param };
}
*/

console.log(envolverEnCaja("Juan"));
console.log(envolverEnCaja(vaca));