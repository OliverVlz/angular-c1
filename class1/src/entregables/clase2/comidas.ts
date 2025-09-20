interface Comida {
    nombre: string;
    calorias: number;
    esVegana: boolean;
}

const pizza: Comida = {
    nombre: 'Pizza',
    calorias: 400,
    esVegana: false
}

const ensalada: Comida = {
    nombre: 'Ensalada',
    calorias: 150,
    esVegana: true
}

const hamburguesa: Comida = {
    nombre: 'Hamburguesa',
    calorias: 700,
    esVegana: false
}

export class ComidaService {    
    constructor(
    ){}

    mostrarInfo (comida: Comida):void {
        const { nombre, calorias, esVegana } = comida;
        console.log(`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana? ${esVegana}`);
    }

    modificarCalorias(comida: Comida, nuevasCalorias: number): Comida {
        const { nombre, esVegana } = comida;
        return { 
            nombre, 
            calorias: nuevasCalorias, 
            esVegana 
        };
    }
}

export class NotificarService { 
    constructor(
        public comidasService: ComidaService,
    ){}
    notificar(comida: Comida) {
        console.log('Notificando comida...')
        this.comidasService.mostrarInfo(comida);
    }
}

const comidaService = new ComidaService();
const notificarService = new NotificarService(comidaService);

notificarService.notificar(pizza);
notificarService.notificar(ensalada);
notificarService.notificar(hamburguesa);

const nuevaPizza = comidaService.modificarCalorias(pizza, 350);
notificarService.notificar(nuevaPizza);