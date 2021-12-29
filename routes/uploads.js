/*

    ruta: api/uploads/

*/

const { Router } = require('express');
const expressFileUpload = require('express-fileupload');
const { validarJWT } = require('../middlewares/validar-jwt');
const { fileUpload, retornaImagen } = require('../controllers/uploads');
const router = Router();

router.use(expressFileUpload());

//Subir Archivos (Imagenes). Tambien se puede modificar el controlador para
// subir pdfs, .txt etc 
router.put('/:tipo/:id', validarJWT, fileUpload);
router.get('/:tipo/:foto', retornaImagen);


module.exports = router;