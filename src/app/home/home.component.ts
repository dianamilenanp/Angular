import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.modelo';
import { EmpleadosSService } from '../empleados-s.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  
  ngOnInit(): void {
  }
  
  constructor(private miServicio:ServicioEmpleadosService,private dataServicio:EmpleadosSService ){
    this.empleados=this.dataServicio.empleados;
   }
   title = 'appEmpleados';
  empleados:Empleado[]=[];
 
 cuadroNombre:string="";
 cuadroApellido:string="";
 cuadroCargo:string="";
 cuadroSalario:number=0;
 
 agregarEmpleado(){
  let miEmpleado = new Empleado(this.cuadroNombre,this.cuadroApellido,this.cuadroCargo, this.cuadroSalario);
  this.miServicio.muestraMensaje("nombre del empleado "+ miEmpleado.nombre);
 this.dataServicio.agregarEmpleadoServicio(miEmpleado);
 }

}
