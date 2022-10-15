import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  constructor(private http: HttpClient) {}

  productosCarrito: string[] = [];

  agregarProductoAlCarrito(producto: string[]) {
    console.log(producto);
  }

  idProductos: string[];
  verCarrito() {
    const url = environment.firebase + 'carrito/1.json ';
    return this.http.get<any>(url);
  }
}
