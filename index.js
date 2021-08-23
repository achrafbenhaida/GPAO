  
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator')


//Import Routes
const ArticleRoutes = require('./routes/ArticleRoute');
const Mouvement_de_stockRoutes = require('./routes/Mouvement_de_stockRoute');
const NomenclatureRoutes = require('./routes/NomenclatureRoute');
const RemplacementRoutes = require('./routes/RemplacementRoute');
const OperationRoutes = require('./routes/OperationRoute');
const Poste_de_chargeRoutes = require('./routes/Poste_de_chargeRoute');


//Config App
require('dotenv').config();
const app = express();


//Database Mongo
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => console.log('Database Connected'))
.catch(() => console.log('Database Not Connected !'))


// Middlewares
app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(expressValidator())


//Routes Middleware
app.use('/api/Article',ArticleRoutes);
app.use('/api/Mouvement_de_stock',Mouvement_de_stockRoutes);
app.use('/api/Nomenclature',NomenclatureRoutes);
app.use('/api/Remplacement',RemplacementRoutes);
app.use('/api/Operation',OperationRoutes);
app.use('/api/Poste_de_charge',Poste_de_chargeRoutes);


const port = process.env.PORT || 5000;
app.listen(port,() => console.log(`app is running on port ${port}`));
