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

  constructor() {}
}

export class Categoria implements ListaCategoria {
  id: string;
  nombre: string;
}

export interface ListaFavorito {
  id: string;
  usuario: string;
  producto: string[];
}

export class Favorito implements ListaFavorito {
  id: string;
  usuario: string;
  producto: string[];
}
