
const express = require('express')
const mongoose = require('mongoose')
// const home = require('./models/Todo')
const port = 3000

const app = express()

// mongoDB connection
mongoose.connect('mongodb+srv://ddryn970:LVetoLq8rA8TTGzv@nodetodo.im95b0k.mongodb.net/?retryWrites=true&w=majority&appName=NodeTodo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs')

// routes
app.use(require('./routes/index'))
app.use(require('./routes/todo'))

// server configurations....
app.listen(port, () => {
    console.log(`listening at port ${port}...`)
})