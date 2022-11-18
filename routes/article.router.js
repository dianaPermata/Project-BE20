const express = require("express");
const router = express.Router();

const {
  getAllArticle,
  getArticleByID,
  addArticle,
  deleteArticleByID, 
  updateArticleByID
} = require("../controllers/article.controller");
const articleAuth = require("../middlewares/article.auth");

router.get("/", getAllArticle);
router.get("/:id", getArticleByID);  
router.post("/add", addArticle);
router.delete("/:id", articleAuth, deleteArticleByID);
router.patch("/:id", articleAuth, updateArticleByID);

module.exports = router;