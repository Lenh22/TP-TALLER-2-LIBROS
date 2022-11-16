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

    if(!poseeLasPropiedadesRequeridas(req.body)){
        console.log('Todos los campos tienen que estar llenos');
        res.json(false);
         return false;

    } 
    if(!esEmailValido(req.body.email)){
        console.log('El Mail es Invalido');
        res.json(false);
        return false;
    }
    if(!esContrasenaValida(req.body.contraseña)){
        console.log('La contraseña debe contener mínimo 6 caracteres, al menos una letra y un número');  
         res.json(false);
        return false; 
        }
       
        let query1 = `SELECT Count(id)  as cuenta FROM  Usuario WHERE email = '${req.body.email}'`;
        conexion.query(query1, (err, result1)=>{
            if(err){
                throw err; 
            }else{
                console.log(result1);
                let valor = JSON.parse(JSON.stringify(result1));
                valor = valor[0].cuenta; 

            if(valor > 0 ){
                console.log('EL MAIL ya existe');
               
                res.json(false); 
                return false;   
                }
                    let query = `INSERT INTO Usuario(id, nombre, userName, apellido,email, contraseña, direccion, rol, activo) VALUES ('${id}','${nombre}', '${userName}','${apellido}','${email}' ,'${contraseña}', '${domicilio}', 'user', false)`;
                    conexion.query(query, (error, result)=>{
                        if(error){
                            throw error;
                        }else{
                              console.log("Usuario Agregado");
                              
                              res.json(true);  
                              return true;
                        }
                    })

                      
            }
        })
   
});

//get Usuario
router.post('/login', (req, res)=>{ 
    const{email, contraseña}= req.body;
    if(!poseeLasPropiedadesRequeridasDeSeion(req.body)){
        console.log('Todos los campos tienen que estar llenos');
        res.json(false);
         return false;

    } 

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

//Validaciones
//que no tenga ninguno campo vacio en el registro
 const poseeLasPropiedadesRequeridas = propiedades =>{
    const propiedadesRequeridas = ['id', 'nombre', 'userName', 'apellido', 'email', 'contraseña', 'domicilio'];
    let existenTodasLasPropiedadesRequeridas = true;

    propiedadesRequeridas.forEach(propiedad => {
        if(!propiedades[propiedad])
            existenTodasLasPropiedadesRequeridas = false;
    });

    return existenTodasLasPropiedadesRequeridas;

}
//que no tenga ningun campo vacio de Sesion
const poseeLasPropiedadesRequeridasDeSeion= propiedades =>{
    const propiedadesRequeridas = ['email', 'contraseña'];
    let existenTodasLasPropiedadesRequeridas = true;

    propiedadesRequeridas.forEach(propiedad => {
        if(!propiedades[propiedad])
            existenTodasLasPropiedadesRequeridas = false;
    });

    return existenTodasLasPropiedadesRequeridas;
}

//que tenga el formato de mail
const esEmailValido = email => {
    return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
}
//que tenga al menos una letra, un numero y al menos 6 caracteres

const esContrasenaValida = contrasena => {
    return contrasena.match(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/);
}
//que el id sea valido

const esIdValido = id => {
    return id.match(/^[0-9a-fA-F]{24}$/);
}







module.exports = router;