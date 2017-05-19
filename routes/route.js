var express = require("express");
var router = express.Router();


var patient = require('../app/controllers/patient');
var doctor = require('../app/controllers/doctor');


router.get("/api/patients",patient.find)
router.get("/api/patients/:id",patient.find_by_id)
router.post("/api/patients", patient.create);
router.put("/api/patients/:id", patient.update);
router.delete("/api/patients/:id",patient.delete);

router.get("/api/doctors",doctor.find)
router.get("/api/doctors/:id",doctor.find_by_id)
router.post("/api/doctors", doctor.create);
router.put("/api/doctors/:id", doctor.update);
router.delete("/api/doctors/:id",doctor.delete);

module.exports = router;