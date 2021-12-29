/*
    ruta:'/api/hospitales'
*/


//Necesitamos el 'Router' de Express para configurar las rutas
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();
const { getHospitales, crearHospital, actualizarHospital, eliminarHospital } = require('../controllers/hospitales');
const { validarJWT } = require('../middlewares/validar-jwt');


//Obtener Hospitales
router.get('/:busqueda', getHospitales);

//Crear Hospital
router.post('/',

    [
        validarJWT,
        check('nombre', 'El nombre del hospital es obligatorio').not().isEmpty(),
        validarCampos

    ], crearHospital
);

//Actualizar Hospitales
router.put('/:id', [],
    actualizarHospital
);

//Eliminar Hospitales

router.delete('/:id', [

], eliminarHospital);


module.exports = router;