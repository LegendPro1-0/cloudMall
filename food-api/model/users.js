var mongoose = require('mongoose');
var userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true }
});

var UserModel = mongoose.model('user', userSchema);

module.exports = UserModel;