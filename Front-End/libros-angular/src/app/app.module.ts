import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { MatInputModule } from '@angular/material/input';
import { PresentationComponent } from './components/presentation/presentation.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { FirebaseLoginService } from './servicios/firebase-login.service.';

import { CookieService } from 'ngx-cookie-service';

import { SearchComponent } from './components/search/search.component';
import { CarritoProductoComponent } from './components/carrito-producto/carrito-producto.component';
import { CartCantidadComponent } from './components/cart-cantidad/cart-cantidad.component';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductosHomeComponent,
    HeaderComponent,
    FooterComponent,
    ProductoDetalleComponent,
    NuevoUsuarioComponent,
    CarritoComponent,
    BannerHomeComponent,
    LoginAdminComponent,
    PresentationComponent,
    LoginUsuarioComponent,
    SearchComponent,
    CarritoProductoComponent,
    CartCantidadComponent,
    OrderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [
    CarritoService,
    CategoriaService,
    StylesService,
    FirebaseLoginService,
    CookieService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
