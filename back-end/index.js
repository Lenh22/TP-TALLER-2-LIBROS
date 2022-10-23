const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const express = require('express');

//Conexion a BD
const connectionBD = ('./config/conexion.js');


const app = express();
const port = 3000
app.use(cors());
app.use(bodyParser.json());
 
// DECLARE JWT-secret
const JWT_Secret = 'unlamRLZ';
var testUser = { email: 'kelvin@gmai.com', password: '1234'};

app.get('/', (req, res) => {
    res.send('Bienvenidos a nuestra api! ')
});

app.post('/api/authenticate', (req, res) => {
    console.log(req.body);
    if (req.body) {
      var user = req.body;
      console.log(user)
   
      if (testUser.email===req.body.email && testUser.password === req.body.password) {
        var token = jwt.sign(user, JWT_Secret);
        res.status(200).send({
          signed_user: user,
          token: token
        });
      } else {
        res.status(403).send({
          errorMessage: 'Authorisation required!'
        });
      }
    } else {
      res.status(403).send({
        errorMessage: 'Please provide email and password'
      });
    }
   
  });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


//Rutas de Productos
app.use('/api', require('./router'));



