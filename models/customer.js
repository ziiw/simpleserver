const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// May not use this thing
module.exports = mongoose.model('Customer', new Schema({ 
    firstname: String,
    lastname: String,
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
    address: String,
    email: Array,
    language: String
}));