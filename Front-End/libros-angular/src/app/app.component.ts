import { Component, OnInit } from '@angular/core';
import { ListaProductos, Producto } from './modulos/DataProductos';
import { ProductosService } from './servicios/productos.service';
import { StylesService } from './servicios/styles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private styleService: StylesService,
    private productoService: ProductosService
  ) {}
  title = 'libros-angular';


  ngOnInit(): void {}
}
