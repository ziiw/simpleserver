const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Product', new Schema({ 
    name: String,
    description: String,
    meta: Object,
    price: Number,
    category: { type: Schema.Types.String, ref: 'Category' },
    isVisible: Boolean
}));