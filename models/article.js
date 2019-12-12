var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    headline: {
        type: String,
        required: true,
        unique: true
    },
    photo: {
        type: String,
    },
    link: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    saved: {
        type: Boolean,
        default: false
    }
})

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;