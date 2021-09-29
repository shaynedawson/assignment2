const mongoose = require('mongoose');

module.exports = mongoose.model('Student', new mongoose.Schema({
 id: String,
 fname: String,
 lname: String,
 c_name: String,
 tutor: String
}));