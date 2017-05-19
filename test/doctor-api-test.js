//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Doctor = require('../app/models/doctorDAO.js');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Doctor', () => {
    /*
     * Test the /GET route
     */
    describe('/GET doctors', () => {
        it('it should GET all the doctors', (done) => {
            chai.request(server)
                .get('/api/doctors')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });
    /*
     * Test the /POST route
     */

    describe('/POST doctors', () => {
        it('it should  POST a doctors', (done) => {
            let doctor = {
                npi: "140001",
                entityTypeCode: "1000014",
                replacementNpi: "152477",
                employerIdentificationNumber: "445565",
                providerOrganizationName: "Orgname",
                providerFirstName:"firstname",
                providerLastName: "lastName",
                providerMiddleName: "middlename",
                providerCredentialText: "Lastname",
                providerOtherOrganizationName: "Org Name",
                providerFirstLineBusinessMailingAddress: "Street name,City",
                providerSecondLineBusinessMailingAddress: "business@test.com",
                providerBusinessMailingAddressCityName: "cityname",
                providerBusinessMailingAddressStateName:"statename",
                providerBusinessMailingAddressPostalCode:"",
                providerBusinessMailingAddressCountryCode:"US",
                providerBusinessMailingAddressTelephoneNumber:"",
                providerBusinessMailingAddressFaxNumber:"",
                providerEnumerationDate:"2017-05-05",
                providerGenderCode:"M",
                authorizedOfficialLastName:"Lastname",
                authorizedOfficialFirstName:"FirstName",
                authorizedOfficialMiddleName:"middleName",
                authorizedOfficialTelephoneNumber:"00547785588",
                healthcareProviderTaxonomyCode_1:"TXN",
                providerLicenseNumber_1:"LICNO11233",
                lastUpdate:"2017-05-05T00:00:00.000Z"
            }
            chai.request(server)
                .post('/api/doctors')
                .send(doctor)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    /*
     * Test the /GET/:id route
     */
    describe('/GET/:id doctors', () => {
        it('it should GET a doctors by the given id', (done) => {
            let doctors = new Doctor({
                npi: "140001",
                entityTypeCode: "1000014",
                replacementNpi: "152477",
                employerIdentificationNumber: "445565",
                providerOrganizationName: "Orgname",
                providerFirstName:"firstname",
                providerLastName: "lastName",
                providerMiddleName: "middlename",
                providerCredentialText: "Lastname",
                providerOtherOrganizationName: "Org Name",
                providerFirstLineBusinessMailingAddress: "Street name,City",
                providerSecondLineBusinessMailingAddress: "business@test.com",
                providerBusinessMailingAddressCityName: "cityname",
                providerBusinessMailingAddressStateName:"statename",
                providerBusinessMailingAddressPostalCode:"",
                providerBusinessMailingAddressCountryCode:"US",
                providerBusinessMailingAddressTelephoneNumber:"",
                providerBusinessMailingAddressFaxNumber:"",
                providerEnumerationDate:"2017-05-05",
                providerGenderCode:"M",
                authorizedOfficialLastName:"Lastname",
                authorizedOfficialFirstName:"FirstName",
                authorizedOfficialMiddleName:"middleName",
                authorizedOfficialTelephoneNumber:"00547785588",
                healthcareProviderTaxonomyCode_1:"TXN",
                providerLicenseNumber_1:"LICNO11233",
                lastUpdate:"2017-05-05T00:00:00.000Z"
            });
            doctors.save((err, doctors) => {
                chai.request(server)
                    .get('/api/doctors/' + doctors.id)
                    .send(doctors)
                    .end((err, res) => {
                        console.log("doctors.id",doctors.id);
                        res.should.have.status(200);
                        done();
                    });
            });
        });
    });
    /*
     * Test the /PUT/:id route
     */
    describe('/PUT/:id doctors', () => {
        it('it should UPDATE a doctor given the id', (done) => {
            let doctors = new Doctor({
                npi: "140001",
                entityTypeCode: "1000014",
                replacementNpi: "152477",
                employerIdentificationNumber: "445565",
                providerOrganizationName: "Orgname",
                providerFirstName:"firstname",
                providerLastName: "lastName",
                providerMiddleName: "middlename",
                providerCredentialText: "Lastname",
                providerOtherOrganizationName: "Org Name",
                providerFirstLineBusinessMailingAddress: "Street name,City",
                providerSecondLineBusinessMailingAddress: "business@test.com",
                providerBusinessMailingAddressCityName: "cityname",
                providerBusinessMailingAddressStateName:"statename",
                providerBusinessMailingAddressPostalCode:"",
                providerBusinessMailingAddressCountryCode:"US",
                providerBusinessMailingAddressTelephoneNumber:"",
                providerBusinessMailingAddressFaxNumber:"",
                providerEnumerationDate:"2017-05-05",
                providerGenderCode:"M",
                authorizedOfficialLastName:"Lastname",
                authorizedOfficialFirstName:"FirstName",
                authorizedOfficialMiddleName:"middleName",
                authorizedOfficialTelephoneNumber:"00547785588",
                healthcareProviderTaxonomyCode_1:"TXN",
                providerLicenseNumber_1:"LICNO11233",
                lastUpdate:"2017-05-05T00:00:00.000Z"
            });
            doctors.save((err, doctors) => {
                chai.request(server)
                    .put('/api/doctors/' + doctors.id)
                    .send(doctors)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
    /*
     * Test the /DELETE/:id route
     */
    describe('/DELETE/:id doctors', () => {
        it('it should DELETE a doctor given the id', (done) => {
            let doctor = new Doctor({
                npi: "140001",
                entityTypeCode: "1000014",
                replacementNpi: "152477",
                employerIdentificationNumber: "445565",
                providerOrganizationName: "Orgname",
                providerFirstName:"firstname",
                providerLastName: "lastName",
                providerMiddleName: "middlename",
                providerCredentialText: "Lastname",
                providerOtherOrganizationName: "Org Name",
                providerFirstLineBusinessMailingAddress: "Street name,City",
                providerSecondLineBusinessMailingAddress: "business@test.com",
                providerBusinessMailingAddressCityName: "cityname",
                providerBusinessMailingAddressStateName:"statename",
                providerBusinessMailingAddressPostalCode:"",
                providerBusinessMailingAddressCountryCode:"US",
                providerBusinessMailingAddressTelephoneNumber:"",
                providerBusinessMailingAddressFaxNumber:"",
                providerEnumerationDate:"2017-05-05",
                providerGenderCode:"M",
                authorizedOfficialLastName:"Lastname",
                authorizedOfficialFirstName:"FirstName",
                authorizedOfficialMiddleName:"middleName",
                authorizedOfficialTelephoneNumber:"00547785588",
                healthcareProviderTaxonomyCode_1:"TXN",
                providerLicenseNumber_1:"LICNO11233",
                lastUpdate:"2017-05-05T00:00:00.000Z"
            });
            doctor.save((err, doctors) => {
                chai.request(server)
                    .delete('/api/doctors/' + doctors.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
});