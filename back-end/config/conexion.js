const  mysql = require('mysql');
const express = require('express');
var cors = require('cors')
const app = express();
app.use(cors()) // Use this

 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Libreria',
    //port: 3306
 });
 connection.connect(function(error){
    if(error){
       console.warn('MySQL no disponible:', error.message, '- Iniciá MySQL o revisá config en config/conexion.js');
    }else{
       console.log('Conexion correcta.');
    }
 });
   
 
module.exports = connection;