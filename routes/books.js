const express = require ('express')
const router = express.Router()

router.get('/new', (req, res) => {
   res.render('books/new')
})

module.exports = router 




