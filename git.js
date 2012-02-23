var sys = require('sys')
var exec = require('child_process').exec;
var child;

var winston = require('winston');

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)(),
		new (winston.transports.File)({ filename: 'repo.log' })
	]
});

exports.pull = function(path, callback) {
	var res = [];
	child = exec("cd " + path + " && git pull", function (error, stdout, stderr) {
		if (error !== null) {
			logger.error('exec error: ' + error);
			res.error = error;
		} else {
			logger.info('stdout: ' + stdout);
			res.stdout = stdout;
		}
		callback(res);
	});
}

exports.push = function(path, callback) {
	var res = [];
	child = exec("cd " + path + " && git push", function (error, stdout, stderr) {
		if (error !== null) {
			logger.error('exec error: ' + error);
			res.error = error;
		} else {
			logger.info('stdout: ' + stdout);
			res.stdout = stdout;
		}
		callback(res);
	});
}

exports.addAll = function(path, callback) {
	var res = [];
	child = exec("cd " + path + " && git add -A", function (error, stdout, stderr) {
		if (error !== null) {
			logger.error('exec error: ' + error);
			res.error = error;
		} else {
			logger.info('stdout: ' + stdout);
			res.stdout = stdout;
		}
		callback(res);
	});
}

exports.exec = function(path, command, callback) {
	var res = [];
	child = exec("cd " + path + " && git " + command, function (error, stdout, stderr) {
		if (error !== null) {
			logger.error('exec error: ' + error);
			res.error = error;
		} else {
			logger.info('stdout: ' + stdout);
			res.stdout = stdout;
		}
		callback(res);
	});
}
