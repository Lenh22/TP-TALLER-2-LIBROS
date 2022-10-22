export interface ListaUsuario {
  userName: string;
  email: string;
  nombre: string;
  apellido: string;
  domicilio: string;
  id: string;
}

export class Usuario implements ListaUsuario {
  userName: string;
  email: string;
  nombre: string;
  apellido: string;
  domicilio: string;
  id: string;

  constructor() {}
}
