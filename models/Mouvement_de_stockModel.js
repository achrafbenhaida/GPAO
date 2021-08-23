const mongoose = require('mongoose')
const { ObjectId1 } = mongoose.Schema;


const Mouvement_de_stockSchema = new mongoose.Schema({
    reference: {
        type: ObjectId1,
        ref: 'Article',
        trim: true,
        maxlength: 30,
        required: true
    },
    numero_magasin: {
        type: Number,
        trim: true,
        required: true,
        default : 1
    },
    quantite: {
        type: Number,
        required: true,
        trim: true
    },
    periode:{
        type: Date,
        trim: true
    },
    type:{
        type: String,
        maxlenght: 6,
        required: true,
        trim: true
    }

}, {timestamps: true})

module.exports = mongoose.model('Mouvement_de_stock',Mouvement_de_stockSchema)