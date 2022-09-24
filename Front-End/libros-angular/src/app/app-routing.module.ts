import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //Aqui hay que agregar el enrutamiento
  // Ej
  //home
  // {path:'login',component:LoginComponent}, cuando pase la url localhost/login ira a ese componente
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
