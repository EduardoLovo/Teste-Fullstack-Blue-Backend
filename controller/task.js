const Task = require('../models/task');

const getAllTasks = async (req, res) => {
    await Task.find({})
        .then((task) => {
            res.send(task)
        })
        .catch((err) => {
            console.log(err);
        })
};

const createTask = async (req, res) => {
    if (!req.body.titulo) {
        res.send('Adicione um titulo');
    } else {
        await Task.create(req.body)
            .then(() => {
                res.status(200).send("Tarefa adicionado com sucesso")
            })
            .catch((err) => {
                res.status(400).send("Erro ao adicionar tarefa")
            })
    }
};

const getByIdTask = async (req, res) => {
    await Task.findById({ _id: req.params.id })
        .then((task) => {
            res.send(task)
        })
        .catch((err) => {
            res.status(400).send("Erro ao encontrar tarefa");
            console.log(err);
        })
};

const updateTask = async (req, res) => {
    await Task.updateOne({ _id: req.params.id }, req.body)
        .then(() => {
            res.status(200).send("Tarefa atualizado com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao atualizar tarefa");
            console.log(err);
        })
};

const deleteOneTask = async (req, res) => {
    await Task.deleteOne({ _id: req.params.id })
        .then(() => {
            res.status(200).send("Tarefa excluido com sucesso");
        })
        .catch((err) => {
            res.status(400).send("Erro ao excluir tarefa")
            console.log(err);
        })
};

const taskCheck = async (req, res) => {
    try {
        const task = await Task.findOne({ _id: req.params.id })

        task.check ? task.check = false : task.check = true;

        await Task.updateOne({ _id: req.params.id }, task)
        res.redirect("/");
    } catch (err) {
        res.status(500).send({ error: err.message })
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getByIdTask,
    updateTask,
    deleteOneTask,
    taskCheck
};