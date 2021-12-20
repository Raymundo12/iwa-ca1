const express = require ('express');

const router = express.Router();
const Post = require('../models/Post')


router.get('/posts', (req,res)=>{
    res.send('Welcome posts');

});

router.post('/', (req, res) =>{
    console.log(req,body);

});

module.exports = router;