export class Vehiculo {
    
    Id:number;
    Marca:string;
    Modelo:string;
    Precio:number;

    constructor(id:number, marca:string, modelo:string, precio:number) {
        this.Id = id;
        this.Marca = marca;
        this.Modelo = modelo;
        this.Precio = precio;
    }
    
}