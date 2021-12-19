import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';


@Component({
  selector: 'app-caracteristicas-empleado',
  templateUrl: './caracteristicas-empleado.component.html',
  styles: [
  ]
})
export class CaracteristicasEmpleadoComponent implements OnInit {
 
 @Output() caracteristicasEmpleados = new EventEmitter<string>();

 agregarCaracteristicas(value: string) {
  this.caracteristicasEmpleados.emit(value);
  this.miServicio.muestraMensaje("caracteristica "+ value);

}

  constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

}
