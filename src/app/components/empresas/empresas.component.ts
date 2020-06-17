import { Component, OnInit } from '@angular/core';
import { Empresas, Empresa } from "../../models/empresa";
import { EmpresasService } from "../../services/empresas.service";
import { MockEmpresasService } from "../../services/mock-empresas.service";

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  
  Titulo = "Empresas";

  // TituloAccionABMC = {
  //   A: "(Agregar)",
  //   B: "(Eliminar)",
  //   M: "(Modificar)",
  //   C: "(Consultar)",
  //   L: "(Listado)"
  // };

  // AccionABMC = "L"; // inicialmente inicia en el listado de articulos (buscar con parametros)
  
  Emp: Empresa[] = [];
  // SinBusquedasRealizadas = true;
  // Pagina = 1; // inicia pagina 1

  constructor(
    //private empresasService: MockEmpresasService
    private empresasService: EmpresasService
  ) { }

  ngOnInit() {
     this.GetEmpresas();
  }

   GetEmpresas(){
     this.empresasService.get()
     .subscribe((res:Empresa[]) => {
       this.Emp = res;
     });
   }

  // Agregar() {
  //   this.AccionABMC = "A";
  // }

  // // Buscar segun los filtros, establecidos en FormReg
  // Buscar() {
  //    this.empresasService
  //     .get('')
  //     .subscribe((res: any) => {
  //       this.Emp = res.Lista;
  //     });
  //    this.SinBusquedasRealizadas = false;
  // }

  // // Obtengo un registro especifico según el Id
  // BuscarPorId(Dto, AccionABMC) {
  //   window.scroll(0, 0); // ir al incio del scroll
  //   this.AccionABMC = AccionABMC;
  // }

  // Consultar(Dto) {
  //   this.BuscarPorId(Dto, "C");
  // }

  // // comienza la modificacion, luego la confirma con el metodo Grabar
  // Modificar(Dto) {
  //   this.BuscarPorId(Dto, "M");
  // }

  // // grabar tanto altas como modificaciones
  // Grabar() {
  //   alert("Registro Grabado!");
  //   this.Volver();
  // }

  // // Volver desde Agregar/Modificar
  // Volver() {
  //   this.AccionABMC = "L";
  // }

}
