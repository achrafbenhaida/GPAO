const express = require('express');
const { 
    GetNomenclatures,
    AddNomenclature ,
    UpdateNomenclature,
    DeletedNomenclature,
    ShowNomenclature,
    GetNomenclatureById
} = require('../controllers/NomenclatureController')
const router = express.Router();

router.get('/',GetNomenclatures);
router.post('/add',AddNomenclature);
router.put('/update/:NomenclatureId',UpdateNomenclature);
router.delete('/delete/:NomenclatureId',DeletedNomenclature);
router.get('/show/:NomenclatureId',ShowNomenclature);

router.param('NomenclatureId',GetNomenclatureById);

module.exports = router;