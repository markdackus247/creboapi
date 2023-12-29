const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database/database');

const Crebo = sequelize.define('crebo', {
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    creboNumber: {
        type: DataTypes.STRING(12),
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT('tiny')
    },
    sbblink: {
        type: DataTypes.STRING
    },
    kdpdflink: {
        type: DataTypes.STRING
    },
    caseNumber: {
        type: DataTypes.STRING(12)
    },
    caseName: {
        type: DataTypes.STRING(100)
    }
},{
    tableName: 'Crebo'
})

module.exports = Crebo;