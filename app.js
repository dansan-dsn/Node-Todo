const express = require('express')
const mongoose = require('mongoose')
const port = 3000

const app = express();

// db connection
mongoose.connect('mongodb+srv://ddryn970:noded@ntodo.di8bzsa.mongodb.net/?retryWrites=true&w=majority&appName=NTodo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.set('view engine', 'ejs')

// routes
app.use(require('./routes/index'))
app.use(require('./routes/todo'))

// server config..
app.listen(port, () => {
    console.log(`Server listening on port ${port}...`)
})