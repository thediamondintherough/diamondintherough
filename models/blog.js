'use strict'
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    id: String,
    title: String,
    author: String,
    authorId: String,
    preview: String,
    content: String,
    image: String,
    published: Date
});

const BlogModel = mongoose.model('Blog', BlogSchema);

module.exports = BlogModel;