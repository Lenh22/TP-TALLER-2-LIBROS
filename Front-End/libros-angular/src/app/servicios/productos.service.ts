import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Producto } from '../modulos/DataProductos';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  //to do : cuando tengamos una api cambiar url y agregar ${environment.apiUrl}
  

  constructor(private http: HttpClient) { }
  producto: Producto;
  
  //getTodosProductos
  productosNuevosHome(): Observable<any> {
    //const url = environment.URL + 'libreria/producto ';
    const url = environment.api + '/productos';
    return this.http.get<any>(`${url}`).pipe(
      tap((res: any) => {
        if (res) {
        }
      })
    );
  }
//get Productos por Categoria
    getProductsByCategory(id: string): Observable<any> {
    
     return this.http.get(environment.api + '/categorias/' + id);
   }

  
 //Get producto por ID
  getProductoById(id: string): Observable<any> {
    return this.http.get(environment.api + '/productos/' + id);
  }


//add producto
agregarProducto(producto: any){
  return this.http.post(environment.api + '/productos/', producto);
}
//update producto
updateProducto(id: string, producto: any){
  return this.http.put(environment.api + '/productos/' + id, producto);
}
//delete producto
deleteProducto(id: number){
  return this.http.delete(environment.api + '/productos/' + id);
}



  
}
