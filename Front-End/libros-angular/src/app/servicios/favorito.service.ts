import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {
  constructor(private http: HttpClient) {}

  agregarProductoAFavoritos(producto: string[]) {
    const object = { id: 1, producto: [...producto], usuario: 'luis' };
    const url = environment.URL2 + 'libreria/favorito/1';
    this.http.put(url, object).subscribe(
      (resp) => console.log(resp),
      (error) => console.log(error)
    );
  }
}
