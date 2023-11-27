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

module.exports = {
    findAllUsers,
    createUsers,
    findOneUser,
    updateUser,
    deleteUser
}
