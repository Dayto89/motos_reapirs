const express = require('express');
const {findAllRepairs, createRepairs, findOneRepair, updateRepair, deleteRepair} = require('./repairs.controller')
const router = express.Router();



router.get('/repairs', findAllRepairs)

router.post('/repairs', createRepairs)

router.get('/repairs/:id', findOneRepair)

router.patch('/repairs/:id', updateRepair)

router.delete('/repairs/:id', deleteRepair)



module.exports = router;