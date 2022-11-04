import { Component, OnInit } from '@angular/core';
import { ListaProductos } from 'src/app/modulos/DataProductos';
import { CarritoService } from 'src/app/servicios/carrito.service';
//import { Form, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  cantidadCarrito: number;
  productos: ListaProductos[] = [];

  constructor(private carritoService: CarritoService) {
    this.productos = [];
  }

  ngOnInit(): void {
    this.carritoService.productosCarrito.subscribe((data) => {
      if (data.length > 0) {
        this.productos = data;
      } else {
        this.productos = this.carritoService.getAllProductsService();
      }
    });
    this.productos.forEach((data) => {
      this.cantidadCarrito += data.cantidad;
    });
  }

  total(): number {
    let sum = 0;
    this.productos.forEach((producto) => {
      sum += producto.cantidad * producto.precio;
    });
    return sum;
  }

  setCantidad(producto: any) {
    if (producto.cantidad > producto.stock) {
      producto.cantidad = 1;
    }
  }

  // selectCount(event: any) {
  //   this.numValue = parseInt(event.target.value);
  //   if (this.numValue === null || this.numValue === 0 || isNaN(this.numValue)) {
  //     this.numValue = 1;
  //   }
  //   // console.log(this.numValue);
  // }

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

  deleteProductCart() {
    this.carritoService.deleteProducto();
  }
}
