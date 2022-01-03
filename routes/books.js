const express = require ('express')
const Book = require('./../models/book')
const router = express.Router()

router.get('/new', (req, res) => {
   res.render('newbooks/new')
})

router.post('/', (req,res)=> {

})

module.exports = router 




