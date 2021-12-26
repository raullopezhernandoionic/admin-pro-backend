const { response } = require('express');
const { validationResult } = require('express-validator');

const validarCampos = (req, res = response, next) => {


    const errores = validationResult(req);

    if (!errores.isEmpty()) {
        return res.status(400).json({
            ok: false,
            errors: errores.mapped()

        });
    }

    //Si llegamos a este punto quiere decir que no hay errores con lo cual
    // se sigue con el codigo --> next()
    next();

}

module.exports = {
    validarCampos
}