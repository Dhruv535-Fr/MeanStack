const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');



// REST API routes (prefix is /api/users from index.js)
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

router.route('/:id')
    .get(userController.getUserById)
    .patch(userController.updateUserById)
    .delete(userController.deleteUserById);

module.exports = router;