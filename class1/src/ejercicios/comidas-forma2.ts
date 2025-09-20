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
        public comidas: Comida[]
    ){}

    mostrarInfo (index:number):void {
    const { nombre, calorias, esVegana } = this.comidas[index];
    console.log(`Nombre: ${nombre}, Calorías: ${calorias}, ¿Vegana? ${esVegana}`);
}

actualizarLista(nuevaComida: Comida): void {
    this.comidas.push(nuevaComida);
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
        const index = this.comidasService.comidas.indexOf(comida);
        console.log('Notificando comida...')
        this.comidasService.mostrarInfo(index);
    }
}

const comidaService = new ComidaService([pizza, ensalada, hamburguesa]);
const notificarService = new NotificarService(comidaService);

notificarService.notificar(pizza);
notificarService.notificar(ensalada);
notificarService.notificar(hamburguesa);

const nuevaPizza = comidaService.modificarCalorias(pizza, 350);
comidaService.actualizarLista(nuevaPizza);
notificarService.notificar(nuevaPizza);