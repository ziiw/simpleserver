const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Catalog', new Schema({ 
    name: String,
    description: String,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}));