import { HttpClient } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ListaProductos } from '../modulos/DataProductos';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  @Output() disparadorCarrito: EventEmitter<any> = new EventEmitter();

  private _productosCarrito: ListaProductos[] = [];
  private _productosCarritoSubjects: BehaviorSubject<ListaProductos[]> =
    new BehaviorSubject(this._productosCarrito);
  public productosCarrito: Observable<ListaProductos[]> =
    this._productosCarritoSubjects.asObservable();
  cantidadCarrito: number = 0;

  constructor(private http: HttpClient) {}

  addToCartService(item: ListaProductos) {
    // localStorage.setItem(
    //   item.id,
    //   JSON.stringify(Object.assign({ ...item, cantidad: count }))
    // );
    let index = this._productosCarrito.findIndex((p) => p.id === item.id);
    if (index === -1) {
      this._productosCarrito.push(Object.assign({ ...item }));
    } else {
      this._productosCarrito.splice(index, 1);
      this._productosCarrito.push(Object.assign({ ...item }));
    }
    if (item.cantidad === 0) {
      this._productosCarrito.splice(index, 1);
    }
  }

  getProductService(id: string) {
    const product = JSON.parse(localStorage.getItem(id) || '');
    return product;
  }

  // getAllProductsService() {
  //   const products: ListaProductos[] = [];

  //   const keys = Object.keys(localStorage);
  //   keys.forEach((key) => {
  //     products.push(JSON.parse(localStorage[key]));
  //   });
  //   return products;
  // }

  // sumaProductsPrecio() {
  //   var sum = 0;
  //   this.getAllProductsService().forEach((item) => {
  //     const suma = item.precio;
  //     sum = suma + sum;
  //   });
  //   console.log(sum);
  //   return sum;
  // }

  // getCountProductsService() {
  //   const products: any = this.getAllProductsService();
  //   let count = 0;
  //   products.forEach((product: ListaProductos) => {
  //     count++;
  //   });
  //   console.log('cantidad total : ', count);
  //   this.cantidadCarrito = count;
  //   return count;
  // }

  // incrementCartCount(id: string) {
  //   let product: ListaProductos = this.getProduct(id);
  //   product.cantidad++;
  //   console.log('aumento: ', product.cantidad);
  // }

  //decrementCartCount(id: string) {
  // let product = this.getProduct(id);
  // if (product.cantidad === 1) {
  //  this.deleteProduct(id);
  //} else {
  //product.cantidad--;
  // }
  //   console.log('decremento: ', product.cantidad);
  //}

  deleteProductService(id: string) {
    localStorage.removeItem(id);
  }

  deleteProducto() {
    this._productosCarrito.splice(0, this._productosCarrito.length);
  }
}
