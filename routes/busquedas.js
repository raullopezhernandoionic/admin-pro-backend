/*

    ruta: api/todo/:busqueda

*/

//Necesitamos el 'Router' de Express para configurar las rutas
const { Router } = require('express');


const router = Router();
const { getTodo, getDocumentosColeccion } = require('../controllers/busquedas');
const { validarJWT } = require('../middlewares/validar-jwt');


//Obtener Busquedas Generica (Varias Colecciones)
router.get('/:busqueda', validarJWT, getTodo);

//Obtener Busqueda Especifica (Una coleccion)
router.get('/coleccion/:tabla/:busqueda', validarJWT, getDocumentosColeccion);






module.exports = router;