const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComunidadesSchema = new Schema({
    name: {type: String, required: true},
    capital:{type:String, required: true},
    code: {type: String, required: false}
});

const Comunidad = mongoose.model('comunidades', ComunidadesSchema);

module.exports = Comunidad;