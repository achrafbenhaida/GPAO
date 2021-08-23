const mongoose = require('mongoose')
const { ObjectId1 } = mongoose.Schema;
const { ObjectId2 } = mongoose.Schema;
const { ObjectId3 } = mongoose.Schema;

const operationSchema = new mongoose.Schema({
    gamme_de_fabrication: {
        type: ObjectId1,
        ref: 'Article',
        trim: true,
        maxlength: 30,
        required: true
    },
    numero_operation: {
        type: Number,
        trim: true,
        required: true,
        unique: true
    },
    machine_numero_section: {
        type: ObjectId2,
        ref: 'Poste_de_charge',
        required: true,
        trim: true
    },
    machine_numero_sous_section: {
        type: ObjectId2,
        ref: 'Poste_de_charge',
        required: true,
        trim: true
    },
    machine_est_machine:{
        type: ObjectId2,
        ref: 'Poste_de_charge',
        required: true,
        trim: true
    },
    main_d_oeuvre_numero_section: {
        type: ObjectId3,
        ref: 'Poste_de_charge',
        required: true,
        trim: true
    },
    main_d_oeuvre_numero_sous_section:{
        type: ObjectId3,
        ref: 'Poste_de_charge',
        required: true,
        trim: true
    },
    main_d_oeuvre_est_machine:{
        type: ObjectId3,
        ref: 'Poste_de_charge',
        required: true,
        trim: true
    },
    temps_preparation:{
        type: Number,
        trim: true
    },
    temps_execution:{
        type: Number,
        trim: true
    },
    temps_transfert:{
        type: Number,
        trim: true,
        required: true
    },
    libelle_operation:{
        type: String,
        required: true,
        trim: true,
        maxlength: 30,
    }

}, {timestamps: true})

module.exports = mongoose.model('Operation',operationSchema)