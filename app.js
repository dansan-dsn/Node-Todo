
const express = require('express')
const mongoose = require('mongoose')
const port = 3000

const app = express()


// database connection



// middleware
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.set('view enginee', 'ejs')


// routes
app.get('/', (req, res) => {
    res.send('Hello there')
})

// server congig
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
})