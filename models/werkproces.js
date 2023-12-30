const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database/database');

const Werkproces = sequelize.define('werkproces', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: DataTypes.STRING(12),
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    informalName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    outcome: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    behaviour: {
        type: DataTypes.TEXT,
        allowNull: true
    }
},{
    tableName: 'werkproces'
})

module.exports = Werkproces;