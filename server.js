const express = require (express);

const app = express();

app.get('/',(req,res)=>){
 res.send("Anima");

}) 

app.listen(3000,()=>{console.log('server is runing on https://localhost:${3000}')});

