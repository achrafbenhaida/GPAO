const mongoose = require('mongoose')
const { ObjectId } = mongoose.Schema;
// const { ObjectId2 } = mongoose.Schema;

const RemplacementSchema = new mongoose.Schema({
    remplace_compose: {
        type: ObjectId,
        ref: 'Lien_de_nomenclature',
        trim: true,
        maxlength: 30,
        required: true,
    },
    remplace_composant: {
        type: ObjectId,
        ref: 'Lien_de_nomenclature',
        trim: true,
        maxlength: 30,
        required: true,
    },
    remplacant_compose: {
        type: ObjectId,
        ref: 'Lien_de_nomenclature',
        trim: true,
        maxlength: 30,
        required: true,
    },
    remplacant_composant: {
        type: ObjectId,
        ref: 'Lien_de_nomenclature',
        trim: true,
        maxlength: 30,
        required: true,
    },
    date_de_remplacement: {
        type: Date,
        required: true,
        trim: true,
    }

}, {timestamps: true})

module.exports = mongoose.model('Remplacement',RemplacementSchema)