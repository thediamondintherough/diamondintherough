'use strict'
require('dotenv').config({ silent: true})
let express= require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    helmet = require('helmet'),
    favicon = require('serve-favicon'),
    path = require('path'),
    app = express();

/* istanbul ignore next */
/*if (process.env.NODE_ENV === 'development') {
  app.use(require('morgan')('dev'));
}*/


app.use(cookieParser());
app.use(express.static("public"));

app.use(helmet.frameguard());
app.use(helmet.hsts());
app.use(helmet.noSniff());
app.use(favicon(path.join(__dirname, '/assets', 'inu.ico')));

// to extract form data from POST bodies
app.use(bodyParser.json());                         // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

//requiring routes module
app.use(require('./routes'));

/* istanbul ignore next */
if (process.env.NODE_ENV === 'development') {
  require('express-debug')(app);
}


// allow other modules to use the server
module.exports = app;