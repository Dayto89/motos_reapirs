const express = require('express');

const {findAllUsers, createUsers, findOneUser, updateUser, deleteUser} = require('./users.controller')

const router = express.Router();

router.get('/users', findAllUsers)

router.post('/users', createUsers)

router.get('/users/:id', findOneUser)

router.patch('/users/:id', updateUser)

router.delete('/users/:id', deleteUser)



module.exports = router;