const router = require("express").Router();
const userController = require("../controller/users");

router.get('/', userController.getAll);
router.get('/findById/:id', userController.getById);
router.post('/create', userController.create);
router.patch('/update/:id', userController.update);
router.delete('/delete/:id', userController.deleteOne);

module.exports = router;