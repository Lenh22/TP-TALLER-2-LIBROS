import { Injectable } from '@angular/core';
import { loginSendData } from '../modulos/DataLogin';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from "src/environments/environment";
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient,private router: Router) { }

  loginUsuario(datosFormularioLogin: loginSendData) {
    const url = `${environment.firebase}/authenticate`;
    const datos = {email:datosFormularioLogin.usuario,password:datosFormularioLogin.contrasenia};
    console.log(datosFormularioLogin);
    console.log(datos);
    
    return this.http
    .post<any>(
    `${url}`, datos)
    .pipe(
        tap((res: any) => {
            if (res) {
              localStorage.setItem('auth_token', res.token);
              localStorage.setItem('niv_user', res.token);
              
              
            }
            
        })
        
    );
   
  }
}
