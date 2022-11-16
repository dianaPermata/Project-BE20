const express = require("express");
const router = express.Router();

const {
  getAllDoctor,
  getDoctorByID,
  registerDoctor,
  deleteDoctorByID,
  updateDoctorByID,
  doctorLogin
} = require("../controllers/doctor.controller");

router.get("/", getAllDoctor);
router.get("/:id", getDoctorByID);
router.post("/register", registerDoctor);
router.delete("/:id", deleteDoctorByID);
router.patch("/:id", updateDoctorByID);
router.post("/login", doctorLogin);

module.exports = router;