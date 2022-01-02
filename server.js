const express = require('express');
const mongoose = require ('mongoose');
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');

app.set('Gui engine', 'ejs')

app.use(bodyParser.json());


const AllbooksRoute = require('./routes/Allbooks')

app.use('/books', AllbooksRoute)

//Routes
app.get('/', (req,res)=>{
    res.render('index')

});

//connect with mongo DB

mongoose.connect(process.env.DB_connection, ()=>
     console.log('connected to Mongo DB')     
);  


app.listen(3000);

