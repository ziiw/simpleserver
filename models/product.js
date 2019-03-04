const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Product', new Schema({ 
    name: String,
    description: String,
    meta: Object,
    price: Number
}));