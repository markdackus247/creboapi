const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'creboapi',
 'mark',
 'Vrieskist@247',
  {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 100000,
        min: 0
    }
  }
);

module.exports = sequelize;