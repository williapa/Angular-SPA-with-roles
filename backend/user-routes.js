var express = require('express'),
    _       = require('lodash'),
    config  = require('./config'),
    jwt     = require('jsonwebtoken');

var app = module.exports = express.Router();

// TODO: replace with an api call to our user db, 
var users = [{
  uid: 1,
  username: 'atlasrutherford',
  password: 'abc123',
  admin: false
},
{
  uid: 2,
  username: 'bennybanana',
  password: 'abc123',
  admin: false
},
{
  uid: 3,
  username: 'alanalda',
  password: 'admin',
  admin: true,
}];

function createToken(user) {
  return jwt.sign( _.omit(user, 'password'), config.secret, { expiresInMinutes: 60*5 });
}

app.post('/sessions/create', function(req, res) {
  if (!req.body.username || !req.body.password) {
    return res.status(400).send("You must send the username and the password");
  }

  var user = _.find(users, {username: req.body.username});
  if (!user) {
    return res.status(401).send("The username or password don't match");
  }

  if (user.password !== req.body.password) {
    return res.status(401).send("The username or password don't match");
  }

  res.status(201).send({
    id_token: createToken(user)
  });
});
