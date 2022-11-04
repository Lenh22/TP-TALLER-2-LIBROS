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
  carrito: ListaProductos[] = [];
  total: number = 0;

  productos: ListaProductos[] = [
    {
      autor: '',
      calificacion: 0,
      categoria: '',
      descripcion: '',
      descuento: 0,
      id: '',
      imagen: '',
      nombre: '',
      precio: 1600,
      stock: 10,
      cantidad: 1,
    },
    {
      autor: '',
      calificacion: 0,
      categoria: '',
      descripcion: '',
      descuento: 0,
      id: '',
      imagen: '',
      nombre: '',
      precio: 1600,
      stock: 10,
      cantidad: 2,
    },
  ];

  constructor(private carritoService: CarritoService) {
    this.carrito = [];
  }

  ngOnInit(): void {
    for (let i = 1; i < 10; i++) {
      this.cantidad.push(i);
    }
    this.productos.forEach((producto) => {
      this.total += producto.cantidad * producto.precio;
    });
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
}
