import { Vehiculo } from '../src/Vehiculo';

export class Auto extends Vehiculo {
    
    CantPuertas:number;

    constructor(id:number, marca:string, modelo:string, precio:number, cantP:number) {
        super(id,marca,modelo,precio);
        this.CantPuertas = cantP;
    }


}