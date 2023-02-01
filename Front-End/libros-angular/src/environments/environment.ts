// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  URL: 'https://6330b5d2cff0e7bf70e0cb48.mockapi.io/', // PRODUCTO, CARRITO, USUARIO, CATEGORIA
  URL2: 'https://634060dfd1fcddf69cb7ac22.mockapi.io/', // FAVORITO , ADMINISTRADOR
  api: 'http://localhost:3000/api',
  firebase: 'https://libreria-el-romano-default-rtdb.firebaseio.com/',
  token: '',

  // URL: '[Aqui ira la otra url]',
  firebaseConfig: {
    production: false,
    apiKey: 'AIzaSyBjY5vSDi-0rg1VD8kXvxhDPaZU35YyDhE',
    authDomain: 'libreria-el-romano.firebaseapp.com',
    databaseURL: 'https://libreria-el-romano-default-rtdb.firebaseio.com',
    projectId: 'libreria-el-romano',
    storageBucket: 'libreria-el-romano.appspot.com',
    messagingSenderId: '1011937829242',
    appId: '1:1011937829242:web:7ac97f6216c1e428d4b6c3',
    measurementId: 'G-VZ241G8N6C',
    URL: 'https://6330b5d2cff0e7bf70e0cb48.mockapi.io/', // PRODUCTO, CARRITO, USUARIO, CATEGORIA
    URL2: 'https://634060dfd1fcddf69cb7ac22.mockapi.io/', // FAVORITO , ADMINISTRADOR
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
