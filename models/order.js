const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Order', new Schema({ 
    cart: Array,
    delivery: Object,
    payment: Object,
    user: Object,
    discount: String,
    date: Number,
    status: String
}));