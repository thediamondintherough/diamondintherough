'use strict'
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    subject: String,
    message: String
});

const ContactModel = mongoose.model('Contact', ContactSchema);

module.exports = ContactModel;