var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./utils/database/database');
const setAssociations = require('./models/associations');
const syncDB = require('./models/sync');

// Import all the models needed for the associations.
const Case = require('./models/case');
const Crebo = require('./models/crebo');
const Kerntaak = require('./models/kerntaak');
const Werkproces = require('./models/werkproces');

const { createCrebo } = require('./data/crebo');
const { createCase } = require('./data/case');

setAssociations();

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

syncDB(false);

createCase();

// createCrebo();

module.exports = app;
