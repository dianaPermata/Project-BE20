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
const verifyToken = require("../middlewares/user.auth");

router.get("/", getAllUser);
router.get("/:id", getUserByID);
router.post("/register", registerUser);
router.delete("/:id", verifyToken, deleteUserByID);
router.patch("/:id", verifyToken, updateUserByID);
router.post("/login", userLogin);

module.exports = router;