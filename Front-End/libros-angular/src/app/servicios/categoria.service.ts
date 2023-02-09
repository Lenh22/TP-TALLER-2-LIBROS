import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Categoria } from '../modulos/DataProductos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  getCategorias():Observable<any>{
    return this.db.list<Categoria>('/categoria').valueChanges();
  }

  getCategoriaId(id:number):Observable<any>{
    // return this.http.get<any>(environment.URL + "/categoria/" + id); 
    return this.db.list<Categoria>('/categoria/' + id).valueChanges();
  }
}
