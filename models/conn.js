// Conexção com MongoDB Atlas
const mongoose = require('mongoose');

const conn = (url, user, pass, data) => {
    mongoose.connect(`${url}/${data}`, {
        user: user,
        pass: pass,
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
    )
        .then(() => console.log("MongoDB Atlas conectado!"))
        .catch((err) => console.log(err))
};

module.exports = conn;