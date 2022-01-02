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
   const Allbooks = [{
     title: 'First book',
     author: 'book author',
     Genre: 'book Genre',
     Published: new Date(),
   },
   {
        title: 'First book 2',
        author: 'book author 2',
        Genre: 'book Genre 2',
        Published: new Date(), 
   }]
    res.render('Allbooksindex', {Allbooks : Allbooks})

});

//connect with mongo DB

mongoose.connect(process.env.DB_connection, ()=>
     console.log('connected to Mongo DB'),     
     {useNewUrlParser: true, userUnifiedTopology: true 

     }
);  


app.listen(3000);

