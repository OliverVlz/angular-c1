let caracteristicas:string[] = ["Alto", "Moreno", "Ojos marrones"];
console.log(caracteristicas);

interface Ipersona {
    nombre: string;
    edad: number;
    caracteristicas: (string | number | boolean)[];
    casado?: boolean;
}

const persona: Ipersona = {
    nombre: 'Juan',
    edad: 30,
    caracteristicas: caracteristicas,
    casado: false
}

console.log(persona);
export{};