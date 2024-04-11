const router = require('express').Router()

// routes
router.post("/add/todo", (req, res) => {
    const {todo} = req.body
    console.log(todo)

})

module.exports = router