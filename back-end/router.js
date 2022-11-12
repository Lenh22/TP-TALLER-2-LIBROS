const express = require('express');
const router = express.Router();
const conexion = require('./config/conexion.js');
var randomstring = require('randomstring');



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



   //Agrega Usuario

router.post('/registrer/', (req, res)=>{

    const{id, nombre, userName, apellido, email, contraseña, domicilio, rol, activo}= req.body;
    let query = `INSERT INTO Usuario (id, nombre, userName, apellido, email, contraseña, direccion, rol, activo) VALUES ('${id}','${nombre}', '${userName}','${apellido}', '${email}', '${contraseña}', '${domicilio}', 'user', false)`;
    //let query = `INSERT INTO Usuario (id, nombre) VALUES ('12323','Gaston')`;
    conexion.query(query, (error, result)=>{
          if(error){
              throw error;
          }else{
                console.log("Usuario Agregado")
              res.json({status: 'Usuario agregado'});
          }
      }
  )
});

//get Usuario
router.post('/login', (req, res)=>{
    const{email, contraseña}= req.body;

   // const {UID } = req.body;
    //let query = `SELECT userName FROM  Usuario WHERE id = '${UID}' `;
  let query = `SELECT userName FROM  Usuario WHERE email = '${email}' and contraseña = '${contraseña}'  `;
    conexion.query(query, (error, result)=>{
          if(error){
              throw error;
          }else{  
                console.log(result)
              
              res.send(result);
          }
     }
  )
});


//recibo compra 
router.post('/orden', (req, res)=>{
    const{orden, total}= req.body;
    let query = `INSERT INTO compra(numeroOrden,total) values('${orden}','${total}')`;
    conexion.query(query, (error, restul)=>{
        if(error){
            throw error;
        }else{
            console.log("Compra Ingresada")
            res.json({status: 'Compra Ingresada'});
        }
    }) 
});
//Confirmo Compra


router.post('/compra/', (req, res)=>{

    const{idUser, idProd, cantidad, precio}= req.body;
    const numeroOrden = randomstring.generate(20);
    let query = `INSERT INTO ProdComprados(numeroOrden, id_usuario, id_prod,cantidad, precio) values('${numeroOrden}', '${idUser}','${idProd}','${cantidad}','${precio}')`;
    conexion.query(query, (error, result)=>{
        if(error){
            throw error;
        }else{
            console.log("Compra Confirmada")
            res.json({status: 'Compra Confirmada'});
        }
    }) 
});













module.exports = router;