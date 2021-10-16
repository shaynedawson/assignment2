const mongoose = require('mongoose');

module.exports = mongoose.model('Student', new mongoose.Schema({
 id: String,
 fname: String,
 password: String,
 c_name: String,
 tutor: String
}));