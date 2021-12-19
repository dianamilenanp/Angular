import { Injectable } from '@angular/core';
import { Empleado } from './empleado.modelo';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosSService {

  constructor() { }

  empleados:Empleado[]=[
    new Empleado("Milena","paez", "inge",2500),
    new Empleado("Sofia","sanchez", "inge",7500),
    new Empleado("Yulieth","hernandez", "inge",8500),
    new Empleado("Cesar","obando", "inge",4500),
   
   ];

   agregarEmpleadoServicio(miEmpleado:Empleado){
    this.empleados.push(miEmpleado);
   }

   encontrarEmpleado(index:number){
     let empleado:Empleado=this.empleados[index];
     return empleado;
   }

   actualizarEmpleado(index:number,empleado:Empleado){
     let empleadoModificar=this.empleados[index];
     empleadoModificar.nombre=empleado.nombre;
     empleadoModificar.apellido=empleado.apellido;
     empleadoModificar.cargo=empleado.cargo;
     empleadoModificar.salario=empleado.salario;

  }
  eliminarEmpleado(index:number){
    this.empleados.splice(index,1);
  }

}
