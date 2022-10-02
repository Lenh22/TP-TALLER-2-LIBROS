import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  // {path: '', redirectTo: '/inicio', pathMatch: 'full'}, // para q cualquier direccion mande a inicio 
  // {path: 'inicio', component: InicioComponent},
  {path: '', component: HomeComponent},
  {path: 'producto/:id', component:ProductoDetalleComponent},
  {path: 'registrar', component:NuevoUsuarioComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
