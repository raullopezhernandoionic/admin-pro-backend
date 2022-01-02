require('dotenv').config();

const express = require('express');
const cors = require('cors');

//Decalaramos la base de datos conigurada en config,js
const { dbConnection } = require('./database/config.js');

//Crear el servidor de Express
const app = express();

//Middleware - Configurar CORS
app.use(cors());

//Middleware - Lectura y parseo del body
app.use(express.json());

//Lamamos a la base de datos despues de la configuracion de Express
dbConnection()

//Directorio Publico
app.use(express.static('public'));

//Usuario y Contraseña Base de datos (Mongo Atlas)
//raul
//nrPPcbCeV4qizfAs

//Rutas
//req --> Lo que se solicita :Headers y demas
//resp -->Lo que le enviamos al cliente




//Middleware
//Tenemos una raiz comun que es 'api/usuarios' y vamos a requerir lo que se 
// encuentra en el archivo especificado por require. Es decir cualquier cosa
// que entre por 'api/usuarios' redirecionamos a './routes/usuarios'

//Rutas Usuarios
app.use('/api/usuarios', require('./routes/usuarios'));
app.use('/api/login', require('./routes/auth'));

//Ruta hospital
app.use('/api/hospitales', require('./routes/hospitales'));

//Ruta medicos
app.use('/api/medicos', require('./routes/medicos'));

//Ruta busqueda 
app.use('/api/todo', require('./routes/busquedas'));

//Ruta upload o subida de archivos
app.use('/api/upload', require('./routes/uploads'));

app.listen(process.env.PORT, () => {
    console.log('Servidor corriendo en el puerto ' + process.env.PORT);
});