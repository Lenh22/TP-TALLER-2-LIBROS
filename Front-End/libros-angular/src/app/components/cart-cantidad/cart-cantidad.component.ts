import { Component, OnInit } from '@angular/core';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ListaProductos } from './../../modulos/DataProductos';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-cantidad',
  templateUrl: './cart-cantidad.component.html',
  styleUrls: ['./cart-cantidad.component.css'],
})
export class CartCantidadComponent implements OnInit {
  cantidadCarrito: number;
  productos: ListaProductos[] = [];
  constructor(public carritoService: CarritoService) {}

  ngOnInit() {
    this.productos = this.carritoService.getProductos();
  }
}
