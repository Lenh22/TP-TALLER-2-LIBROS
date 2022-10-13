import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import {
  Categoria,
  Favorito,
  ListaCategoria,
  ListaProductos,
} from 'src/app/modulos/DataProductos';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { StylesService } from './../../servicios/styles.service';
import { FavoritoService } from './../../servicios/favorito.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categorias: ListaCategoria[] = [];
  listafavoritos: Favorito[] = [];
  show: number = 0;

  constructor(
    private servicioCategorias: CategoriaService,
    private styleService: StylesService,
    private productoServicio: ProductosService,
    private favoritos: FavoritoService
  ) {}

  search: string;
  productosBuscados: ListaProductos[] = [];
  mensaje: string;

  ngOnInit(): void {
    this.servicioCategorias.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
    this.favoritos.verMisFavoritos().subscribe((data) => {
      this.listafavoritos = data.producto;
      console.log(this.listafavoritos);
    });
  }

  searchProductHeader(search: string) {
    this.productoServicio.buscarLibro(search);
    this.productosBuscados = this.productoServicio.buscarLibro(search);
    if (this.productosBuscados?.length === 0 && search !== null) {
      this.mensaje = 'No existe ese producto.';
    } else {
      this.mensaje = '';
    }
  }

  showDrawer() {
    this.show = 1;
    console.log(this.show);
  }

  closeDrawer() {
    this.show = 0;
    console.log(this.show);
  }
}
