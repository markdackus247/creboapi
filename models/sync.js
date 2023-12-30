const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database/database');

// Import all the models needed for the associations.
const Case = require('./case');
const Crebo = require('./crebo');
const Kerntaak = require('./kerntaak');
const Werkproces = require('./werkproces');

// This function creates the tables for the models in the database.
// If parameter force=true then all tables will be recreated
// AND ALL DATA WILL BELOST
const syncDB = (force = false) => {
    // Synchonizing Case model with the database.
    sequelize
        .sync(
            { force: force }
        )
        .then(
            () => {
                console.log("Case is synchronised.")
            }
        )
        .catch(
            err => console.log(err)
        )

}

module.exports = syncDB;