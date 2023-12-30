const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database/database');

const Case = sequelize.define('case', {
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
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    }
},{
    tableName: 'case'
})

module.exports = Case;