 var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('./utils/database/database');
const { createAssociations, syncDB } = require('./models/associations');

createAssociations();

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

syncDB(true);

module.exports = app;
