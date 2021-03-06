var user = require('../schemas/user');
var SHA3 = require("crypto-js/sha3");
var boom = require('boom');
var joi = require('joi');

exports.createGift = {
  auth: {
    mode:'try',
    strategy:'session'
  },
  validate: {
    payload: {
      nombre : joi.string().required(),
      descripcion : joi.string().required(),
      peso : joi.string().required(),
      destinatario : joi.string().required(),
      status : joi.string().required()
    }
  },
  handler: function(request, reply) {
    console.log(request.payload);
    var newGift = new gift({
      nombre : request.payload.nombre,
      descripcion : request.payload.descripcion,
      peso : request.payload.peso,
      destinatario : request.payload.destinatario,
      status : request.payload.status
    });
    newGift.save(function (err) {
      console.log(err);
      if(err){
        return reply(boom.notAcceptable('Destinatary must be unique: ' + err));
      }else{
        return reply('ok');
      };
    });
  }
};
