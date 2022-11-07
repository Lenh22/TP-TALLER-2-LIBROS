import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaProductos } from '../modulos/DataProductos';
import { Producto } from './../modulos/DataProductos';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  productos: ListaProductos[] = [];

  cantidad: number = 0;

  constructor(private http: HttpClient) {
    this.cantidad = 1;
  }

  addToCart(item: Producto) {
    // this.productos.push(item);
    let productos = [];

    if (localStorage.getItem('productos')) {
      productos = JSON.parse(localStorage.getItem('productos') || '');
    }
    let index = productos.findIndex((p: any) => p.id === item.id);
    if (index === -1) {
      productos.push(item);
      localStorage.setItem('productos', JSON.stringify(productos));
    } else {
      productos.splice(index, 1);
      productos.push(item);
      localStorage.setItem('productos', JSON.stringify(productos));
    }
    if (item.cantidad === 0) {
      productos.splice(index, 1);
      localStorage.setItem('productos', JSON.stringify(productos));
    }
    window.location.href = '/carrito';
  }

  getProductos() {
    if (localStorage.getItem('productos') === null) {
      this.productos = [];
      this.cantidad = this.productos.length;
    } else {
      this.productos = JSON.parse(localStorage.getItem('productos') || '');
      this.cantidad = this.productos.length;
    }
    return this.productos;
  }

  deleteProducto(producto: Producto) {
    for (let i = 0; i < this.productos.length; i++) {
      if (producto.id == this.productos[i].id) {
        this.productos.splice(i, 1);
        localStorage.setItem('productos', JSON.stringify(this.productos));
        window.location.href = '/carrito';
      }
    }
  }
}
