var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var UserSchema = new mongoose.Schema({
  username : {type: String, unique: true, required: true},
  password : {type: String, unique: false, required: true}
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);
