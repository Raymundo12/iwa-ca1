const mongoose = require ('mongoose')

const booksSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {  
        type: String,
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Book', booksSchema)