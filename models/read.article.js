const readSchema = new Schema(
    {
        User: {
            type: mongoose.ObjectId,
            ref: "User"
        },
        article: {
            type: mongoose.ObjectId,
            ref: "Article"
        },
    })


const readArticle = mongoose.model('readArticle', readSchema);

module.exports = readArticle;