const express = require('express');
const router = express.Router();
const conexion = require('./config/conexion.js');




// asignamos todas las rutas

//Una consulta que trae todos los Productos
router.get('/productos', (req, res)=>{
 conexion.query(
    'SELECT p.nombre, p.descripcion , p.precio, p.descuento, p.stock, c.nombre as categoria, p.calificacion, p.imagen, p.autor, p.id from Producto p join  Categoria c on c.id = p.categoria'
    , (error, result)=>{
       if(error){
           throw error;
       }else{
        
           res.send(result);
       }
   })
});
//Una consulta trae el producto por ID
router.get('/productos/:id', (req, res)=>{
    let ids = req.params.id;
    id = parseInt(ids);
    
    conexion.query(
       'SELECT p.nombre, p.descripcion, p.precio, p.descuento, p.stock, c.nombre as categoria, p.calificacion, p.imagen, p.autor, p.id from Producto p join  Categoria c on c.id = p.categoria WHERE p.id = ?', [id], 
       (error, result)=>{
          if(error){
              throw error;
          }else{ 
           
              res.send(result);
          }
      }
  )
});

//Trae todas Las Categorias
router.get('/categorias', (req, res)=>{
    conexion.query(
       'SELECT * from Categoria'
       , (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.send(result);
          }
      })
   });

//Trae todas Las peliculas de un genero
router.get('/categorias/:id', (req, res)=>{
    let ids = req.params.id;
    //id = parseInt(ids);
    conexion.query(
       "SELECT p.nombre, p.descripcion, p.precio, p.descuento, p.stock, c.nombre as categoria, p.calificacion, p.imagen, p.autor, p.id from Producto p join Categoria c on c.id = p.categoria WHERE c.nombre = ?", [ids], 
        (error, result)=>{
          if(error){
              throw error;
          }else{
           
              res.send(result);
          }
      })
   }); 




module.exports = router;