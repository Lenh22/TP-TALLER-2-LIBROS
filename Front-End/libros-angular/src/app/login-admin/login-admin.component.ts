import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { loginSendData } from '../modulos/DataLogin';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  loginForm = new FormGroup({
    usuario: new FormControl(''),
    contrasenia: new FormControl(''),
  });

  constructor(    public dialogRef: MatDialogRef<LoginAdminComponent>,
    @Inject(MAT_DIALOG_DATA) public data: loginSendData,) { }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close(this.loginForm.value);
  }

}
