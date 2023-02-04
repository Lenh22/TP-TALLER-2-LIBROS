import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';
import { Producto } from '../modulos/DataProductos';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';


@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  //to do : cuando tengamos una api cambiar url y agregar ${environment.apiUrl}
  

  constructor(private http: HttpClient, private db: AngularFireDatabase) { }

  
  // //getTodosProductos
  // productosNuevosHome(): Observable<any> {
  //   //const url = environment.URL + 'libreria/producto ';
  //   const url = environment.URL + '/producto';
  //   return this.http.get<any>(`${url}`).pipe(
  //     tap((res: any) => {
  //       if (res) {
  //       }
  //     })
  //   );
  // }
  productosNuevosHome():Observable<any>{
  //  return this.http.get(environment.firebaseConfig.databaseURL +'/producto.json');
      return this.db.list('/producto').valueChanges();
  }


//get Productos por Categoria
    getProductsByCategory(id: string): Observable<any> {
    
    //  return this.http.get(environment.firebaseConfig.databaseURL +'/categoria/' + id + '.json');
     return this.db.list('/categoria/' + id).valueChanges();
  
   }

  
 //Get producto por ID
  getProductoById(id: string): Observable<any> {
    // return this.http.get(environment.firebaseConfig.databaseURL +'/producto/' + id + '.json');
    return this.db.list('/producto/' + id).valueChanges();
  }


//add producto
agregarProducto(producto: any){
  // return this.http.post(environment.firebaseConfig.databaseURL +'/producto.json', producto);
  this.db.list('/producto').push(producto);
}
//update producto
updateProducto(id: string, producto: any){
  // return this.http.put(environment.firebaseConfig.databaseURL +'/producto/' + id + '.json', producto);
  return this.db.object('/producto/' + id).update(producto);
}
//delete producto
deleteProducto(id: number){
  // return this.http.delete(environment.firebaseConfig.databaseURL +'/producto/' + id + '.json');
  this.db.list('/producto/'+ id).remove();
}



  
}
