const express = require('express');
const mongoose = require ('mongoose');
const app = express();
require('dotenv/config');
const bodyParser = require('body-parser');



//Routes
app.get('/', (req,res)=>{
    res.send('Welcome Anima');

});



//connect with mongo DB

mongoose.connect(process.env.DB_connection, ()=>
     console.log('connected to Mongo DB')     
);  


app.listen(3000);

