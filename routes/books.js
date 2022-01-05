const express = require ('express')
const Book = require('./../models/book')
const router = express.Router()

router.get('/new', (req, res) => {
   res.render('newbooks/new', {book: new Book() })
})
router.get('/:id', (req,res)=>{
 res.send(req.params.id)
})

router.post('/', async (req, res)=> {
  let book = new Book({
      title: req.body.title,
      description: req.body.description,
      date: req.body.date
  })
  try {
  book = await book.save()
  res.redirect('/books/${book.id}')
}catch (e) {
    res.render('newbooks/new', {book: book})
}
})

module.exports = router