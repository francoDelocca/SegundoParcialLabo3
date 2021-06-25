declare var swal : any;
declare var $ : any;

import { Vehiculo } from '../src/Vehiculo';
import { Auto } from '../src/Auto';
import { Camioneta } from '../src/Camioneta';

let guardar = () => {

    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let id = (<HTMLInputElement>document.querySelector("#txtId")).value;
    let marca = (<HTMLInputElement>document.querySelector("#txtMarca")).value;
    let modelo = (<HTMLInputElement>document.querySelector("#txtModelo")).value;
    let precio = (<HTMLInputElement>document.querySelector("#txtPrecio")).value;
    let selectTipo = (<HTMLInputElement>document.querySelector("#slcTipo")).value;
    let cantP = (<HTMLInputElement>document.querySelector("#cantPuertas")).value;

    let lastId = 0;

    if (datos.lenght > 0) {
        lastId = datos.reduce(function (e : Vehiculo, a : Vehiculo) {
            e.Id > a.Id ? e.Id : a.Id;
        });
    }

    let objeto;

    if (selectTipo == "1") {
        objeto = new Auto(lastId,marca,modelo,Number(precio),Number(cantP));
    }
    else{
        objeto = new Camioneta(lastId,marca,modelo,Number(precio),Number(cantP),true);
    }

    datos.push(objeto);

    localStorage.info = JSON.stringify(datos);

    listar();

    swal("Se guardó", "success");
}

let listar = () => {
    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);
    let tabla = (<HTMLTableElement>document.querySelector("#tblDatos"));
    tabla.innerHTML = "";
    datos.forEach((element : any) => {
        tabla.innerHTML += `
            <tr>
                <td>${element.Id}</td>
                <td>${element.Marca}</td>
                <td>${element.Modelo}</td>
                <td>${element.Precio}</td>
                <td>${typeof(element)}</td>
                <td>${element.CantPuertas}</td>
                <td>
                    <button class="btn btn-primary" onclick="editar(${element.Id})">Editar</button>
                    <button class="btn btn-danger" onclick="eliminar(${element.Id})">Eliminar</button>
                </td>    
            </tr>
        `;
    });
}

let eliminar = (id : any) => {

    let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);

    let resultadoIndex = datos.findIndex((e: any) => e.Id == id);

    if(resultadoIndex != -1){

        datos.splice(resultadoIndex, 1);

        localStorage.info = JSON.stringify(datos);

        listar();
    }else{
        alert("No lo encontro");
    }
}
