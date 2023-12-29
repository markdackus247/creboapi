 var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./utils/database/database');

const Crebo = require('./models/crebo');
Crebo
    .sync(
        { force: true }
    )
    .then(
        () => {}
    )
    .catch(
        err => console.log(err)
    )

const User = sequelize.define('User', {
    // Model attributes are defined here
    id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        allowNull: false,
        primaryKey: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING
        // allowNull defaults to true
    }
}, {
    // Other model options go here
});

const mark = User.build(
    {
        firstName: 'Mark',
        lastName: 'Dackus'
    }
)

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const e = require('express');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

User
    .sync(
        { force: true }
    )
    .then(
        () => {
            // mark.save()
            // .then(
            //     () => {
            //         console.log(User)
            //     }
            // )
            // .catch(
            //     err => console.log(err)
            // )
        }
    )

module.exports = app;
