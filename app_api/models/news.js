const mongoose = require('mongoose');

//define news Schema

const newsSchema = new mongoose.Schema({
    code: {type: String, require: true, index: true},
    title: {type: String, require: true},
    image: {type: String, require: false},
    alt: {type: String, require: false},
    publishDate: {type: String, require:false},
    author: {type: String, require:false},
    content: {type: String, required:false}
});

module.exports = mongoose.model('news', newsSchema);