import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import {
  Categoria,
  ListaCategoria,
  ListaProductos,
} from 'src/app/modulos/DataProductos';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { ProductosService } from 'src/app/servicios/productos.service';
import { StylesService } from './../../servicios/styles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categorias: ListaCategoria[] = [];
  show: number = 0;

  constructor(
    private servicioCategorias: CategoriaService,
    private styleService: StylesService,
    private productoServicio: ProductosService
  ) {}

  search: string;
  productosBuscados: ListaProductos[] = [];
  mensaje: string;

  ngOnInit(): void {
    this.servicioCategorias.getCategorias().subscribe((data) => {
      this.categorias = data;
      console.log('Categorias', this.categorias);
    });
  }

  searchProductHeader(search: string) {
    this.productoServicio.buscarLibro(search);
    this.productosBuscados = this.productoServicio.buscarLibro(search);
    this.mensaje = this.productoServicio.mensajeNoExiste;
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
