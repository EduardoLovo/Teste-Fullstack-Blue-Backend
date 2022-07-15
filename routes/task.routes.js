const routes = require("express").Router();
const TaskController = require("../controller/task")

routes.get('/', TaskController.getAllTasks);
routes.post('/create', TaskController.createTask);
routes.get('/getById/:id', TaskController.getByIdTask);
routes.patch('/updateOne/:id', TaskController.updateTask);
routes.delete('/deleteOne/:id', TaskController.deleteOneTask);
routes.get('/check/:id', TaskController.taskCheck);


module.exports = routes