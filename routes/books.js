const express = require ('express')
const Book = require('./../models/book')
const router = express.Router()

router.get('/new', (req, res) => {
   res.render('newbooks/new', {book: new Book() })
})
router.get('/:id', async (req,res)=>{
  const book = await Book.findById(req.params.id)
  if (book == null) res.redirect('/')
  res.render('books/show', { book: book})
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