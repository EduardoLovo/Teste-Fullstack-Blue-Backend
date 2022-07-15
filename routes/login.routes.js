const router = require("express").Router();

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/users');

router.post('/', async (req, res) => {
    const { email, password } = req.body

    // validações
    if (!email) {
        return res.status(422).json({ msg: "O usuario é obrigatorio" })
    }

    if (!password) {
        return res.status(422).json({ msg: "A senha é obrigatorio" })
    }

    // Check user existe
    const user = await User.findOne({ email: email })
    console.log(user);
    if (!user) {
        return res.status(422).json({ msg: 'Usuario não encontrado' })
    }


    console.log(user.password);

    // Check se senha esta correta
    const checkPassword = await bcrypt.compare(password, user.password)
    if (!checkPassword) {
        return res.status(422).json({ msg: 'Senha invalida' })
    } else {
        console.log('login efetuado');
    }



    try {
        const secret = process.env.SECRET

        const token = jwt.sign({
            id: user._id,
        },
            secret,
        )
        res.status(200).json({ msg: 'Autenticação realizada com sucesso', token })
    } catch (err) {
        console.log(err, console.log('error'));
    }
})

module.exports = router;