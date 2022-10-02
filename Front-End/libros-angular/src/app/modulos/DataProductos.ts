export interface ListaProductos{
    autor: string,
    calificacion: number,
    categoria: string,
    descripcion: string,
    descuento: number,
    id: string,
    imagen: string,
    nombre: string,
    precio: number,
    stock: number,
}

export class Producto implements ListaProductos{
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

    constructor(){}
}