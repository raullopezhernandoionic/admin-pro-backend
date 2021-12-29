const { Schema, model } = require('mongoose');

//Creacion del modelo para crear el Usuario en la base de Datos
const HospitalSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    usuario: {
        //Indicamos a Mongoose que hay una relacion entre 'Usuario' y 'Hospital'
        required: true,
        type: Schema.Types.ObjectId,
        ref: 'Usuario'
    }

}, { collection: 'hospitales' });


HospitalSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//Ecportamos el modelo
module.exports = model('Hospital', HospitalSchema);