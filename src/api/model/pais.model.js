const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SpainSchema = new Schema({
    name: {type: String, required: true},
    comunidades: [{type: Schema.Types.ObjectId, ref: "comunidades"}],
    photo: {type: String, required: false}
});

const Spain = mongoose.model('spain', SpainSchema);

module.exports = Spain;
