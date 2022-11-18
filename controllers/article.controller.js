require('dotenv').config();
const jwt = require('jsonwebtoken');
const Article = require("../models/article");

module.exports = {
  getAllArticle: async (req, res) => {
    try {
      const articles = await Article.find({}, "-__v").populate("writter", "name")
      
      res.status(200).json({
        message: "Get Articles Data",
        data: articles
      })
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  getArticleByID: async (req, res) => {    
    try {
      const articles = await Article.findById(req.params.id, "-__v").populate("writter", "name")

      if(!articles){
        res.status(404).json({
          message : "Could not Found"
        });
    } else{
      res.status(200).json({
        message: "You Searched for",
        data: articles
      })
    }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  addArticle: (req, res) => {
    const newArticle = req.body
    const article = new Article(newArticle)

    article.save()
    res.status(201).json({
      message: "Add Article Succes!",
    })
  },

  deleteArticleByID: async (req, res) => {
    try {
      const articles = await Article.findById(req.params.id, "-__v")

      if(!articles){
        res.status(404).json({
          message : "Could not Found"
        });
    } else{
      articles.deleteOne()
      res.status(201).json(
        {message: "Article Deleted!"
      })
    }
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

  updateArticleByID: async (req, res) => {
    try {
      const article = await Article.findById(req.params.id, "-__v")

      Object.assign(article, req.body)
      article.save();
      res.status(201).send({ 
        message : "Article Updated!",
        data : article })
      
   
    } catch (error) {
      res.status(500).json({ message: "Server Error" })
    }
  },

}