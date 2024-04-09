
const express = require('express')
const mongoose = require('mongoose')
const port = 3000

const app = express()

// connection to mongodb
mongoose.connect('', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.static('public')) // a 
app.set('view engine', 'ejs') // a view enginee is set

// routes


// server configurations.......
app.listen(port, () => {
    console.log(`listening on port ${port}...`)
})