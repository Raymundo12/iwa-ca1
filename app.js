const express = require('express')
const app = express()
const path = require('path')
const morgan = require('morgan')
// settings 
app.set('port', 8000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended: false}))



//Routes



//Statics

module.exports = app;


