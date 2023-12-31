const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database/database');

const Case = require('../models/case');

const { readJSONFile } = require('../utils/fs/readJSONFile')

const createCase = () => {

    readJSONFile(__dirname, 'case.json')
        .then(
            data => {
                for (const element in data) {
                    // console.log('data[element]', data[element]);
                    Case
                        .findOne(
                            { where: { id: data[element].id } }
                        )
                        .then(
                            caseRecord => {
                                // console.log('caseRecord', caseRecord);
                                if (caseRecord === null) {
                                    Case.create({
                                        id: data[element].id,
                                        code: data[element].code,
                                        name: data[element].name
                                    })
                                }
                            }
                        )
                        .catch(
                            err => console.log(err)
                        )
                }
            }
        )

}


module.exports = { createCase };