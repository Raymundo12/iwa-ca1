const express = require ('express');

const router = express.Router();

router.get('/new', (req,res)=>{
    res.render('Allbooks/new');

});


module.exports = router;