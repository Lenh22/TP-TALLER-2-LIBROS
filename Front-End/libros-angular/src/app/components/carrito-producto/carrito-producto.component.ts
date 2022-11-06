import { Component, Input, OnInit } from '@angular/core';
import { Producto, ListaProductos } from './../../modulos/DataProductos';

@Component({
  selector: 'app-carrito-producto',
  templateUrl: './carrito-producto.component.html',
  styleUrls: ['./carrito-producto.component.css']
})
export class CarritoProductoComponent implements OnInit {
  @Input() producto: Producto;
  constructor() { }

  ngOnInit(): void {
  }

  setCantidad(producto: any) {
    if (producto.cantidad > producto.stock) {
      producto.cantidad = 1;
    }
  }

  upProductQuantity(product: ListaProductos): void {
    if (product.stock > product.cantidad) product.cantidad++;
  }

  downProductQuantity(product: ListaProductos): void {
    if (product.cantidad > 1) {
      product.cantidad--;
    }
  }

  verificarCantidad(product: ListaProductos): void {
    if (
      product.stock < product.cantidad ||
      product.cantidad < 0 ||
      product.cantidad === null
    ) {
      product.cantidad = 1;
    }
  }

}
