const express = require('express');
const {register, login, logout, getAllUsers, deleteUser, deleteAllUsers} = require('../controllers/users.controllers')
const router = express.Router();
const {isAuth} = require('../../middlewares/auth');

router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)
router.delete('/removeusers' ,deleteAllUsers)
router.get('/', getAllUsers)
router.delete('/deleteuser/:id', deleteUser)

module.exports = router;