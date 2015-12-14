var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var giftController = require('./controllers/giftController');

exports.endpoints = [
	{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1')}}},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'POST', path: '/v1/registergifts', config: giftController.createGift}
];
