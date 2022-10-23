import { Component, OnInit } from '@angular/core';
import { ListaProductos } from './modulos/DataProductos';
import { StylesService } from './servicios/styles.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private styleService: StylesService) {}

  productos: ListaProductos[] = [];
  title = 'libros-angular';

  ngOnInit(): void {}
}
