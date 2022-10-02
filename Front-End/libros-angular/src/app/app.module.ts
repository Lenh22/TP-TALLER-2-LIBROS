import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { HomeComponent } from './home/home.component';
import { NewsletterComponent } from './newsletter/newsletter.component';
import { ProductosHomeComponent } from './productos-home/productos-home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { CarritoComponent } from './components/carrito/carrito.component';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HomeComponent,
    NewsletterComponent,
    ProductosHomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductoDetalleComponent,
    NuevoUsuarioComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
