import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ContactoComponent } from "./contacto/contacto.component";
import { ProyectoComponent } from "./proyecto/proyecto.component";
import { QuienesSomosComponent } from "./quienes-somos/quienes-somos.component";
import { ActualizarComponent } from "./actualizar/actualizar.component";

const APP_ROUTES: Routes=[
{path:'',component: HomeComponent},
{path:'contacto',component: ContactoComponent},
{path:'proyecto',component: ProyectoComponent},
{path:'actualizar/:id',component: ActualizarComponent},
{path:'quienes-somos',component: QuienesSomosComponent},
{path:'**',pathMatch: 'full',redirectTo:''}

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);