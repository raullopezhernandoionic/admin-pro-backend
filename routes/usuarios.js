/*
    Ruta: /api/usuarios

*/


//Necesitamos el 'Router' de Express para configurar las rutas
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();
const { getUsuarios, crearUsuario, actualizarUsuario, eliminarUsuario } = require('../controllers/usuarios');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');


//Obtener Usuarios
router.get('/', validarJWT, getUsuarios);

//Crear Usuario
router.post('/',

    [
        //Middlewares de extension 'express-validation'. Este metodo que viene con la libreria
        // nos permite la validacion de nuestros campos
        check('nombre', 'El nombre es obligatorio').not().isEmpty(),
        check('password', 'El password es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        validarCampos

    ], crearUsuario);

//Actualizar Usuarios
router.put('/:id', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('email', 'El email es obligatorio').isEmail(),
    check('role', 'El role es obligatorio').not().isEmpty(),
    validarCampos,
], actualizarUsuario);

//Eliminar Usuarios

router.delete('/:id', validarJWT, [

], eliminarUsuario);


module.exports = router;