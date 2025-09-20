import { type ganadorSorteo } from './ejercicio6';

export const mostrarDatos = (ganador: ganadorSorteo) => {
    console.log(`El ganador es ${ganador.cliente.nombre} de la tienda ${ganador.tienda.nombre}`);
}
