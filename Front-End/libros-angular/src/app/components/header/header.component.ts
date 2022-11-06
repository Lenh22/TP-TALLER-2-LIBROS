import { Component, Inject, OnInit } from '@angular/core';

import {
  Categoria,
  ListaCategoria,
  ListaProductos,
} from 'src/app/modulos/DataProductos';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { StylesService } from './../../servicios/styles.service';
import { Usuario } from 'src/app/modulos/DataUsuario';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginSendData } from 'src/app/modulos/DataLogin';
import { LoginService } from 'src/app/servicios/login.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { FirebaseLoginService } from 'src/app/servicios/firebase-login.service.';
import { CarritoService } from 'src/app/servicios/carrito.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categorias: ListaCategoria[] = [];
  categoria: string = 'Categorias';
  userName: string = JSON.stringify(localStorage.getItem('user'));
  formularioLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required),
  });

  datauser: any;

  constructor(
    private loginService: LoginService,
    private servicioCategorias: CategoriaService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private carritoService: CarritoService,
    private firebaseLogin: FirebaseLoginService,
    private usuarioService: UsuarioService
  ) {
    //this.userName = JSON.stringify(localStorage.getItem("user"));
  }

  ngOnInit(): void {
    this.servicioCategorias.getCategorias().subscribe((data) => {
      this.categorias = data;
    });
  }

  onLogin(): void {
    const datosFormularioLogin: loginSendData = this.formularioLogin.value;
    this.loginService.loginUsuario(datosFormularioLogin).subscribe((arg) => {
      console.log(arg);
    });
  }

  /* login usuario*/
  estaLogueado() {
    return this.firebaseLogin.isLogin();
  }

  logOut() {
    this.firebaseLogin.logOut();
    //window.location.replace("/");
  }
}
