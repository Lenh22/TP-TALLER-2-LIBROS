import { SearchService } from './../../servicios/search.service';
import { ListaProductos } from './../../modulos/DataProductos';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  categorias: any;
  constructor(private servicioCategorias: CategoriaService,private productoServicio: SearchService) {}

  search: string;
  productosBuscados: ListaProductos[] = [];
  mensaje: string;

  ngOnInit(): void {
    // this.servicioCategorias.getCategorias().subscribe((data) => {
    //   this.categorias = data;
    // });
  }
 
  searchProductHeader(search: string) {
    console.log(search);
    this.productoServicio.buscarLibro(search);
    this.productosBuscados = this.productoServicio.buscarLibro(search);
    if (this.productosBuscados?.length === 0 && search !== null) {
      this.mensaje = 'No existe ese producto.';
    } else {
      this.mensaje = '';
    }
  }
  
}
