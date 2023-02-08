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
  productoDetalle: Producto;
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
    this.productoService.getProductoById(id).subscribe((datos) => {
        // const datas = JSON.stringify(datos); //convertir a string
        // const dat = JSON.parse(datos); //convertir a objeto
        this.productoDetalle.autor = datos[0]; 
        this.productoDetalle.calificacion = datos[1]; 
        this.productoDetalle.categoria = datos[2];
        this.productoDetalle.descripcion = datos[3];
        this.productoDetalle.descuento = datos[4];
        this.productoDetalle.id = datos[5]; 
        this.productoDetalle.imagen = datos[6]; 
        this.productoDetalle.nombre = datos[7];
        this.productoDetalle.precio = datos[8];
        this.productoDetalle.cantidad = datos[9];
        // this.productoDetalle.cantidad = 1;
        console.log(this.productoDetalle);
        console.log(datos);
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
