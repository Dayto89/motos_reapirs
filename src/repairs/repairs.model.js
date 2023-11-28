const { DataTypes } = require('sequelize')
const { sequelize } = require('./../config/database/database.js')

const Repair = sequelize.define('repairs', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        field: 'user_id',
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
        defaultValue: 'pending',
        allowNull: false
    },
})

module.exports = Repair