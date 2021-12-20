const express = require('express');

const app = express();





//Routes
app.get('/', (req,res)=>{
    res.send('Welcome Anima');

});

app.get('/posts', (req,res)=>{
    res.send('Welcome posts');

});


app.listen(3000);

