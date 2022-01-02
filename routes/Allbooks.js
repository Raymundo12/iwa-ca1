const express = require ('express');

const router = express.Router();
const Post = require('../models/Post')


router.get('/new', (req,res)=>{
    res.render('Allbooks/new');

});

router.post('/', async (req, res) =>{
    const post = new Post({
       title: req.body.title,
       description: req.body.description
    });

    const savedPost = await post.save();
    res.json(savedPost);
});

module.exports = router;