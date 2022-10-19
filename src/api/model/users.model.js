const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const { validationPassword, validationEmail } = require('../../validators/validation');

const UsersSchema = new Schema({
    email: {type: String, required: true},
    password: {type: String, required: true}
});


const User = mongoose.model('User', UsersSchema);

module.exports = User;