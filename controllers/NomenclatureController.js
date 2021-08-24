const Nomenclature = require('../models/Lien_de_nomenclatureModel');
const _ = require('lodash');
const Joi = require('@hapi/joi');

exports.GetNomenclatures = (req, res) => {
    Nomenclature.find()
    .populate("compose")
    .populate("composant")
    .exec((err,nomenclature)=>{
        if (err) {
            return res.status(404).json({
                error: "Nomenclatures not found !"
            })
        }
        res.json({
            nomenclature
        })
    })
   
}
exports.GetNomenclatureById=(req,res,next,id)=>{

    Nomenclature.findById(id).exec((err, nomenclature) => {

        if(err || !nomenclature) {
            return res.status(404).json({
                error: 'Nomenclature not found !'
            })
        }

        req.nomenclature = nomenclature;
        next()

    })

}
exports.AddNomenclature = (req, res) => {
    const nomenclature= new Nomenclature(req.body);

    
    nomenclature.save((err,nomenclature)=>{
        if(err) {
            return res.status(400).json({
                error: 'bad Request !'
            })
        }
        res.json({
            nomenclature
        })
    })
}
exports.UpdateNomenclature = (req, res) => {
    const nomenclature= req.nomenclature;
    nomenclature=_.extend(nomenclature,req.body)
    


    nomenclature.save((err,nomenclature)=>{
        if(err) {
            return res.status(400).json({
                error: 'bad Request !'
            })
        }
        res.json({
            nomenclature
        })
    })
}
exports.DeletedNomenclature=(req,res)=>{
    const nomenclature=req.nomenclature;
    nomenclature.remove((err,nomenclature)=>{
        if (err) {
           return res.status(404).json({
            error: "Nomenclature not found !"
           })
        }

        res.status(204).json({})
    })
}
exports.ShowNomenclature=(req,res)=>{
    res.json({
        nomenclature: req.nomenclature
    })
}