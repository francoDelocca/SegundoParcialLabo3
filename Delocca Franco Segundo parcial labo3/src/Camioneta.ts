import { Auto } from '../src/Auto';

export class Camioneta extends Auto {

    CuatroXCuatro:boolean;

    constructor(id:number, marca:string, modelo:string, precio:number, cantP:number ,cxc:boolean) {
        super(id,marca,modelo,precio,cantP);
        this.CuatroXCuatro = cxc;
    }
}