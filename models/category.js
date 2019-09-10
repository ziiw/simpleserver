const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = mongoose.model('Category', new Schema({ 
    name: String,
    translations: Array,
    parent: { type: Schema.Types.ObjectId, ref: 'Category' }
}));