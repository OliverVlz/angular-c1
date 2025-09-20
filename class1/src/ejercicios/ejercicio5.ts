import { type IProducto, type ImpuestosOption, calcularIpuesto,  } from './ejercicio4';

const carrito: IProducto[] = [
    { descripcion: 'Celular', precio: 100 },
    { descripcion: 'Tablet', precio: 200 },
];

const options: ImpuestosOption = {
    impuesto: 0.19,
    productos: carrito,
    propina: 0.10,
};

const [total, totalImpuesto ] = calcularIpuesto(options);

console.log({ total, totalImpuesto });

export {};