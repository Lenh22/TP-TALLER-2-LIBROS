import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ListaProductos } from '../modulos/DataProductos';

@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.css'],
})
export class ProductosHomeComponent implements OnInit {
  productosNuevos: ListaProductos[] = [];

  constructor(private serviciosProductos: ProductosService) {}

  ngOnInit(): void {
    this.serviciosProductos.productosNuevosHome().subscribe((arg) => {
      console.log(arg);
      this.productosNuevos = arg;
      console.log(this.productosNuevos);
    });
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }
}
