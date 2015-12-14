var usersController = require('./controllers/usersController');
var authController = require('./controllers/authController');
var portalController = require('./controllers/portalController');

exports.endpoints = [
	{method: 'GET', path: '/', config: {handler: function(request, reply){reply('API v1')}}},
	{method: 'POST', path: '/v1/register', config: usersController.createUser},
	{method: 'POST', path: '/v1/login', config: authController.login},
	{method: 'GET', path: '/v1/logout', config: authController.logout},
	{method: 'POST', path: '/v1/usagemonthly', config: portalController.usageMonthly},
  	{method: 'POST', path: '/v1/weeklyusage', config: portalController.weeklyUsage},
  	{method: 'POST', path: '/v1/monthlyusage', config: portalController.monthlyUsage},
  	{method: 'POST', path: '/v1/currentconnections', config: portalController.currentConnections},
  	{method: 'POST', path: '/v1/connectionsweekly', config: portalController.connectionsWeekly},
	{method: 'GET', path: '/Chart.js', handler: { file: 'public/Chart.js' }},
	{method: 'GET', path: '/material.js', handler: { file: 'public/material.js' }}
];
