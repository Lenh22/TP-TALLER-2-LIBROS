# El Romano

**Proyecto integrador de Taller Web 2** — E-commerce de libros (trabajo grupal universitario).

[![Demo en vivo](https://img.shields.io/badge/demo-Vercel-black?style=flat-square&logo=vercel)](https://tp-taller-2-libros.vercel.app/)

> [**Ver la tienda "El Romano" en vivo**](https://tp-taller-2-libros.vercel.app/)

---

## Descripción

Sitio web de e-commerce de libros que incluye **Back-End** (Node.js + Express) y **Front-End** (Angular). Incluye autenticación JWT, CRUD, carrito, filtros, búsqueda y método de pago.

### Stack principal

| Capa        | Tecnología                          |
|------------|--------------------------------------|
| Front-End  | Angular 12, Bootstrap 5, Font Awesome, Angular Material |
| Back-End   | Node.js, Express                     |
| Base de datos | MySQL (local) / Firebase (deploy) |
| Deploy     | Front: Vercel — Back: Firebase      |

### Funcionalidades

- **Autenticación:** Login / registro con JWT y Firebase
- **Productos:** CRUD, filtros por categoría, buscador
- **Carrito de compras** y método de pago
- **Validaciones** en formularios
- **Peticiones HTTP** a API REST y MockAPI

---

## Estructura del proyecto

```
TP-TALLER-2-LIBROS/
│
├── back-end/                    # API REST (Node.js + Express)
│   ├── config/
│   │   └── conexion.js          # Conexión MySQL
│   ├── index.js                 # Entrada del servidor (puerto 3000)
│   ├── router.js                # Rutas API (productos, categorías, etc.)
│   ├── package.json
│   └── package-lock.json
│
├── Front-End/
│   └── libros-angular/          # Aplicación Angular
│       ├── src/
│       │   ├── app/
│       │   │   ├── components/       # Componentes reutilizables
│       │   │   │   ├── search/
│       │   │   │   ├── producto-detalle/
│       │   │   │   └── presentation/
│       │   │   ├── servicios/       # Servicios (API, login, carrito, etc.)
│       │   │   ├── modulos/         # Modelos/interfaces (DataUsuario, DataProductos, etc.)
│       │   │   ├── home/
│       │   │   ├── login-admin/
│       │   │   ├── productos-home/
│       │   │   └── ...
│       │   ├── assets/              # Imágenes, estilos, Font Awesome
│       │   ├── environments/        # environment.ts / environment.prod.ts
│       │   ├── index.html
│       │   ├── main.ts
│       │   ├── styles.css
│       │   └── polyfills.ts
│       ├── angular.json
│       ├── package.json
│       └── tsconfig.json
│
├── node_modules/                # Dependencias (raíz; ver nota abajo)
└── README.md
```

**Nota:** El Back-End tiene sus propias dependencias en `back-end/node_modules`. El Front-End las tiene en `Front-End/libros-angular/node_modules`.

---

## Requisitos previos

- **Node.js** (v14 o superior recomendado) — [Descargar](https://nodejs.org/)
- **npm** (incluido con Node.js)
- **MySQL** (para ejecutar el Back-End en local) — [Descargar](https://dev.mysql.com/downloads/)
- **Angular CLI** (opcional; se puede usar `npx ng`)

---

## Cómo ejecutarlo

### 1. Clonar el repositorio

```bash
git clone https://github.com/<tu-usuario>/TP-TALLER-2-LIBROS.git
cd TP-TALLER-2-LIBROS
```

### 2. Base de datos MySQL (Back-End local)

1. Instala y arranca MySQL.
2. Crea la base de datos y tablas que use el proyecto (por ejemplo `Libreria`, tablas `Producto`, `Categoria`, etc.). Si tienes un script `.sql` en el repo, ejecútalo.
3. Opcional: ajusta la conexión en `back-end/config/conexion.js`:

```javascript
// back-end/config/conexion.js
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'tu_password',
    database: 'Libreria',
});
```

### 3. Ejecutar el Back-End

```bash
cd back-end
npm install
npm run dev
```

- El servidor quedará en **http://localhost:3000**
- Las rutas de la API están bajo el prefijo **`/api`** (ej: `http://localhost:3000/api/productos`, `http://localhost:3000/api/categorias`).

Para producción:

```bash
npm start
```

### 4. Ejecutar el Front-End

En **otra terminal**:

```bash
cd Front-End/libros-angular
npm install
npm start
```

O con Angular CLI:

```bash
npx ng serve
```

- La aplicación se abrirá en **http://localhost:4200**

### 5. Conectar Front con Back

El Front usa la URL del API en `Front-End/libros-angular/src/environments/environment.ts`:

```ts
api: 'http://localhost:3000/api'
```

En producción se usa `environment.prod.ts`; asegúrate de que `api` apunte a tu Back-End desplegado (por ejemplo en Firebase).

---

## Scripts útiles

### Back-End (`back-end/`)

| Comando       | Descripción                    |
|---------------|--------------------------------|
| `npm run dev` | Servidor con nodemon (reinicio automático) |
| `npm start`   | Servidor con `node index`      |

### Front-End (`Front-End/libros-angular/`)

| Comando       | Descripción                    |
|---------------|--------------------------------|
| `npm start`   | Servidor de desarrollo (puerto 4200) |
| `ng build`    | Build de producción             |
| `ng test`     | Tests con Karma/Jasmine        |

---

## Despliegue

- **Front-End:** Vercel — [https://tp-taller-2-libros.vercel.app/](https://tp-taller-2-libros.vercel.app/)
- **Back-End:** Firebase

Para producción, configura las URLs y variables en `environment.prod.ts` y en tu proyecto de Firebase/Vercel según corresponda.

---

## Participantes

| Nombre            | GitHub |
|-------------------|--------|
| Leandro Alonso    | [Lenh22](https://github.com/Lenh22) |
| Gaston Santos     | [gastonsantos](https://github.com/gastonsantos) |
| Eduardo Chilon    | [eduarchilon](https://github.com/eduarchilon) |
| Rodrigo Consentino| [cosentinowebdev](https://github.com/cosentinowebdev) |
| Sofia Soengas     | [SofiaSoengas](https://github.com/SofiaSoengas) |

---

## Licencia

Proyecto académico — Taller Web 2.
