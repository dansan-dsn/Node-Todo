const mongoose = require('mongooose')

const TodoSchema = new mongoose.Schema({
     todo: {
        type: String,
        required: true,
    }
})

module.exports = new mongoose.model('todo', TodoSchema);