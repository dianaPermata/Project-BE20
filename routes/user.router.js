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
router.delete("/:id", verifyToken, deleteUserByID);
router.patch("/:id", verifyToken, updateUserByID);
router.post("/login", verifyToken, userLogin);

module.exports = router;
