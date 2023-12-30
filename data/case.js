const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database/database');

const Case = require('../models/case');

const createCase = () => {

    Case.create({
        id: 'a10e60d8-25ab-468e-9df2-24fa253bdeb6',
        code: '23244',
        name: 'IT systems and devices'
    });

}

module.exports = { createCase };