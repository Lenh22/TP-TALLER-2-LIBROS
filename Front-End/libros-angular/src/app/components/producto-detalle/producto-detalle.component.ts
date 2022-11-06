import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Producto } from 'src/app/modulos/DataProductos';
import { ProductosService } from 'src/app/servicios/productos.service';
import { ListaProductos } from './../../modulos/DataProductos';
import { CarritoService } from 'src/app/servicios/carrito.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css'],
})
export class ProductoDetalleComponent implements OnInit {
  productoDetalle: Producto = new Producto();
  cantidad: number[] = [];
  numValue: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: RouterModule,
    private productoService: ProductosService,
    public carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.productoService.getProductoById(id).subscribe(
      (data) => {
        const datas = JSON.stringify(data); //convertir a string
        const datos = JSON.parse(datas); //convertir a objeto

        this.productoDetalle.nombre = <string>datos[0].nombre; //asignar el nombre
        this.productoDetalle.id = <string>datos[0].id; //asignar el id
        this.productoDetalle.autor = <string>datos[0].autor;
        this.productoDetalle.calificacion = <number>datos[0].calificacion;
        this.productoDetalle.descripcion = <string>datos[0].descripcion; //asignar la altura
        this.productoDetalle.precio = <number>datos[0].precio; //asignar el peso
        this.productoDetalle.imagen = <string>datos[0].imagen; //la imagen
        this.productoDetalle.categoria = <string>datos[0].categoria;
        this.productoDetalle.stock = <number>datos[0].stock;
        //this.productoDetalle = <any>data;
        this.productoDetalle.cantidad = <number>datos[0].cantidad;
        this.productoDetalle.cantidad = 1;
        // console.log(data);
      },
      (err) => {
        console.log('Error al traer los detalles del producto');
      }
    );
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  setCantidad(producto: any) {
    if (producto.cantidad > producto.stock) {
      producto.cantidad = 1;
    }
  }

  upProductQuantity(product: ListaProductos): void {
    if (product.stock > product.cantidad) product.cantidad++;
  }

  downProductQuantity(product: ListaProductos): void {
    if (product.cantidad > 1) {
      product.cantidad--;
    }
  }

  verificarCantidad(product: ListaProductos): void {
    if (
      product.stock < product.cantidad ||
      product.cantidad < 0 ||
      product.cantidad === null
    ) {
      product.cantidad = 1;
    }
  }

  //carrito
  addToCart(producto: Producto) {
    this.carritoService.addToCart(producto);
  }
}
