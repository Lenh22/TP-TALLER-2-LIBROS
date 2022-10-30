import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Usuario} from '../modulos/DataUsuario';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }
  usuario : Usuario;

  agregarUsuario(usuario: any){
    return this.http.post(environment.api + '/registrer', usuario);
  }

}
