var tasks = require('./tasks.json');
exports.getAll = function(){
	return tasks;
}
exports.getRandomOne = function() {
  var totalAmount = tasks.length;
  var rand = Math.ceil(Math.random() * totalAmount-1);
  return [tasks[rand]];
}
