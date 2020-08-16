var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var customerSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    address: String,
    city: String,
    pinCode: String,
    country: String
}, {collection: 'customer'});
customerSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('customer', customerSchema);