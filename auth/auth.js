// Auth
const User = require('../models/users')
const router = require("express").Router();
const bcrypt = require('bcrypt')

router.post('/', async (req, res) => {

    const { name, email, password } = req.body

    // validações
    if (!email) {
        return res.status(422).json({ msg: "O usuario é obrigatorio" })
    }

    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatorio" })
    }

    // Chehck user 
    const emailExists = await User.findOne({ email: email })
    if (emailExists) {
        return res.status(422).json({ msg: 'Por favor utilize outro email' })
    }

    // create senha
    const salt = await bcrypt.genSalt(12)
    const passwordHash = await bcrypt.hash(password, salt)

    // Create User
    const user = new User({
        name,
        email,
        password: passwordHash
    })

    try {
        await user.save()

        res.status(201).json({ msg: 'Usuario criado com sucesso' })

    } catch (error) {
        res.status(500).json({ msg: 'Erro no servidor' })
    }
})

module.exports = router;