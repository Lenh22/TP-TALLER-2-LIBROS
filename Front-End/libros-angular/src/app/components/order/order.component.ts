import { Component, OnInit } from '@angular/core';

import { CarritoService } from 'src/app/servicios/carrito.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  

  constructor(
  
    public carritoService: CarritoService) { 
 
     

    }

  ngOnInit(): void {
    //this.carritoService.procesarCompra;
  }
  procesarCompra(){
    this.carritoService.procesarCompra();
  }
  redirect(){
    window.location.href = '';
  }


}
