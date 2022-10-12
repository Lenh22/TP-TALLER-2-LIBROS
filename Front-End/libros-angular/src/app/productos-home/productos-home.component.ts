import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { ListaCategoria, ListaProductos } from '../modulos/DataProductos';
import { CategoriaService } from '../servicios/categoria.service';
import { FavoritoService } from './../servicios/favorito.service';
const FILTER_PAG_REGEX = /[^0-9]/g;
@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.css'],
})
export class ProductosHomeComponent implements OnInit {
  productosNuevos: ListaProductos[] = [];
  categorias: ListaCategoria[] = [];

  page: number = 1;
  show: number = 0;

  productosFavoritos: string[] = [];

  constructor(
    private serviciosProductos: ProductosService,
    private servicioCategorias: CategoriaService,
    private fav: FavoritoService
  ) {}

  ngOnInit(): void {
    this.serviciosProductos.productosNuevosHome().subscribe((arg) => {
      this.productosNuevos = arg;
    });
    this.servicioCategorias.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  getCategoriaProducto(idCategoria: string) {
    const categoria = this.categorias.find(
      (element) => element.id == idCategoria
    );
    return categoria?.nombre;
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

  agregarFavorito(id: string) {
    this.productosFavoritos.push(id);
    this.fav.agregarProductoAFavoritos(this.productosFavoritos);
  }
}
