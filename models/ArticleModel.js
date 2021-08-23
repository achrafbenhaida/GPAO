const mongoose = require('mongoose')

const articleSchema = new mongoose.Schema({
    reference: {
        type: String,
        trim: true,
        maxlength: 30,
        required: true
    },
    designation: {
        type: String,
        trim: true,
        maxlength: 30,
        required: true,
        unique: true
    },
    type_fabrication_achat: {
        type: String,
        maxlength: 30,
        required: true,
        trim: true
    },
    unite_achat_stock: {
        type: String,
        maxlength: 30,
        required: true,
        trim: true
    },
    delai_en_semaine:{
        type: Number,
        required: true,
        trim: true
    },
    prix_standard: {
        type: Number,
        trim: true
    },
    lot_de_reapprovisionnement:{
        type: Number,
        trim: true
    },
    stock_mini:{
        type: Number,
        trim: true
    },
    stock_maxi:{
        type: Number,
        trim: true
    },
    pourcentage_de_perte:{
        type: Number,
        trim: true
    },
    inventaire:{
        type: Number,
        trim: true
    },
    PF_ou_MP_ou_Piece_ou_SE:{
        type: String,
        required: true,
        trim: true,
        maxlength: 2,
    }

}, {timestamps: true})

module.exports = mongoose.model('Article',articleSchema)