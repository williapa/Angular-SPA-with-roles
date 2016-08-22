var express = require('express'),
    jwt     = require('express-jwt'),
    config  = require('./config'),
    tasker  = require('./tasker'),
    users   = require('./users.json');

var app = module.exports = express.Router();

var jwtCheck = jwt({
  secret: config.secret
});

app.use('/api/protected', jwtCheck);

app.get('/api/protected/mytasks', function(req, res) {
	var user = req.user;
	console.log("the user was: "+ user);
	if(user){
		res.status(200).send(tasker.getMine(user));
	}
	else {
	    res.redirect(401, "https://localhost:3000/");
	}
	
  
});

app.get('/api/protected/alltasks', function(req, res) {
  res.status(200).send(tasker.getAll());
});

app.get('/api/protected/admintasks', function(req, res) {

	var user = req.user;

	if(user.admin){
		res.status(200).send(tasker.adminTasks());
	}
	else{
		res.status(401).send("you aren't an admin!!!");
	}

});
