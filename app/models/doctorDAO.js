var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var DoctorSchema   = new Schema({
    npi: String,
    entityTypeCode: String,
    replacementNpi: String,
    employerIdentificationNumber: String,
    providerOrganizationName: String,
    providerFirstName:String,
    providerLastName: String,
    providerMiddleName: String,
    providerCredentialText: String,
    providerOtherOrganizationName: String,
    providerFirstLineBusinessMailingAddress: String,
    providerSecondLineBusinessMailingAddress: String,
    providerBusinessMailingAddressCityName: String,
    providerBusinessMailingAddressStateName:String,
    providerBusinessMailingAddressPostalCode:String,
    providerBusinessMailingAddressCountryCode:String,
    providerBusinessMailingAddressTelephoneNumber:String,
    providerBusinessMailingAddressFaxNumber:String,
    providerEnumerationDate:String,
    providerGenderCode:String,
    authorizedOfficialLastName:String,
    authorizedOfficialFirstName:String,
    authorizedOfficialMiddleName:String,
    authorizedOfficialTelephoneNumber:String,
    healthcareProviderTaxonomyCode_1:String,
    providerLicenseNumber_1:String,
    lastUpdate:Date
});

module.exports = mongoose.model('doctor', DoctorSchema);