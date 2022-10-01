import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InicioComponent } from './inicio/inicio.component';
const routes: Routes = [
  // {path: '', redirectTo: '/inicio', pathMatch: 'full'}, // para q cualquier direccion mande a inicio 
  // {path: 'inicio', component: InicioComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
