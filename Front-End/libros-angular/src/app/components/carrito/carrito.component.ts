import { Component, OnInit } from '@angular/core';
import { ListaProductos} from 'src/app/modulos/DataProductos';
import { CarritoService } from 'src/app/servicios/carrito.service';
//import { Form, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  cantidad: number[] = [];
  numValue: number = 1;

  carrito: ListaProductos[] = [];
   sum ;
 
  
  
  constructor(private carritoService: CarritoService) { 
    this.carrito = [];
    this.sum = 0;
  
    
  }

  ngOnInit(): void {
    for (let i = 1; i < 10; i++) {
      this.cantidad.push(i);
    }
  }

  selectCount(event: any) {
    this.numValue = parseInt(event.target.value);
    if (this.numValue === null || this.numValue === 0 || isNaN(this.numValue)) {
      this.numValue = 1;
    }
    // console.log(this.numValue);
  }
}
 
