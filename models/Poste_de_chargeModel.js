const mongoose = require('mongoose')

const Poste_de_chargeSchema = new mongoose.Schema({
    numero_section: {
        type: Number,
        trim: true,
        required: true
    },
    numero_sous_section: {
        type: Number,
        trim: true,
        required: true
    },
    est_machine: {
        type: Number,
        trim: true,
        required: true
    },
    designation: {
        type: String,
        maxlength: 30,
        required: true,
        trim: true
    },
    taux_horaire_ou_forfait:{
        type: Number,
        required: true,
        trim: true
    },
    nombre_de_postes: {
        type: Number,
        required: true,
        trim: true
    },
    capacite_nominale:{
        type: Number,
        required: true,
        trim: true
    },
    type_taux_horaire_ou_forfait:{
        type: String,
        trim: true,
        required: true,
        maxlength: 2,
    }

}, {timestamps: true})

module.exports = mongoose.model('Poste_de_charge',Poste_de_chargeSchema)