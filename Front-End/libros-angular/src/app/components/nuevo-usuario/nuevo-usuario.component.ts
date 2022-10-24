import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service.';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.component.html',
  styleUrls: ['./nuevo-usuario.component.css'],
})
export class NuevoUsuarioComponent implements OnInit {
  registrarUsuario: FormGroup;
  items: Observable<any>[];

  constructor(
    private fb: FormBuilder,
    private afAuth: AngularFireAuth,
    private router: Router,
    private http: HttpClient,
    private firebaseLogin: FirebaseLoginService
  ) {
    this.registrarUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      name: ['', [Validators.required]],
      usuario: ['', Validators.required],
      repetirPassword: ['', [Validators.required]],
      apellido: ['', Validators.required],
      domicilio: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const url = environment.firebase + 'usuario.json';
    // this.http.get<any>(url).subscribe((data) => {
    //   console.log(data);
    // });
  }

  registrar() {
    const usuario = this.registrarUsuario.value.usuario;
    const email = this.registrarUsuario.value.email;
    const password = this.registrarUsuario.value.password;
    const repetirPassword = this.registrarUsuario.value.repetirPassword;
    if(password !== repetirPassword){
      alert("Las contraseñas deben coincidir");
      return;
    }
    const nombre = this.registrarUsuario.value.name;
    const apellido = this.registrarUsuario.value.apellido;
    const domicilio = this.registrarUsuario.value.domicilio;
    // console.log(email, password, repetirPassword, usuario, name, apellido, domicilio);
    this.firebaseLogin.signupFirebase(
      usuario,
      email,
      password,
      repetirPassword,
      nombre,
      apellido,
      domicilio
    );
  }
}
