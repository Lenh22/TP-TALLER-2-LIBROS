import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Usuario} from '../modulos/DataUsuario';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable, from, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
   
  constructor(private http: HttpClient, private db: AngularFireDatabase, private afAuth: AngularFireAuth,) { }
  usuario : Usuario;
  
  //Agrega A BD el user
  agregarUsuario(usuario: any){
    // return this.http.post(environment.firebase + '/registrer', usuario);
    return this.db.list('/usuario').push(usuario);
  }

  // //trae de BD el user
  // traeUser(email: any, contraseña: any){
  //   return this.http.post(environment.firebase + '/usuario',{email, contraseña});
  //   // preguntar a la configuracion de Firebase Auth sobre el login
  // }



  traeUser(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password))
      .pipe(
        switchMap(result => {
          if (result.user) {
            const userId = result.user.uid;
            return this.db.object(`/usuario/${userId}`).valueChanges();
          } else {
            console.error('No se ha encontrado un usuario con las credenciales especificadas');
            return of(null);
          }
        }),
        catchError(error => {
          console.error(error);
          return of(null);
        })
      );
  }

 


  
}
