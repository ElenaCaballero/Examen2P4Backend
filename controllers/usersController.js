var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');
var joi = require('joi');

exports.createUser = {
  auth: {
    mode:'try',
    strategy:'session'
  },
  validate: {
    payload: {
      username: joi.string().required(),
      password: joi.string().min(2).max(200).required()
    }
  },
  handler: function(request, reply) {
    console.log(request.payload);
    var newUser = new user({
      username : request.payload.username,
      password : SHA3(request.payload.password)
    });
    newUser.save(function (err) {
      console.log(err);
      if(err){
        return reply(boom.notAcceptable('Username must be unique: ' + err));
      }else{
        return reply('ok');
      };
    });
  }
};
