import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styles: [
  ]
})
export class ProyectoComponent implements OnInit {

  constructor(private ruta:Router) { }

  ngOnInit(): void {
  }

  volverInicio(){
    this.ruta.navigate(['']);
  }
}
