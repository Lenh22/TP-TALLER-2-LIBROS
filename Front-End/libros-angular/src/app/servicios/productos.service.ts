import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  //to do : cuando tengamos una api cambiar url y agregar ${environment.apiUrl}
  productosNuevosHome() {
    const url = 'https://6330b5d2cff0e7bf70e0cb48.mockapi.io/libreria/producto '
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

}
