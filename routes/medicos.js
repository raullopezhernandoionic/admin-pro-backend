/*
    Medicos
    ruta:'/api/medico'
*/

//Necesitamos el 'Router' de Express para configurar las rutas
const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();
const { getMedicos, crearMedico, actualizarMedico, eliminarMedico } = require('../controllers/medicos');
const { validarJWT } = require('../middlewares/validar-jwt');

//Obtener Hospitales
router.get('/', getMedicos);

//Crear Medico
router.post('/',

    [
        validarJWT,
        check('nombre', 'El nombre del medico es obligatorio').not().isEmpty(),
        check('hospital', 'El hospital id debe ser valido').isMongoId(),
        validarCampos

    ], crearMedico
);

//Actualizar Medicos
router.put('/:id', [],
    actualizarMedico
);

//Eliminar Medicos

router.delete('/:id', [

], eliminarMedico);


module.exports = router;