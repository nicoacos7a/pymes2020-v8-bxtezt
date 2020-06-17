import { Injectable } from '@angular/core';
import { of } from "rxjs";
import { Empresa, Empresas } from "../models/empresa";

@Injectable({
  providedIn: 'root'
})
export class MockEmpresasService {

  constructor() { }

  get(){
    return of (Empresas);
  }

  // get(RazonSocial: string):any {
  //   var Emp = Empresas.filter(item => 
  //     (RazonSocial == null || RazonSocial == "" || item.RazonSocial.toUpperCase().includes(RazonSocial.toUpperCase()))
  //   );

  //   //ordenar
  //   Emp = Emp.sort( (a,b) => a.RazonSocial.toUpperCase() > b.RazonSocial.toUpperCase() ? 1 : -1 )
  // }
  
  // // no usamos get con parametros porque javascript no soporta sobrecarga de metodos!
  // getById(Id: number) {
  //   var item: Empresa = Empresas.filter(x => x.IdEmpresa === Id)[0];
  //   return of(item);
  // }
 
  // post(obj: Empresa) {
  //   obj.IdEmpresa = new Date().getTime();
    
  //   obj.CantidadEmpleados = +obj.CantidadEmpleados;

  //   Empresas.push(obj);
  //   return of(obj);
  // }
 
  // put(Id: number, obj: Empresa) {
  //   var indice;
  //   var items = Empresas.filter(function(item, index) {
  //     if (item.IdEmpresa === Id) {
  //       indice = index;
  //     }
  //   });

  //   obj.CantidadEmpleados = +obj.CantidadEmpleados;

  //   Empresas[indice] = obj;
  //   return of(obj);
  // }
 
  // delete(Id: number) {
  //   var items = Empresas.filter(x => x.IdEmpresa === Id);
  //   return of(items[0]);
  // }
}