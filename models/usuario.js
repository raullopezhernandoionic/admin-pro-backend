const { Schema, model } = require('mongoose');

//Creacion del modelo para crear el Usuario en la base de Datos
const UsuarioSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    role: {
        type: String,
        required: true,
        default: 'USER_ROLE'
    },

    google: {
        type: Boolean,
        default: false

    }

});


UsuarioSchema.method('toJSON', function() {
    const { __v, _id, password, ...object } = this.toObject();
    object.uid = _id;
    return object;
})

//Ecportamos el modelo
module.exports = model('Usuario', UsuarioSchema);