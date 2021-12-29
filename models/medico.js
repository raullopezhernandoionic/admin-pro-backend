const { Schema, model } = require('mongoose');

//Creacion del modelo para crear el Usuario en la base de Datos
const MedicoSchema = Schema({

    nombre: {
        type: String,
        required: true
    },
    img: {
        type: String,
    },
    usuario: {
        //Indicamos a Mongoose que hay una relacion entre 'Medico' y 'Usuario'
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    },

    hospital: {
        //Indicamos a Mongoose que hay una relacion entre 'Medico' y 'Hospital'
        type: Schema.Types.ObjectId,
        ref: 'Hospital',
        required: true
    }

}, { collection: 'medicos' });


MedicoSchema.method('toJSON', function() {
    const { __v, ...object } = this.toObject();
    return object;
})

//Ecportamos el modelo
module.exports = model('Medico', MedicoSchema);