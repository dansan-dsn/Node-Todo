const router = require('express').Router()

router.post('/add/todo', (req, res) => {
    const { todo } = req.body
    console.log(todo)
})

module.exports = router