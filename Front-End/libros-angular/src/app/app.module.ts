import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { ProductosHomeComponent } from './productos-home/productos-home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { BannerHomeComponent } from './components/banner-home/banner-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import {MatInputModule} from '@angular/material/input';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    ProductosHomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductoDetalleComponent,
    NuevoUsuarioComponent,
    CarritoComponent,
    BannerHomeComponent,
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    NgbPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
