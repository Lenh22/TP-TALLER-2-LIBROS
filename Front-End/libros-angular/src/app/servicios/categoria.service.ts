import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient, private db: AngularFireDatabase) {}

  getCategorias() {
    // return this.http.get<any>(environment.URL + '/categoria');
    return this.db.list('/categoria').valueChanges();
  }

  getCategoriaId(id:number){
    // return this.http.get<any>(environment.URL + "/categoria/" + id); 
    return this.db.list('/categoria/' + id).valueChanges();
  }
}
