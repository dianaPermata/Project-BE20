const mongoose = require('mongoose');
const { Schema } = mongoose

const articleSchema = new Schema({
  title: {
    type:String,
    required:[true, "Title is Required"]
},
  category: {
    type: String,
    required: [true, "Category is Required"]
},
  content: {
    type: String,
    required: [true, "Content is Required"]
},
  date: String,
  writter : {
    type: mongoose.ObjectId,
    ref: "Doctor"
  }

})

const Article = mongoose.model("Article", articleSchema)

module.exports = Article