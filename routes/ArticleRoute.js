const express = require('express');
const { 
    GetArticles,
    AddArticle ,
    UpdateArticle,
    DeletedArticle,
    ShowArticle,
    GetArticleById
} = require('../controllers/ArticleController')
const router = express.Router();

router.get('/',GetArticles);
router.post('/add',AddArticle);
router.put('/update/:articleId',UpdateArticle);
router.delete('/delete/:articleId',DeletedArticle);
router.get('/show/:articleId',ShowArticle);

router.param('articleId',GetArticleById);

module.exports = router;