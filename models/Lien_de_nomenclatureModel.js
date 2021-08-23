const mongoose = require('mongoose')
const { ObjectId1 } = mongoose.Schema;
const { ObjectId2 } = mongoose.Schema;

const Lien_de_nomenclatureSchema = new mongoose.Schema({
    compose: {
        type: ObjectId1,
        ref: 'Article',
        trim: true,
        maxlength: 30,
        required: true,
    },
    composant: {
        type: ObjectId2,
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