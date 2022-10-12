import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ListaCategoria } from '../modulos/DataProductos';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  getCategorias() {
    const url = environment.URL + 'libreria/categoria ';
    return this.http.get<any>(url);
  }
}
