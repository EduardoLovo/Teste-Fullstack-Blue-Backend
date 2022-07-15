const mongoose = require('mongoose');

const taskModel = new mongoose.Schema({
    titulo: { type: String, require: true },
    check: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

const Task = mongoose.model("task", taskModel);

module.exports = Task;