const mongoose = require('./_init');
const Schema = mongoose.Schema;

var CarMetaSchema = new Schema({
    year: Number,
    make: String,
    model: String
});

CarMetaSchema.virtual('CarType', {
    ref: 'Car',
    localField: '_id',
    foreignField: 'type'
});

module.exports = mongoose.model('CarMeta', CarMetaSchema);
