'use strict';

var mongoose = require('mongoose');
var env       = process.env.NODE_ENV || 'development';
var config    = require(__dirname + '/../config/config.json')[env];
const Blog = require('./blog');
const Contact = require('./contact');
const User = require('./user');

if (config.use_env_variable) {
  var mongoose = mongoose.connect(config.use_env_variable);
}

const db = {
  Blog, Contact, User
}

module.exports = db;