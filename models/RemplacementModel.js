const mongoose = require('mongoose')
const { ObjectId1 } = mongoose.Schema;
const { ObjectId2 } = mongoose.Schema;

const RemplacementSchema = new mongoose.Schema({
    remplace_compose: {
        type: ObjectId1,
        ref: Lien_de_nomenclature,
        trim: true,
        maxlength: 30,
        required: true,
    },
    remplace_composant: {
        type: ObjectId1,
        ref: Lien_de_nomenclature,
        trim: true,
        maxlength: 30,
        required: true,
    },
    remplacant_compose: {
        type: ObjectId2,
        ref: Lien_de_nomenclature,
        trim: true,
        maxlength: 30,
        required: true,
    },
    remplacant_composant: {
        type: ObjectId2,
        ref: Lien_de_nomenclature,
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

const Lien_de_nomenclature = mongoose.model('Remplacement',RemplacementSchema)