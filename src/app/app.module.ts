import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//componentes
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaracteristicasEmpleadoComponent } from './caracteristicas-empleado/caracteristicas-empleado.component';
import { HomeComponent } from './home/home.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { ContactoComponent } from './contacto/contacto.component';
import { QuienesSomosComponent } from './quienes-somos/quienes-somos.component';

//servicios
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosSService } from './empleados-s.service';
//rutas
import { APP_ROUTING} from './app-routes';
import { ActualizarComponent } from './actualizar/actualizar.component';
@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaracteristicasEmpleadoComponent,
    HomeComponent,
    ProyectoComponent,
    ContactoComponent,
    QuienesSomosComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,FormsModule, APP_ROUTING
  ],
  providers: [ ServicioEmpleadosService, EmpleadosSService],
  bootstrap: [AppComponent]
})
export class AppModule { }
