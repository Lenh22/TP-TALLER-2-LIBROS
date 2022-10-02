import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //to do : cuando tengamos una api cambiar url y agregar ${environment.apiUrl}
  productosNuevosHome() {
    const url = environment.URL + 'libreria/producto '
    return this.http
    .get<any>(
    `${url}`)
    .pipe(
        tap((res: any) => {
            if (res) {
                
            }
        })
    );
  }

  constructor(private http: HttpClient) { }

  public detalle(id:number):Observable<any>{
    return this.http.get<any>(environment.URL + `libreria/detalle/${id}`); //cambiar a la url adecuada
  }

}
