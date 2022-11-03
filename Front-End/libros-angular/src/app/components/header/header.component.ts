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
  show: number = 0;
  userName: string = JSON.stringify(localStorage.getItem("user"));
  carrito: ListaProductos[] = [];
  cantidad;
  formularioLogin = new FormGroup({
    usuario: new FormControl('', Validators.required),
    contrasenia: new FormControl('', Validators.required),
    
  });

  datauser: any;

  constructor(
    private loginService: LoginService,
    private servicioCategorias: CategoriaService,
    private styleService: StylesService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private carritoService: CarritoService,
    private firebaseLogin: FirebaseLoginService,
    private usuarioService: UsuarioService,
    
  ) {
    this.carrito = [];
    this.cantidad = 0;
    
    
  }

  

  
  ngOnInit(): void {
 
    //this.cantidad = this.carritoService.getCountProductsService();
    this.cantidad = localStorage.length;
    this.servicioCategorias.getCategorias().subscribe((data)  => {
    this.categorias = data;
   
    });
      this.carrito = this.carritoService.getAllProductsService();
      this.carritoService.disparadorCarrito.subscribe((data) => {
      this.carrito.push(data);
      this.cantidad = this.carritoService.getCountProductsService();
      localStorage.setItem('carrito',  JSON.stringify(this.carrito));
      
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

  showDrawer() {
    this.show = 1;
    console.log(this.show);
  }

  closeDrawer() {
    this.show = 0;
    console.log(this.show);
  }





}
