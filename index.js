
const express = require('express')
const cookieParser = require('cookie-parser')
const cookieValidator = require('./app')
const port = 3000

const app = express()

async function validateCookies (req, res, next) {
    await cookieValidator(req.cookies)
}

app.use(cookieParser())
app.use(validateCookies)
app.use((err, req, res, next) => {
    res.status(400).send(err.message)
  })


app.listen(port, () => {
    console.log(`listening at port ${port}...`)
})