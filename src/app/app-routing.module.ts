import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgregarComponent } from './Componentes/agregar/agregar.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ModificarComponent } from './Componentes/modificar/modificar.component';

const routes: Routes = [
  {path: '', redirectTo: '/Inicio', pathMatch:'full'},
  {path: 'Inicio', component:InicioComponent},
  {path: 'Agregar', component:AgregarComponent},
  {path: 'Edicion/:id', component:ModificarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
