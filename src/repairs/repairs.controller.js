const findAllRepairs = (req, res) => {
    return res.status(200).json({
        message: 'method get repairs - findAll'
    })
}

const createRepairs = (req, res) => {

    const { requestTime } = req;

    return res.status(201).json({
        message: 'method post repairs - create',
        data: req.body,
        requestTime
    })
}

const findOneRepair = (req, res) => {
    return res.status(200).json({
        message: 'method get repair - findOne'
    })
}

const updateRepair = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: 'method patch repair - update',
        id
    })
}

const deleteRepair = (req, res) => {
    const { id } = req.params
    return res.status(200).json({
        message: 'method delete repair',
        id
    })
}

module.exports = {
    findAllRepairs,
    createRepairs,
    findOneRepair,
    updateRepair,
    deleteRepair
}