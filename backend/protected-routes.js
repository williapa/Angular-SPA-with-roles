var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('./config'),
    tasker  = require('./tasker');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: config.secret
});

app.use('/api/protected', jwtCheck);

app.get('/api/protected/mytasks', function(req, res) {
  res.status(200).send(tasker.getRandomOne());
});

app.get('/api/protected/alltasks', function(req, res) {
  res.status(200).send(tasker.getAll());
});
