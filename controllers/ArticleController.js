const Article = require('../models/ArticleModel');
const _ = require('lodash');
const Joi = require('@hapi/joi');

exports.GetArticles = (req, res) => {
    Article.find().exec((err,article)=>{
        if (err) {
            return res.status(404).json({
                error: "Articles not found !"
            })
        }
        res.json({
            article
        })
    })
   
}
exports.GetArticleById=(req,res,next,id)=>{

    Article.findById(id).exec((err, article) => {

        if(err || !article) {
            return res.status(404).json({
                error: 'Article not found !'
            })
        }

        req.article = article;
        next()

    })

}
exports.AddArticle = (req, res) => {
    const article= new Article(req.body);

    // const schema = Joi.object({

    //     reference: Joi.string().max(30).required(),
    //     designation: Joi.string().max(30).required(),
    //     type_fabrication_achat: Joi.string().max(30).required(),
    //     unite_achat_stock: Joi.string().max(30).required(),
    //     delai_en_semaine: Joi.number().required(),
    //     prix_standard: Joi.number(),
    //     lot_de_reapprovisionnement:Joi.number(),
    //     stock_mini:Joi.number(),
    //     stock_maxi:Joi.number(),
    //     pourcentage_de_perte:Joi.number(),
    //     inventaire:Joi.number(),
    //     PF_ou_MP_ou_Piece_ou_SE: Joi.string().max(2).required()
    // })

    // const { error } = schema.validate(article);

    // if(error) {
    //     return res.status(400).json({
    //         error: error.details[0].message
    //     })
    // }
    article.save((err,article)=>{
        if(err) {
            return res.status(400).json({
                error: 'bad Request !'
            })
        }
        res.json({
            article
        })
    })
}
exports.UpdateArticle = (req, res) => {
    const article= req.article;
    article=_.extend(article,req.body)
    
    // const schema = Joi.object({

    //     reference: Joi.string().max(30).required(),
    //     designation: Joi.string().max(30).required(),
    //     type_fabrication_achat: Joi.string().max(30).required(),
    //     unite_achat_stock: Joi.string().max(30).required(),
    //     delai_en_semaine: Joi.number().required(),
    //     prix_standard: Joi.number(),
    //     lot_de_reapprovisionnement:Joi.number(),
    //     stock_mini:Joi.number(),
    //     stock_maxi:Joi.number(),
    //     pourcentage_de_perte:Joi.number(),
    //     inventaire:Joi.number(),
    //     PF_ou_MP_ou_Piece_ou_SE: Joi.string().max(2).required()
    // })

    // const { error } = schema.validate(article);

    // if(error) {
    //     return res.status(400).json({
    //         error: error.details[0].message
    //     })
    // }

    article.save((err,article)=>{
        if(err) {
            return res.status(400).json({
                error: 'bad Request !'
            })
        }
        res.json({
            article
        })
    })
}
exports.DeletedArticle=(req,res)=>{
    const article=req.article;
    article.remove((err,article)=>{
        if (err) {
           return res.status(404).json({
            error: "Article not found !"
           })
        }

        res.status(204).json({})
    })
}
exports.ShowArticle=(req,res)=>{
    res.json({
        article: req.article
    })
}