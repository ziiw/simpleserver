const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Product', new Schema({ 
    reference: String,
    name: String,
    description: String,
    meta: Object,
    price: Number,
    priceHT: Number,
    visuals: Array,
    category: { type: Schema.Types.String, ref: 'Category' },
    quantity: Number,
    brand: String,
    isVisible: Boolean
}));