import { StringMap } from "@angular/compiler/src/compiler_facade_interface";
import { BlockLike } from "typescript";

export interface ListaUsuario {
  userName: string;
  email: string;
  contraseña: string;
  nombre: string;
  apellido: string;
  domicilio: string;
  id: string;
  rol: string;
  activo: boolean;
}

export class Usuario implements ListaUsuario {
  userName: string;
  email: string;
  contraseña: string;
  nombre: string;
  apellido: string;
  domicilio: string;
  id: string;
  rol: string;
  activo: boolean;

  constructor() {}
}
