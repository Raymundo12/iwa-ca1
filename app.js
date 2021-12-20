const express = require('express');
const mongoose = require ('mongoose');
const app = express();





//Routes
app.get('/', (req,res)=>{
    res.send('Welcome Anima');

});

app.get('/posts', (req,res)=>{
    res.send('Welcome posts');
    
});

//connect with mongo DB
mongoose.connect('mongodb+srv://Raymundo:19831027%Fel@cluster0.pcxue.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', ()=>
     console.log('connected to Mongo DB')     
);  


app.listen(3000);

