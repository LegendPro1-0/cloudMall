var mongoose = require('mongoose');
var shopSchema = mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    telphone: { type: String, required: true },
    fileurl: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    dynamictags: { type: String, required: true }
});

var ShopModel = mongoose.model('shop', shopSchema);

module.exports = ShopModel; 