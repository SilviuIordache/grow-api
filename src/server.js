const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const app = express();
const helmet = require('helmet');

const bodyParser = require('body-parser')

// MIDDLEWEARS
if (process.env.NODE_ENV === 'development') {
  // enable logging only for development mode
  app.use(morgan('dev'));
} 

// enable cross origin resource sharing
app.use(cors()); 

// enable security features
app.use(helmet());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

module.exports = app;