import { Component, OnInit } from '@angular/core';
import { Categoria, ListaCategoria } from 'src/app/modulos/DataProductos';
import { CategoriaService } from 'src/app/servicios/categoria.service';
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
    private styleService: StylesService
  ) {}

  ngOnInit(): void {
    this.servicioCategorias.getCategorias().subscribe((data) => {
      this.categorias = data;
      console.log('Categorias', this.categorias);
    });
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
