import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {
  constructor(private http: HttpClient) {}

  agregarProductoAFavoritos(producto: string[]) {
    const object = { id: 1, producto: [...producto], usuario: '1' };
    const url = environment.URL2 + 'libreria/favorito/' + object.id;
    this.http.put(url, object).subscribe(
      (resp) => console.log(resp),
      (error) => console.log(error)
    );
    this.verMisFavoritos();
  }

  verMisFavoritos() {
    const url = environment.URL2 + 'libreria/favorito/1 ';
    return this.http.get<any>(`${url}`);
  }
}
