import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { loginSendData } from 'src/app/modulos/DataLogin';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  formularioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    contrasenia: new FormControl('',Validators.required),
  })
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  onLogin():void{
    const datosFormularioLogin:loginSendData=this.formularioLogin.value;
    this.loginService.loginUsuario(datosFormularioLogin)
      .subscribe(arg =>{
        console.log(arg);
      });
    
  }

}
