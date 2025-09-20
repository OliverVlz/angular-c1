import type { ITienda, ICliente, ganadorSorteo } from './ejercicio6';
import { mostrarDatos } from './ejercicio7';


//option 1: dejandolo directamente 
/*
mostrarDatos({
    tienda:{
    nombre: 'Frutería ejemplo',
    precio: 100
},cliente:{
    nombre: 'Juan Pérez',
    edad: 30
}
*/
//option 2: creando las constantes y pasandolas por parametro
/*
const param:ganadorSorteo = {
    tienda: {
    nombre: 'Frutería ejemplo',
    precio: 100
},
    cliente:{
    nombre: 'Juan Pérez',
    edad: 30
}
mostrarDatos(param);
*/

//option 3: creando las constantes y pasandolas por parametro
const fruver: ITienda = {
    nombre: 'Frutería ejemplo',
    precio: 100
};

const cliente: ICliente = {
    nombre: 'Juan Pérez',
    edad: 30
};
/* No se utiliza porque se puede pasar directamente el objeto
const param:ganadorSorteo = {
    tienda: {
    nombre: 'Frutería ejemplo',
    precio: 100
},
    cliente:{
    nombre: 'Juan Pérez',
    edad: 30
}
*/
mostrarDatos({
    tienda: fruver,
    cliente: cliente
})