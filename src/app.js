const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const findAllUsers = (req, res) => {
    return res.status(200).json({
        message: 'method get users - findAll'
    })
}

const createUsers = (req, res) => {

    return res.status(201).json({
        message: 'method post users - create',
        data: req.body
    })
}

const findOneUser = (req, res) => {
    return res.status(200).json({
        message: 'method get user - findOne'
    })
}

const updateUser = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: 'method patch - update',
        id
    })
}

const deleteUser = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: 'method delete',
        id
    })
}

const findAllRepairs = (req, res) => {
    return res.status(200).json({
        message: 'method get users - findAll'
    })
}

const createRepairs = (req, res) => {

    return res.status(201).json({
        message: 'method post users - create',
        data: req.body
    })
}

const findOnerepair = (req, res) => {
    return res.status(200).json({
        message: 'method get user - findOne'
    })
}

const updateRepair = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: 'method patch - update',
        id
    })
}

const deleteRepair = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: 'method delete',
        id
    })
}

app.get('/api/v1/users', findAllUsers)

app.post('/api/v1/users', createUsers)

app.get('/api/v1/users/:id', findOneUser)

app.patch('/api/v1/users/:id', updateUser)

app.delete('/api/v1/users/:id', deleteUser)

app.get('/api/v1/repairs', findAllRepairs)

app.post('/api/v1/repairs', createRepairs)

app.get('/api/v1/repairs/:id', findOnerepair)

app.patch('/api/v1/repairs/:id', updateRepair)

app.delete('/api/v1/repairs/:id', deleteRepair)

app.listen(3000, () => {
    console.log("Server running on port: " + 3000)
}) 