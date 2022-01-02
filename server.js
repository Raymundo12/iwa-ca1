const express = require ('express')
const booksRouter = require('./routes/books')
const app = express()

app.set('view engine', 'ejs')

app.use(booksRouter)

app.get ('/', (req,res) => {
    res.render('index')

})
   



app.listen(8000);

