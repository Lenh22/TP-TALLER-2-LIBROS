
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { Usuario } from '../modulos/DataUsuario';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root',
})
export class FirebaseLoginService {
  token: string;
  user: any;
  usuario: Usuario;
  usuarios: Usuario[];
  loading: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router,
    private afAuth: AngularFireAuth,
    private cookie: CookieService,
    public db: AngularFireDatabase
  ) {}

  //saveDataUser
  saveDataUser(
    id: string,
    userName: string,
    email: string,
    nombre: string,
    apellido: string,
    domicilio: string
  ) {
    try {
      const result = this.db.database.ref('usuario/' + id).set({
        id: id,
        userName: userName,
        email: email,
        nombre: nombre,
        apellido: apellido,
        domicilio: domicilio,
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  //signup
  signupFirebase(
    userName: string,
    email: string,
    password: string,
    repetirPassword: string,
    nombre: string,
    apellido: string,
    domicilio: string
  ) {
    // console.log( userName,email,password,repetirPassword, nombre,apellido, domicilio);
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        const uid = user?.user?.uid || '';
        this.saveDataUser(uid, userName, email, nombre, apellido, domicilio);
       //saveDataBase(parametros); /*Falta funcion que se guarde en la base de datos justo aca*/
        this.verifyEmail();
      })
      .catch((error) => {
        console.log(error);
      });
  }
    verifyEmail(){
      this.afAuth.currentUser.then(user => user?.sendEmailVerification())
                            .then(()=>{
                              console.log('Se le ha enviado a su email la confirmacion de registro. Muchas gracias!');
                              this.router.navigate([''])
                            });
    }

  //login
  loginFirebase(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        if(user.user?.emailVerified){ //Pregunta si esta verificado el email
          this.user = user?.user?.email;
          if (user) {
            this.getTokenFirebase();
            this.getInfoUser(user?.user?.uid || '');
          }
          // console.log(user?.user);
          console.log(user?.user?.uid);
          // this.router.navigate(['/']);
        }else{
          alert('Por favor, verifique su email');
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  getInfoUser(id: string) {
    const url = environment.firebase + 'usuario/' + id + '.json';
    this.http.get(url).subscribe(
      (resp) => {

      },
      (error) => console.log(error)
    );
  }

  getTokenFirebase() {
    firebase
      .auth()
      .currentUser?.getIdToken()
      .then((token) => {
        this.token = token;
        this.cookie.set('token', this.token);
        console.log('token=>', this.token);
      });
  }

  getIdToken() {
    // return this.token;
    return this.cookie.get('token');
  }

  isLogin() {
    return this.cookie.get('token');
    // return this.token;
  }

  //logOut
  logOut() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        this.token = '';
        this.cookie.set('token', this.token);
        console.log('token vacio=>', this.token);
        // this.router.navigate(['/']);
      });
  }
//Recuperacion de Clave
  recuperarClave(email:string){
    this.loading = true;
    this.afAuth.sendPasswordResetEmail(email).then(() => {
    alert("Se ha enviado un mensaje al email: "+ email);
    }).catch((error)=>{
      this.loading=false;
    });
  }
}

