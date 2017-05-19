var Doctor = require('../models/doctorDAO');
var errorlog = require('../utils/errorlog');
var doctor = {};


doctor.create = function (req, res) {
    var post_param = req.body;
    if (!post_param.npi) {
        errorlog.log_error("POST /doctors", "npi is empty");  //Log actual error in "error_log" collection
        res.status(400).send('Bad Request')
    }
    var doctor_reco = new Doctor(post_param);
    doctor_reco.save(function (err) {
        if (err) {
            errorlog.log_error("POST /doctors", err);  //Log actual error in "error_log" collection
            res.status(500).send('Internal Server Error');
        }
        res.json({ message: 'Created New Doctor!' });
    });
}

doctor.find = function (req, res) {
    
    if (!req.query.start_index || !req.query.end_index) {
        var start_index = 0;
        var end_index = 50;
    }else{
        var start_index = parseInt(req.query.start_index);
        var end_index = parseInt(req.query.end_index);
    }

    Doctor.find({},{},{limit:end_index, skip:start_index},function (err, doctor_reco) {
        if (err)
            res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection

        res.json(doctor_reco);
    });
}

doctor.find_by_id = function (req, res) {
    Doctor.findById(req.params.id, function (err, orders) {
        if (err)
            res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection
        res.json(orders);
    });
}

doctor.update = function (req, res) {
    Doctor.findById(req.params.id, function (err, doctor_reco) {

        if (err)
            res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection

        var post_param = req.body;

        if (!doctor_reco) {
            res.send(400);
        }

        doctor_reco.npi = post_param.npi;
        doctor_reco.entityTypeCode = post_param.replacementNpi;
        doctor_reco.employerIdentificationNumber = post_param.employerIdentificationNumber;
        doctor_reco.providerOrganizationName = post_param.providerOrganizationName;
        doctor_reco.providerFirstName = post_param.providerFirstName;
        doctor_reco.providerLastName = post_param.providerLastName;
        doctor_reco.providerMiddleName = post_param.providerMiddleName;
        doctor_reco.whoUpdated = post_param.whoUpdated;
        doctor_reco.providerCredentialText = post_param.providerCredentialText;
        doctor_reco.providerOtherOrganizationName = post_param.providerOtherOrganizationName;
        doctor_reco.providerFirstLineBusinessMailingAddress = post_param.providerFirstLineBusinessMailingAddress;
        doctor_reco.providerSecondLineBusinessMailingAddress = post_param.providerSecondLineBusinessMailingAddress;
        doctor_reco.providerBusinessMailingAddressCityName = post_param.providerBusinessMailingAddressCityName;
        doctor_reco.providerBusinessMailingAddressStateName = post_param.providerBusinessMailingAddressStateName;
        doctor_reco.providerBusinessMailingAddressPostalCode = post_param.providerBusinessMailingAddressPostalCode;
        doctor_reco.providerBusinessMailingAddressCountryCode = post_param.providerBusinessMailingAddressCountryCode;
        doctor_reco.providerBusinessMailingAddressTelephoneNumber = post_param.providerBusinessMailingAddressTelephoneNumber;
        doctor_reco.providerBusinessMailingAddressFaxNumber = post_param.providerBusinessMailingAddressFaxNumber;
        doctor_reco.providerEnumerationDate = post_param.providerEnumerationDate;
        doctor_reco.providerGenderCode = post_param.providerGenderCode;
        doctor_reco.authorizedOfficialLastName = post_param.authorizedOfficialLastName;
        doctor_reco.authorizedOfficialFirstName = post_param.authorizedOfficialFirstName;
        doctor_reco.authorizedOfficialMiddleName = post_param.authorizedOfficialMiddleName;
        doctor_reco.authorizedOfficialTelephoneNumber = post_param.authorizedOfficialTelephoneNumber;
        doctor_reco.healthcareProviderTaxonomyCode_1 = post_param.healthcareProviderTaxonomyCode_1;
        doctor_reco.providerLicenseNumber_1 = post_param.providerLicenseNumber_1;
        doctor_reco.lastUpdate = post_param.lastUpdate;


        if (!post_param.npi) {
            res.status(400).send('Bad Request') //@TODO - Log actual error in "error_log" collection
        }
        doctor_reco.save(function (err) {
            if (err)
                res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection

            res.json({ message: 'Updated Doctor!' });
        });
    });
}

doctor.delete = function (req, res) {
    Doctor.remove({
        _id: req.params.id
    }, function (err, bear) {
        if (err)
            res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection
        res.json({ message: 'Doctor Deleted!' });
    });
}

module.exports = doctor;