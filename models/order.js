const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Order', new Schema({ 
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    delivery: Object,
    payment: Object,
    customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    discount: String,
    status: String
},{
    timestamps: true
}));