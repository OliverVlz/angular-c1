/*
crear un archivo con 2 interfaces, otro archivo con una funcion que reciba por parametro
un objeto de tipo de una interfaz y retorne un string con un datos del objeto, y otro
que haga el llamado de la funcion
*/

export interface ITienda {
    nombre: string;
    precio: number;
}

export interface ICliente {
    nombre: string;
    edad: number;
}

export interface ganadorSorteo {
    tienda: ITienda;
    cliente: ICliente;
}