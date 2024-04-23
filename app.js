const express = require('express')
const mongoose = require('mongoose')
const port = 5005

const app = express()

// database connection
mongoose.connect('mongodb+srv://ddryn970:dondo@trtodo.pk5pgbc.mongodb.net/?retryWrites=true&w=majority&appName=Trtodo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')


// routes
app.use(require('./router/index'))
app.use(require('./router/todo'))


// server config
app.listen(port, () => {
    console.log(`Server running on port ${port}...`)
})
