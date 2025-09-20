/*export class Persona {
    public nombre: string;
    public direccion?: string;

    constructor(nombre: string, direccion?: string) {
        this.nombre = nombre;
        this.direccion = direccion;
    }
}*/
//const persona:Persona = new Persona('Juan', 'Calle 123');
//console.log(persona);

//otra forma
export class Persona2 {
    constructor(
        public nombre: string, 
        public direccion: string,
    ) {}
}
//const persona2:Persona2 = new Persona2('Pedro');
//console.log(persona2);

//HERENCIA

/* export class Persona {
    public nombre: string;
    private direccion: string;

    constructor(nombre: string, direccion: string){
        this.nombre = nombre;
        this.direccion = direccion;
    }
} */
export class Persona {    
    constructor(
        public nombre: string,
        public direccion: string = 'sin direccion' 
    ){}
}

export class trabajador{
    constructor(
        public persona: Persona,
        public cargo: string, 
        public empresa: string,
        public direccion: string,
    ){
    }
}

const personauno: Persona = new Persona('Paco');
const empleado: trabajador = new trabajador(personauno,'Programador','Google','Unillanos');
console.log(empleado);
