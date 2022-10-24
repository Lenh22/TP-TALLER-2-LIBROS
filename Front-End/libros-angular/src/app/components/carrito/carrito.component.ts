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

  carrito: ListaProductos[] = [];
   sum ;
 
  
  
  constructor(private carritoService: CarritoService) { 
    this.carrito = [];
    this.sum = 0;
  
    
  }

  ngOnInit(): void {


  
    this.getAllProducts();
    this.sum =  this.carritoService.sumaProductsPrecio();
   

    }
   // this.carrito = JSON.parse(<string>localStorage.getItem("1"));
    

 

  
 getAllProducts(){
  this.carrito = this.carritoService.getAllProductsService();
 }

 sacarProdDeCarrito(id: string){

this.carritoService.deleteProductService(id);

 }

 reload (){
  location.reload();
 }

  
}
 
