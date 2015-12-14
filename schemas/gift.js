var mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');

var GiftSchema = new mongoose.Schema({
  nombre : {type: String, unique: false, required: true},
  descripcion : {type: String, unique: false, required: true},
  peso : {type: String, unique: false, required: true},
  destinatario : {type: String, unique: true, required: true},
  status : {type: String}
});

UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Gift', GiftSchema);
