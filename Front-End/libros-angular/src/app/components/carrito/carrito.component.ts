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
  cantidad: number[] = [];
  productos: ListaProductos[] = [];

  constructor(private carritoService: CarritoService) {
    this.productos = [];
  }

  ngOnInit(): void {
    this.carritoService.productosCarrito.subscribe(
      (data) => (this.productos = data)
    );
    for (let i = 1; i < 10; i++) {
      this.cantidad.push(i);
    }
  }

  total(): number {
    let sum = 0;
    this.productos.forEach((producto) => {
      sum += producto.cantidad * producto.precio;
    });
    return sum;
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
    if (product.cantidad > 0) {
      product.cantidad--;
    }
  }

  verificarCantidad(product: ListaProductos): void {
    if (
      product.stock < product.cantidad ||
      product.cantidad < 0 ||
      product.cantidad === null
    ) {
      product.cantidad = 0;
    }
  }

  deleteProductCart() {
    this.carritoService.deleteProducto();
  }
}
