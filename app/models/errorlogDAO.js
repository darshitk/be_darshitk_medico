var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ErrorSchema   = new Schema({
    endpoint: String, 
    errormsg: String,
    timestamp:Date
});

module.exports = mongoose.model('errorlog', ErrorSchema);