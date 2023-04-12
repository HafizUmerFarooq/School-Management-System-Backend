const mongoose = require('mongoose');

const faculty = new mongoose.Schema({
    name: String,
    phone: String,
    salary:Number,
    address: String,
    dateOfJoining: String
});

module.exports = mongoose.model('faculty',faculty);