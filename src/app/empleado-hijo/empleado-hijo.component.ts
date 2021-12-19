import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.modelo';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styles: [
  ]
})
export class EmpleadoHijoComponent implements OnInit {
  constructor() { }

  @Input() empleado:Empleado;
  @Input() i:number;

  arrayCaracteristicas = [];

  agregarCaracteristica(nuevaCaracteristica: string) {
    
    this.arrayCaracteristicas.push(nuevaCaracteristica);

  }

 

  ngOnInit(): void {
  }

}
