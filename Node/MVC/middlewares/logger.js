const fs = require('fs');

const logger = (req, res, next) => {
	fs.appendFile('log.txt', `${Date.now()}: ${req.method} Path: ${req.path}\n`, (err) => {
		next();
	});
};

module.exports = logger;
