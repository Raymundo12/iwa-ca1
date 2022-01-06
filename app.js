const express = require('express')
const app = express()
const path = require('path')
// settings 
app.set('port', 8000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middlewares


//Routes



//Statics

module.exports = app;


