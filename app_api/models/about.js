const mongoose = require('mongoose');

//Define about schema
const aboutSchema = new mongoose.Schema({
    code: {type: String, require: true, index: true},
    title: {type: String, require: true},
    image: {type: String, require: false},
    alt: {type: String, require: false},
    publishDate: {type: Date, require:false},
    author: {type: String, require:false}

});
module.exports = mongoose.model('about', aboutSchema);