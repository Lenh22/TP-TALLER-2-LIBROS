import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  //to do : cuando tengamos una api cambiar url y agregar ${environment.apiUrl}
  

  constructor(private http: HttpClient) { }

  //getProdsuctos
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

   public getProductsByCategory(id: string): Observable<any> {
    
     return this.http.get(environment.api + '/categorias/' + id);
   }

  
 
  getProductoById(id: string): Observable<any> {
    return this.http.get(environment.api + '/productos/' + id);
  }
  
}
