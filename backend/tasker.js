var tasks = require('./tasks.json');

exports.adminTasks = function(){
	var mytasks = [];
	for(var i = 0; i < tasks.length; i++){
		var task = tasks[i];
		if(task.uid === 0){
			mytasks.push(task);
		}
	};
	return mytasks;
}
exports.getAll = function(){
	return tasks;
}

exports.getMine = function(user) {
  var uid = user.uid;
  console.log(uid);
  var totalAmount = tasks.length-1;
  var mytasks = [];

  for(var i = totalAmount; i >= 0; i--){
  	var oneuser = tasks[i];
  	if(oneuser && oneuser.uid === uid){
  		mytasks.push(tasks[i]);
  	}
  };
  return mytasks;
}
