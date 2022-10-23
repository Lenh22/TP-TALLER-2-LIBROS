import { environment } from 'src/environments/environment';
import { ListaProductos } from './../modulos/DataProductos';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductosService } from './productos.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor(
    private http: HttpClient,
    private serviciosProductos: ProductosService
  ) {}

  productosNuevosHome() {
    this.serviciosProductos.productosNuevosHome().subscribe((arg) => {
      this.listaProductos = arg;
    });
  }

  listaProductos: ListaProductos[] = [];
  productosBuscados: ListaProductos[] = [];
  buscarLibro(value: string) {
    this.productosNuevosHome();
    this.productosBuscados = this.listaProductos.filter((product) =>
      product.nombre.toLowerCase().includes(value.toLowerCase())
    );
    return this.productosBuscados;
  }
}
