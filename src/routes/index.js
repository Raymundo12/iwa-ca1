const { Router} = require('express');
const res = require('express/lib/response');
const router = Router();

router.get('/', (req,res) => {
    res.render('index.ejs')
})



module.exports = router;

