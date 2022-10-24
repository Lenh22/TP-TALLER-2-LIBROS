import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service.';

@Component({
  selector: 'app-login-usuario',
  templateUrl: './login-usuario.component.html',
  styleUrls: ['./login-usuario.component.css'],
})
export class LoginUsuarioComponent implements OnInit {
  loginUsuario: FormGroup;
  recuperoClave:FormGroup;
  @ViewChild('closeLogin') closeLogin: any;
  @ViewChild('closeRecuperarClave') closeRecuperarClave: any;

  constructor(
    private fb: FormBuilder,
    private firebaseLogin: FirebaseLoginService,
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });

    this.recuperoClave = this.fb.group({
      emailRecuperar: ['', [Validators.required, Validators.email]]
    });
  }

  ngOnInit(): void {}

  login() {
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    // console.log(email, password);
    this.firebaseLogin.loginFirebase(email, password);
    this.closeLogin.nativeElement.click();
  }
  cambiarModal(){
    this.closeLogin.nativeElement.click();
  }
  enviarClave(){
    const email = this.recuperoClave.value.emailRecuperar;
    console.log(email);
    this.firebaseLogin.recuperarClave(email);
    this.closeRecuperarClave.nativeElement.click();
  }
}
