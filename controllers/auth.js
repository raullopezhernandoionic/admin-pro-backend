const { response } = require('express');
const bcrypt = require('bcryptjs');
const Usuario = require('../models/usuario');
const { generarJWT } = require('../helpers/jwt');
const usuario = require('../models/usuario');
const login = async(req, res = response) => {

    const { email, password } = req.body;
    try {

        //Verificar email

        const usuarioDB = await Usuario.findOne({ email });

        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: 'Email / Contraseña no validos'
            })
        }

        //Verificar Contraseña
        const validPassword = bcrypt.compareSync(password, usuarioDB.password);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: 'Contraseña no valida'
            })
        }

        //Generar el JW Token

        const token = await generarJWT(usuarioDB.id);

        res.json({
            ok: true,
            token: token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Error Inesperado. Hable con el administrador'
        })

    }

}

module.exports = {
    login
}