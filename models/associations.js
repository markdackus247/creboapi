const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utils/database/database');

// Import all the models needed for the associations.
const Case = require('./case');
const Crebo = require('./crebo');
const Kerntaak = require('./kerntaak');
const Werkproces = require('./werkproces');

// This function creates the associations between the models.
const setAssociations = () => {
    // createAssociations();
    // A Case (dossier) has more then one educations (crebos)
    Case.hasMany(Crebo);
    Crebo.belongsTo(Case);

    // A Crebo (education) has more then one kerntaken.
    Crebo.hasMany(Kerntaak);
    Kerntaak.belongsTo(Crebo);

    // A kerntaak has more then one workprocesses (werkprocessen).
    Kerntaak.hasMany(Werkproces);
    Werkproces.belongsTo(Kerntaak);
}

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

module.exports = setAssociations;

