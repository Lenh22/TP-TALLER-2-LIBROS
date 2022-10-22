import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ListaProductos } from '../modulos/DataProductos';
import { CarritoService } from '../servicios/carrito.service';
const FILTER_PAG_REGEX = /[^0-9]/g;
@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.css'],
})
export class ProductosHomeComponent implements OnInit {
  @Input() dataCartEntry: any;
  productosNuevos: ListaProductos[] = [];
  productoCarrito: ListaProductos;

  page: number = 1;
  show: number = 0;

  constructor(
    private serviciosProductos: ProductosService,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.serviciosProductos.productosNuevosHome().subscribe((arg) => {
      this.productosNuevos = arg;
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

  //carrito
  addToCart(item: ListaProductos) {
    this.carritoService.addToCartService(item);
    this.carritoService.disparadorCarrito.emit(item);
  }

  deleteProduct(id: string) {
    this.carritoService.deleteProductService(id);
  }
}
