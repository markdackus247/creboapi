const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database/database');

const Crebo = sequelize.define('crebo', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    code: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: true
    },
    level: {
        type: DataTypes.INTEGER
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT('long')
    },
    sbblink: {
        type: DataTypes.STRING
    },
    kdpdflink: {
        type: DataTypes.STRING
    }
},{
    tableName: 'crebo'
})

module.exports = Crebo;