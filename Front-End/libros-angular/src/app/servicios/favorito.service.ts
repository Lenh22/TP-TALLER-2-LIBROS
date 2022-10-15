import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FavoritoService {
  constructor(private http: HttpClient) {}

  arryFavoritos: string[] = [];
  agregarProductoAFavoritos(producto: string[]) {
    this.verMisFavoritos().subscribe((data) => {
      this.arryFavoritos = data.producto;
    });
    producto.forEach((element) => {
      this.arryFavoritos.push(element);
    });
    const object = { id: 1, producto: this.arryFavoritos, usuario: '1' };
    const url = environment.firebase + 'favorito/' + object.id + '.json';
    this.http.put(url, object).subscribe(
      (resp) => console.log(resp),
      (error) => console.log(error)
    );
    this.verMisFavoritos();
  }

  verMisFavoritos() {
    const url = environment.firebase + 'favorito/1.json ';
    return this.http.get<any>(url);
  }
}
