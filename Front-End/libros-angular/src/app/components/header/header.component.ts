import { Component, OnInit } from '@angular/core';

import { Categoria, ListaCategoria } from 'src/app/modulos/DataProductos';
import { CategoriaService } from 'src/app/servicios/categoria.service';
import { StylesService } from './../../servicios/styles.service';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginSendData } from 'src/app/modulos/DataLogin';
import { LoginService } from 'src/app/servicios/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  categorias: ListaCategoria[] = [];
  show: number = 0;



  formularioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    contrasenia: new FormControl('',Validators.required),
  })
  constructor(private loginService:LoginService,
    private servicioCategorias: CategoriaService,
    private styleService: StylesService) { }


  ngOnInit(): void {
    this.servicioCategorias.getCategorias().subscribe((data) => {
      this.categorias = data;
      console.log('Categorias', this.categorias);
    });
  }
  onLogin():void{
    const datosFormularioLogin:loginSendData=this.formularioLogin.value;
    this.loginService.loginUsuario(datosFormularioLogin)
      .subscribe(arg =>{
        console.log(arg);
      });
    
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
