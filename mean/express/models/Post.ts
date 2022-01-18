const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
    id: Number,
    name : String,
    gender : String
});

module.exports = mongoose.model('Posts',PostSchema); 