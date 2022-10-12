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
import { CarritoService } from './servicios/carrito.service';
import { CategoriaService } from './servicios/categoria.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { StylesService } from './servicios/styles.service';

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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [CarritoService, CategoriaService, StylesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
