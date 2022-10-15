import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { ListaProductos } from '../modulos/DataProductos';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  //to do : cuando tengamos una api cambiar url y agregar ${environment.apiUrl}

  //getProdsuctos
  productosNuevosHome() {
    const url = environment.firebase + 'producto.json';
    return this.http.get<any>(url);
  }

  // public getProductsByCategory(category: any) {
  //   const url = environment.URL + 'libreria/categoria';
  //   return this.http.get<any>(`${url}`).pipe(
  //     tap((res: any) => {
  //       if (res) {
  //       }
  //     })
  //   );
  // }

  listaProductos: ListaProductos[] = [];
  productosBuscados: ListaProductos[] = [];
  buscarLibro(value: string) {
    this.productosNuevosHome().subscribe((arg) => {
      this.listaProductos = [...arg];
    });
    this.productosBuscados = this.listaProductos.filter((product) =>
      product.nombre.toLowerCase().includes(value.toLowerCase())
    );
    return this.productosBuscados;
  }

  constructor(private http: HttpClient) {}

  //getPorId
  public detalle(id: number): Observable<any> {
    return this.http.get<any>(environment.URL + `libreria/detalle/${id}`); //cambiar a la url adecuada
  }
}
