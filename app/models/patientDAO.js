var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PatientSchema   = new Schema({
    tenantId: String,
    userid: String,
    customerId: String,
    portalId: String,
    status: String,
    sysState: String,
    dateCreated: Date,
    dateUpdated: Date,
    whoCreated: String,
    whoUpdated: String,
    firstName: String,
    lastName: String,
    fullname: String,
    phoneMobile: String,
    referral: String,
    email: String

});

module.exports = mongoose.model('patient', PatientSchema);