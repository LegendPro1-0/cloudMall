var mongoose = require('mongoose');
var addressSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    list: { type: Array, required: true }
});

var AddressModel = mongoose.model('address', addressSchema);

module.exports = AddressModel;