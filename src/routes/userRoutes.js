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
router.get('/:idUser', getUserById);
router.put('/:idUser', updateUser);
router.delete('/:idUser', deleteUser);

module.exports = router;