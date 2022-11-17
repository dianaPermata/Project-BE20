const express = require("express");
const router = express.Router();

const {
  getAllUser,
  getUserByID,
  registerUser,
  deleteUserByID,
  updateUserByID,
  userLogin
} = require("../controllers/user.controller");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/register", registerUser);
router.delete("/:id", deleteUserByID);
router.patch("/:id", updateUserByID);
router.post("/login", userLogin);

module.exports = router;