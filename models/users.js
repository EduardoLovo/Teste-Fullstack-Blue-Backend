const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, required: true }
})

const User = mongoose.model("user", userModel);

module.exports = User;