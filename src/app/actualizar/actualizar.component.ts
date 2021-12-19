import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLinkActive, Router } from '@angular/router';
import { Empleado } from '../empleado.modelo';
import { EmpleadosSService } from '../empleados-s.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html'
})
export class ActualizarComponent implements OnInit {
  title = 'appEmpleados';
  empleados: Empleado[] = [];
  cuadroNombre: string = "";
  cuadroApellido: string = "";
  cuadroCargo: string = "";
  cuadroSalario: number = 0;
  indice: number;

  constructor(private miServicio: ServicioEmpleadosService, private dataServicio: EmpleadosSService, private route: ActivatedRoute, private ruta:Router) {
    this.empleados = this.dataServicio.empleados;
  }
  ngOnInit(): void {
    this.indice = this.route.snapshot.params['id'];
    let empleado: Empleado = this.dataServicio.encontrarEmpleado(this.indice);
    this.cuadroNombre = empleado.nombre;
    this.cuadroApellido = empleado.apellido;
    this.cuadroCargo = empleado.cargo;
    this.cuadroSalario = empleado.salario;

  }

 

  actualizarEmpleado() {
    let miEmpleado = new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    //this.miServicio.muestraMensaje("nombre del empleado " + miEmpleado.nombre);
    this.dataServicio.actualizarEmpleado(this.indice, miEmpleado);
    this.ruta.navigate(['']);
  }

  eliminarEmpleado() {
    this.dataServicio.eliminarEmpleado(this.indice);
    this.ruta.navigate(['']);
  }
}
