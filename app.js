const express =require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors());

const userRoute = require('./api/routes/usuarios');
app.use('/usuarios', userRoute);

module.export = app;


