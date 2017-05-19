//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Patient = require('../app/models/patientDAO.js');

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

//Our parent block
describe('Patient', () => {
    beforeEach((done) => { //Before each test we empty the database
        Patient.remove({}, (err) => {
            done();
        });
    });

    /*
     * Test the /GET route
     */
    describe('/GET patients', () => {
        it('it should GET all the patients', (done) => {
            chai.request(server)
                .get('/api/patients')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
    /*
     * Test the /POST route
     */
    describe('/POST patients', () => {
        it('it should  POST a patients', (done) => {
            let patient = {
                tenantId: 'Test0001',
                userid: '1000014',
                customerId: '9999999999',
                portalId: '445565',
                status: 'Open',
                sysState: 'Open',
                dateCreated: '2017-05-05',
                dateUpdated: '2017-05-05',
                whoCreated: 'Admin',
                whoUpdated: 'Admin',
                firstName: 'John',
                lastName: 'Doe',
                fullname: 'John Doe',
                phoneMobile: '8847526955',
                referral: '[{"doctorName" : "doctor2","doctorID":"222"}]',
                email: 'test@test.com'
            }
            chai.request(server)
                .post('/api/patients')
                .send(patient)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    describe('/POST patients Check required field tenantId userid', () => {
        it('it should not POST a patients without tenantId,userid', (done) => {
            let patient = {
                tenantId: "",
                userid: "",
                customerId: "9999999999",
                portalId: "445565",
                status: "Open",
                sysState: "Open",
                dateCreated: "2017-05-05",
                dateUpdated: "2017-05-05",
                whoCreated: "Admin",
                whoUpdated: "Admin",
                firstName: 'John',
                lastName: 'Doe',
                fullname: 'John Doe',
                phoneMobile: '8847526955',
                referral: '[{"doctorName" : "doctor2","doctorID":"222"}]',
                email: 'test@test.com'
            }
            chai.request(server)
                .post('/api/patients')
                .send(patient)
                .end((err, res) => {
                    res.should.have.status(400);
                    res.body.should.be.a('object');
                    done();
                });
        });
    });

    /*
     * Test the /GET/:id route
     */
    describe('/GET/:id patients', () => {
        it('it should GET a patients by the given id', (done) => {
            let patients = new Patient({
                tenantId: "Test0001",
                userid: "1000014",
                customerId: "9999999999",
                portalId: "445565",
                status: "Open",
                sysState: "Open",
                dateCreated: "2017-05-05",
                dateUpdated: "2017-05-05",
                whoCreated: "Admin",
                whoUpdated: "Admin",
                firstName: 'John',
                lastName: 'Doe',
                fullname: 'John Doe',
                phoneMobile: '8847526955',
                referral: '[{"doctorName" : "doctor2","doctorID":"222"}]',
                email: 'test@test.com'
            });
            patients.save((err, patients) => {
                chai.request(server)
                    .get('/api/patients/' + patients.id)
                    .send(patients)
                    .end((err, res) => {
                        res.should.have.status(200);
                        done();
                    });
            });
        });
    });
    /*
     * Test the /PUT/:id route
     */
    describe('/PUT/:id patients', () => {
        it('it should not UPDATE an patients without tenantId & userid', (done) => {
            let patients = new Patient({
                tenantId: "Test0001",
                userid: "1000014",
                customerId: "9999999999",
                portalId: "445565",
                status: "Open",
                sysState: "Open",
                dateCreated: "2017-05-05",
                dateUpdated: "2017-05-05",
                whoCreated: "Admin",
                whoUpdated: "Admin",
                firstName: 'John',
                lastName: 'Doe',
                fullname: 'John Doe',
                phoneMobile: '8847526955',
                referral: '[{"doctorName" : "doctor2","doctorID":"222"}]',
                email: 'test@test.com'
            });
            patients.save((err, patients) => {
                chai.request(server)
                    .put('/api/patients/' + patients.id)
                    .send({ userid: "1000014", portalId: "445565" })
                    .end((err, res) => {
                        res.should.have.status(400);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
    /*
     * Test the /DELETE/:id route
     */
    describe('/DELETE/:id patients', () => {
        it('it should DELETE a patients given the id', (done) => {
            let patients = new Patient({
                tenantId: "Test0001",
                userid: "1000014",
                customerId: "9999999999",
                portalId: "445565",
                status: "Open",
                sysState: "Open",
                dateCreated: "2017-05-05",
                dateUpdated: "2017-05-05",
                whoCreated: "Admin",
                whoUpdated: "Admin",
                firstName: 'John',
                lastName: 'Doe',
                fullname: 'John Doe',
                phoneMobile: '8847526955',
                referral: '[{"doctorName" : "doctor2","doctorID":"222"}]',
                email: 'test@test.com'
            });
            patients.save((err, patients) => {
                chai.request(server)
                    .delete('/api/patients/' + patients.id)
                    .end((err, res) => {
                        res.should.have.status(200);
                        res.body.should.be.a('object');
                        done();
                    });
            });
        });
    });
});