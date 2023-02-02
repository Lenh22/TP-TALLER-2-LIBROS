import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  getCategorias() {
    // cont url = environment.URL + '/categoria';
    const url = environment.URL + '/categoria';
    return this.http.get<any>(url);
  }

  getCategoriaId(id:number){
    const url = environment.URL + "/categoria/" + id;
    return this.http.get<any>(url); 
  }
}
