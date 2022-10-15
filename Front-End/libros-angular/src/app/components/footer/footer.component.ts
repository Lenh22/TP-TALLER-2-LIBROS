import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginAdminComponent } from 'src/app/login-admin/login-admin.component';
import { LoginService } from 'src/app/servicios/login.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  constructor(public dialog: MatDialog,private loginService:LoginService) { }

  ngOnInit(): void {
  }
  loginAdmin() {
    const dialogRef = this.dialog.open(LoginAdminComponent, {
      width: '400px',
      data: {},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      this.loginService.loginUsuario(result)
        .subscribe(arg => {
          console.log(arg);
          
        });
      
    });
    }

}
