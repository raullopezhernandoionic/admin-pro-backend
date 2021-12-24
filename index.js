require('dotenv').config();

const express = require('express');
const cors = require('cors');

//Decalaramos la base de datos conigurada en config,js
const { dbConnection } = require('./database/config.js');

//Crear el servidor de Express
const app = express();

//Configurar CORS
app.use(cors());

//Lamamos a la base de datos despues de la configuracion de Express
dbConnection()

//Usuario y Contraseña Base de datos (Mongo Atlas)
//raul
//nrPPcbCeV4qizfAs

//Rutas
//req --> Lo que se solicita :Headers y demas
//resp -->Lo que le enviamos al cliente



app.get('/', function(req, res) {

    res.json({
        ok: true,
        msg: 'Hola Mundo'
    });
})

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});