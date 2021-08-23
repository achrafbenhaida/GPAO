const express = require('express');
const { GetArticles } = require('../controllers/ArticleController')
const router = express.Router();

router.get('/',GetArticles);

module.exports = router;