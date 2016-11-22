const mongoose = require('./_init');
const Schema = mongoose.Schema;

var CarSchema = new Schema({
    name: String
});

CarSchema.vartual('CarType', {
    ref: 'CarMeta',
    localField: 'type',
    foreignField: '_id'
}, { toJSON: { virtuals: true }});

module.exports = mongoose.model('Car', CarSchema);
