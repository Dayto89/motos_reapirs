const findAllUsers = (req, res) => {
    const {requestTime} = req
    return res.status(200).json({
        message: 'method get users - findAll',
        requestTime
    })
}

const createUsers = (req, res) => {
    const {requestTime} = req
    return res.status(201).json({
        message: 'method post users - create',
        data: req.body,
        requestTime
    })
}

const findOneUser = (req, res) => {
    const {requestTime} = req
    return res.status(200).json({
        message: 'method get user - findOne',
        requestTime
    })
}

const updateUser = (req, res) => {
    const {requestTime} = req
    const { id } = req.params
    return res.status(200).json({
        message: 'method patch - update',
        id,
        requestTime
    })
}

const deleteUser = (req, res) => {
    const {requestTime} = req
    const { id } = req.params
    return res.status(200).json({
        message: 'method delete',
        id,
        requestTime
    })
}

module.exports = {
    findAllUsers,
    createUsers,
    findOneUser,
    updateUser,
    deleteUser
}
