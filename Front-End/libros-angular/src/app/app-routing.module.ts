import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { HomeComponent } from './home/home.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { HomeAdminComponent } from './admin/home/home.component';
const routes: Routes = [
  // {path: '', redirectTo: '/inicio', pathMatch: 'full'}, // para q cualquier direccion mande a inicio 
  // {path: 'inicio', component: InicioComponent},
  {path: '', component: HomeComponent },
  {path: 'categoria/:id', component: HomeComponent },
  {path: 'admin', component:HomeAdminComponent,
  children:[
    {
      path: 'admin', 
      loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule)
    },
  ]},
  {path: 'producto/:id', component:ProductoDetalleComponent},
  {path: 'registrar', component:NuevoUsuarioComponent},
  {path: 'carrito', component: CarritoComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
