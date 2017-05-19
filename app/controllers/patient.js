var Patient = require('../models/patientDAO');
var errorlog = require('../utils/errorlog');
var patient = {};


patient.create = function (req, res) {
    var post_param = req.body;
    if (!post_param.tenantId || !post_param.userid) {
        errorlog.log_error("POST /patients", "tenantId/userid is empty");  //Log actual error in "error_log" collection
        res.status(400).send('Bad Request')
    }
    var patient_reco = new Patient();

    patient_reco.tenantId = post_param.tenantId;
    patient_reco.userid = post_param.userid;
    patient_reco.customerId = post_param.customerId;
    patient_reco.portalId = post_param.portalId;
    patient_reco.status = post_param.status;
    patient_reco.dateUpdated = post_param.dateUpdated;
    patient_reco.whoCreated = post_param.whoCreated;
    patient_reco.whoUpdated = post_param.whoUpdated;
    patient_reco.firstName = post_param.firstName;
    patient_reco.lastName = post_param.lastName;
    patient_reco.fullname = post_param.firstName+' '+post_param.lastName;
    patient_reco.phoneMobile = post_param.phoneMobile;
    patient_reco.referral = JSON.stringify(post_param.referral);
    patient_reco.email = post_param.email;


    patient_reco.save(function (err) {
        if (err) {
            errorlog.log_error("POST /patients", err);  //Log actual error in "error_log" collection
            res.status(500).send('Internal Server Error');
        }
        res.json({ message: 'Created New Patient!' });
    });
}

patient.find = function (req, res) {
    Patient.find(function (err, patient_reco) {
        if (err)
            res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection

        res.json(patient_reco);
    });
}

patient.find_by_id = function (req, res) {
    Patient.findById(req.params.id, function (err, orders) {
        if (err)
            res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection
        res.json(orders);
    });
}

patient.update = function (req, res) {
    Patient.findById(req.params.id, function (err, patient_reco) {

        if (err)
            res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection

        var post_param = req.body;

        if (!patient_reco) {
            res.send(400);
        }
        
        patient_reco.tenantId = post_param.tenantId;
        patient_reco.userid = post_param.userid;
        patient_reco.customerId = post_param.customerId;
        patient_reco.portalId = post_param.portalId;
        patient_reco.status = post_param.status;
        patient_reco.dateUpdated = post_param.dateUpdated;
        patient_reco.whoCreated = post_param.whoCreated;
        patient_reco.whoUpdated = post_param.whoUpdated;
        patient_reco.firstName = post_param.firstName;
        patient_reco.lastName = post_param.lastName;
        patient_reco.fullname = post_param.firstName+' '+post_param.lastName;
        patient_reco.phoneMobile = post_param.phoneMobile;
        patient_reco.referral = JSON.stringify(post_param.referral);
        patient_reco.email = post_param.email;


        if (!post_param.tenantId || !post_param.userid) {
            res.status(400).send('Bad Request') //@TODO - Log actual error in "error_log" collection
        }
        patient_reco.save(function (err) {
            if (err)
                res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection

            res.json({ message: 'Updated Patient!' });
        });
    });
}

patient.delete = function (req, res) {
    Patient.remove({
        _id: req.params.id
    }, function (err, bear) {
        if (err)
            res.status(500).send('Internal Server Error'); //@TODO - Log actual error in "error_log" collection
        res.json({ message: 'Patient Deleted!' });
    });
}

module.exports = patient;