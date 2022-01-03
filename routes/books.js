const express = require ('express')
const Book = require('./../models/book')
const router = express.Router()

router.get('/new', (req, res) => {
   res.render('newbooks/new')
})
router.get

router.post('/', async (req,res)=> {
  const book = new Book({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date
  })
  try {
  book = await book.save()
  res.redirect('/books/${book.id}')
}catch (e) {
   
      }
})

module.exports = router 




