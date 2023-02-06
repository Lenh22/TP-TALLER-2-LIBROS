import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from '../servicios/productos.service';
import { CategoriaService } from '../servicios/categoria.service';
import { ListaProductos } from '../modulos/DataProductos';
import { CarritoService } from '../servicios/carrito.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

const FILTER_PAG_REGEX = /[^0-9]/g;
@Component({
  selector: 'app-productos-home',
  templateUrl: './productos-home.component.html',
  styleUrls: ['./productos-home.component.css'],
})
export class ProductosHomeComponent implements OnInit {
  @Input() dataCartEntry: any;
  productosNuevos: any;
  productoCarrito: ListaProductos;
  categorias:any;
  loading: boolean;

  page: number = 1;
  show: number = 0;

  constructor(
    private serviciosProductos: ProductosService,
    private serviciosCategorias: CategoriaService,
    private activatedRoute: ActivatedRoute,
    private router: RouterModule,
    private carritoService: CarritoService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.categorias = this.serviciosCategorias.getCategorias();
    console.log("Categorias traida en productos-home: " +this.categorias);
    this.activatedRoute.paramMap.subscribe(() => {
      //cuando cambia un parametro de la URL se ejecuta la funcion
      const id = this.activatedRoute.snapshot.params.id;
      if (id == null) {
        this.serviciosProductos.productosNuevosHome().subscribe(data => {
          this.productosNuevos = data;
          this.loading = false;
        });
      } else {
        console.log('Llego al else de productos porque el ID no es null')
        this.loading = true;
        this.serviciosProductos.getProductsByCategory(id).subscribe(filtrado => {
          this.productosNuevos = filtrado;
          this.loading = false;
        });
      }
    });
  }

  numSequence(n: number): Array<number> {
    return Array(n);
  }

  selectPage(page: string) {
    this.page = parseInt(page, 10) || 1;
  }

  formatInput(input: HTMLInputElement) {
    input.value = input.value.replace(FILTER_PAG_REGEX, '');
  }
}
