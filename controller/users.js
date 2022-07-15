const User = require('../models/users');

const getAll = async (req, res) => {
    await User.find({})
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            console.log(err);
        })
}

const create = async (req, res) => {
    await User.create(req.body)
        .then(() => {
            res.status(200).send("Usuario adicionado com sucesso")
        })
        .catch((err) => {
            res.status(400).send("Erro ao adicionar usuario")
        })
};

const getById = async (req, res) => {
    await User.findById({ _id: req.params.id })
        .then((user) => {
            res.send(user)
        })
        .catch((err) => {
            res.status(400).send("Erro ao encontrar usuario");
            console.log(err);
        })
};

const update = async (req, res) => {
    await User.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.status(200).send("Usuario atualizado com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao atualizar usuario");
            console.log(err);
        })
};

const deleteOne = async (req, res) => {
    await User.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).send("Usuario excluido com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao excluir usuario")
            console.log(err);
        })
}

module.exports = {
    getAll,
    create,
    getById,
    update,
    deleteOne
}