const express = require ('express')
const booksRouter = require('./routes/books')
const app = express()

app.set('view engine', 'ejs')

app.use('/books', booksRouter)

app.get ('/', (req,res) => {
    const books = [{ 
        title: 'Test article',
        description: 'Test-description',
        Published: new Date()
    },
    {
        title: 'Test article 2',
        description: 'Test-description 2',
        Published: new Date()
    }]
    res.render('newbooks/index', {books: books})

})
   
app.listen(8000);

