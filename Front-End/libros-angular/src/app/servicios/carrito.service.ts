import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaProductos } from '../modulos/DataProductos';
import { Producto } from './../modulos/DataProductos';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  productos: ListaProductos[] = [];

  cantidad: number = 0;

  constructor(private http: HttpClient, private usuarioService: UsuarioService) {
    this.cantidad = 1;
  }

  addToCart(item: Producto) {
    // this.productos.push(item);
    let productos = [];

    if (localStorage.getItem('productos')) {
      productos = JSON.parse(localStorage.getItem('productos') || '');
    }
    let index = productos.findIndex((p: any) => p.id === item.id);
    if (index === -1) {
      productos.push(item);
      localStorage.setItem('productos', JSON.stringify(productos));
    } else {
      productos.splice(index, 1);
      productos.push(item);
      localStorage.setItem('productos', JSON.stringify(productos));
    }
    if (item.cantidad === 0) {
      productos.splice(index, 1);
      localStorage.setItem('productos', JSON.stringify(productos));
    }
    window.location.href = '/carrito';
  }

  getProductos() {
    if (localStorage.getItem('productos') === null) {
      this.productos = [];
      this.cantidad = this.productos.length;
    } else {
      this.productos = JSON.parse(localStorage.getItem('productos') || '');
      this.cantidad = this.productos.length;
    }
    return this.productos;
  }

  deleteProducto(producto: Producto) {
    for (let i = 0; i < this.productos.length; i++) {
      if (producto.id == this.productos[i].id) {
        this.productos.splice(i, 1);
        localStorage.setItem('productos', JSON.stringify(this.productos));
        window.location.href = '/carrito';
      }
    }
  }
  procesarCompra(){
    
    console.log(this.productos.length);
  
    var idUser= localStorage.getItem("uid"); 

   

    for(let i= 0; i<this.productos.length; i++){
      let idProd= this.productos[i].id;
      let cantidad = this.productos[i].cantidad;
      let precio= this.productos[i].precio;

      console.log(this.productos[i].precio);
      console.log(this.productos[i].cantidad);
      console.log(this.productos[i].id);

      this.procesarCompraDenserio( idUser,idProd, cantidad, precio).subscribe(
        res =>{
          console.log("Compra Realizada");
        }
      );
     
    }
    localStorage.removeItem('productos');
    
  }
  procesarCompraDenserio(idUser:any ,idProd: any, cantidad: any, precio: any){
    
        return this.http.post(environment.api + '/compra', { idUser,idProd, cantidad, precio});
  }

  
}