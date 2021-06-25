"use strict";
exports.__esModule = true;
var Auto_1 = require("../src/Auto");
var Camioneta_1 = require("../src/Camioneta");
var guardar = function() {
    var datos = localStorage.info == null ? [] : JSON.parse(localStorage.info);
    var id = document.querySelector("#txtId").value;
    var marca = document.querySelector("#txtMarca").value;
    var modelo = document.querySelector("#txtModelo").value;
    var precio = document.querySelector("#txtPrecio").value;
    var selectTipo = document.querySelector("#slcTipo").value;
    var cantP = document.querySelector("#cantPuertas").value;
    var lastId = 0;
    if (datos.lenght > 0) {
        lastId = datos.reduce(function(e, a) {
            e.Id > a.Id ? e.Id : a.Id;
        });
    }
    var objeto;
    if (selectTipo == "1") {
        objeto = new Auto_1.Auto(lastId, marca, modelo, Number(precio), Number(cantP));
    } else {
        objeto = new Camioneta_1.Camioneta(lastId, marca, modelo, Number(precio), Number(cantP), true);
    }
    datos.push(objeto);
    localStorage.info = JSON.stringify(datos);
    listar();
    swal("Se guardó", "success");
};
var listar = function() {
    var datos = localStorage.info == null ? [] : JSON.parse(localStorage.info);
    var tabla = document.querySelector("#tblDatos");
    tabla.innerHTML = "";
    datos.forEach(function(element) {
        tabla.innerHTML += "\n            <tr>\n                <td>" + element.Id + "</td>\n                <td>" + element.Marca + "</td>\n                <td>" + element.Modelo + "</td>\n                <td>" + element.Precio + "</td>\n                <td>" + typeof(element) + "</td>\n                <td>" + element.CantPuertas + "</td>\n                <td>\n                    <button class=\"btn btn-primary\" onclick=\"editar(" + element.Id + ")\">Editar</button>\n                    <button class=\"btn btn-danger\" onclick=\"eliminar(" + element.Id + ")\">Eliminar</button>\n                </td>    \n            </tr>\n        ";
    });
};
// let editar = (doc : any) => {
//     let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);
//     let documento = (<HTMLInputElement>document.querySelector("#txtDocumento"));
//     let nombre = (<HTMLInputElement>document.querySelector("#txtNombre"));
//     let correo = (<HTMLInputElement>document.querySelector("#txtCorreo"));
//     let color = (<HTMLInputElement>document.querySelector("#txtColor"));
//     let id = (<HTMLInputElement>document.querySelector("#txtId"));
//     let btnGuardar = (<HTMLButtonElement>document.querySelector("#btnGuardar"));
//     let btnModificar = (<HTMLButtonElement>document.querySelector("#btnModificar"));
//     let resultado = datos.find((e : any) => e.documento == doc);
//     let resultadoIndex = datos.findIndex((e : any) => e.documento == doc);
//     if(resultado != undefined){
//         btnGuardar.style.display = "none";
//         btnModificar.style.display = "block";
//         documento.value = resultado.documento;
//         nombre.value = resultado.nombre;
//         correo.value = resultado.correo;
//         color.value = resultado.color;
//         id.value = resultadoIndex;
//     }else{
//         alert("No lo encontro");
//     }
// }
// let modificar = () => {
//     let datos = localStorage.info==null?[]:JSON.parse(localStorage.info);
//     let documento = (<HTMLInputElement>document.querySelector("#txtDocumento")).value;
//     let nombre = (<HTMLInputElement>document.querySelector("#txtNombre")).value;
//     let correo = (<HTMLInputElement>document.querySelector("#txtCorreo")).value;
//     let color = (<HTMLInputElement>document.querySelector("#txtColor")).value;
//     let id = (<HTMLInputElement>document.querySelector("#txtId")).value;
//     let btnGuardar = (<HTMLButtonElement>document.querySelector("#btnGuardar"));
//     let btnModificar = (<HTMLButtonElement>document.querySelector("#btnModificar"));
//     datos[id].documento = documento;
//     datos[id].nombre = nombre;
//     datos[id].correo = correo;
//     datos[id].color = color;
//     btnGuardar.style.display = "block";
//     btnModificar.style.display = "none";
//     localStorage.info = JSON.stringify(datos);
//     listar();
//     alert("Se modifico");
// }
var eliminar = function(id) {
    var datos = localStorage.info == null ? [] : JSON.parse(localStorage.info);
    var resultadoIndex = datos.findIndex(function(e) { return e.Id == id; });
    if (resultadoIndex != -1) {
        datos.splice(resultadoIndex, 1);
        localStorage.info = JSON.stringify(datos);
        listar();
    } else {
        alert("No lo encontro");
    }
};