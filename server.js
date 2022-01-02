const express = require ('express')
const booksRouter = require('./routes/books')
const app = express()

app.set('view engine', 'ejs')

app.use('/books', booksRouter)

app.get ('/', (req,res) => {
    const books = [{ 
        titel: 'Test article',
        descrption: 'Test description'
    }]
    res.render('index', {books: books})

})
   
app.listen(8000);

