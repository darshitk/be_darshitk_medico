var ErrorLog = require('../models/errorlogDAO');

//Log API Error
var log = {}
log.log_error = function(end_point,error_message){
	
	var error_params = {
		endpoint:end_point,
		timestamp:new Date(),
		errormsg:error_message
	}
	var err_log = new ErrorLog(error_params);
	err_log.save(function (err) {});
}

module.exports = log;