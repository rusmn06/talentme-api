const express = require('express');

const {
    getAllUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.post('/:idUser', getUserById);
router.get('/:idUser', updateUser);
router.get('/:idUser', deleteUser);

module.exports = router;