import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {
  constructor(private http: HttpClient) {}

  getCategorias() {
    const url = environment.firebase + '/categoria';
    return this.http.get<any>(url);
  }

  getCategoriaId(id:number){
    const url = environment.firebase + "/categoria/" + id;
    return this.http.get<any>(url); 
  }
}
