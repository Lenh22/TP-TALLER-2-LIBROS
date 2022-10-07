import { Component, OnInit } from '@angular/core';
import { Categoria, ListaCategoria } from 'src/app/modulos/DataProductos';
import { CategoriaService } from 'src/app/servicios/categoria.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categorias: ListaCategoria[] = [];

  constructor(private servicioCategorias: CategoriaService) {}

  ngOnInit(): void {
    this.servicioCategorias.getCategorias().subscribe((data) => {
      this.categorias = data;
      console.log('Categorias', this.categorias);
    });
  }
}
