export interface ListaProductos {
  autor: string;
  calificacion: number;
  categoria: string;
  descripcion: string;
  descuento: number;
  id: string;
  imagen: string;
  nombre: string;
  precio: number;
  stock: number;
  cantidad: number | 1;
}

export interface ListaCategoria {
  id: string;
  nombre: string;
}

export class Producto implements ListaProductos {
  autor: string; //
  calificacion: number; //
  categoria: string; //
  descripcion: string; //
  descuento: number;
  id: string;
  imagen: string; //
  nombre: string; //
  precio: number;
  stock: number; //
  cantidad: number | 1;

  constructor() {}
}

export class Categoria implements ListaCategoria {
  id: string;
  nombre: string;
}
