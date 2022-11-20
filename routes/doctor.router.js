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
const doctorAuth = require("../middlewares/doctor.auth");

router.get("/", getAllDoctor);
router.get("/:id", getDoctorByID);
router.post("/register", registerDoctor);
router.delete("/:id", doctorAuth, deleteDoctorByID);
router.patch("/:id", doctorAuth, updateDoctorByID);
router.post("/login", doctorLogin);

module.exports = router;