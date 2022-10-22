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
    // console.log(
    //   userName,
    //   email,
    //   password,
    //   repetirPassword,
    //   nombre,
    //   apellido,
    //   domicilio
    // );
    this.afAuth
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        // console.log(user);
        const uid = user?.user?.uid || '';
        this.saveDataUser(uid, userName, email, nombre, apellido, domicilio);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //login
  loginFirebase(email: string, password: string) {
    this.afAuth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.user = user?.user?.email;
        if (user) {
          this.getTokenFirebase();
          this.getInfoUser(user?.user?.uid || '');
        }
        // console.log(user?.user);
        console.log(user?.user?.uid);
        // this.router.navigate(['/']);
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
}