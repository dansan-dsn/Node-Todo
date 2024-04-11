const router = require('express').Router()


// routes here
router.get('/', (req, res) => {
    res.render("index")
})

module.exports = router