import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ListaProductos } from '../modulos/DataProductos';
const FILTER_PAG_REGEX = /[^0-9]/g;
@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.css'],
})
export class ProductosHomeComponent implements OnInit {
  productosNuevos: ListaProductos[] = [];
  page:number = 1;

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

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
}
