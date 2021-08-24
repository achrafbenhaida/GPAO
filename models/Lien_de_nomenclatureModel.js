const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;


const Lien_de_nomenclatureSchema = new mongoose.Schema({
    compose: {
        type: ObjectId,
        ref: 'Article',
        trim: true,
        maxlength: 30,
        required: true,
    },
    composant: {
        type: ObjectId,
        ref: 'Article',
        trim: true,
        maxlength: 30,
        required: true,
    },
    quantite_de_composition: {
        type: Number,
        maxlength: 30,
        required: true,
        trim: true,
    }

}, {timestamps: true})

module.exports = mongoose.model('Lien_de_nomenclature',Lien_de_nomenclatureSchema)