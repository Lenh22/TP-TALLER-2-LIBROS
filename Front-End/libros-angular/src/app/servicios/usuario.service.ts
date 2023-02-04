import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Usuario} from '../modulos/DataUsuario';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   
  constructor(private http: HttpClient, private db: AngularFireDatabase) { }
  usuario : Usuario;
  
  //Agrega A BD el user
  agregarUsuario(usuario: any){
    // return this.http.post(environment.firebase + '/registrer', usuario);
    return this.db.list('/usuario').push(usuario);
  }

  //trae de BD el user
  traeUser(email: any, contraseña: any){
    return this.http.post(environment.firebase + '/login',{email, contraseña});
    // preguntar a la configuracion de Firebase Auth sobre el login
  }

 

 


  
}
