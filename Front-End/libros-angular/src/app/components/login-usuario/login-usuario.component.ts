import { Component, OnInit, ViewChild,Output, EventEmitter } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service.';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Usuario } from 'src/app/modulos/DataUsuario';


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

  userName: any;

  constructor(
    private fb: FormBuilder,
    private firebaseLogin: FirebaseLoginService,
    private router: Router,
    private usuarioService: UsuarioService,
    
  ) {
    this.loginUsuario = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
    });

    this.recuperoClave = this.fb.group({
      emailRecuperar: ['', [Validators.required, Validators.email]]
    });
  }
 
  
 

  ngOnInit(): void {
   

  }



  login() {
  
    const email = this.loginUsuario.value.email;
    const password = this.loginUsuario.value.password;
    this.firebaseLogin.loginFirebase(email, password);
    this.closeLogin.nativeElement.click();
    
 this.router.navigate([" "]);
       }
  cambiarModal():void{
    this.closeLogin.nativeElement.click();
  }
  enviarClave(){
    const email = this.recuperoClave.value.emailRecuperar;
    console.log(email);
    this.firebaseLogin.recuperarClave(email);
    this.closeRecuperarClave.nativeElement.click();
  } 


  
  

  

}
