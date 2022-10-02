import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Producto } from 'src/app/modulos/DataProductos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  productoDetalle:Producto = new Producto();

  constructor(
              private activatedRoute: ActivatedRoute,
              private router:RouterModule,
              private productoService:ProductosService
            ) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.productoService.detalle(id).subscribe(
      data=>{
        this.productoDetalle = data;
      },err =>{
        console.log("Error al traer los detalles del producto")
      }
    );
  }

}
