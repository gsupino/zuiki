'use strict';
require('babel/register')({
  stage: 0
});

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express=require('express');
const config=require('./config/environment')

//Start the Adapter services
setTimeout(require('./adapters/adapterMongo'),10000);


//Setup server
const server=express();
require('./config/express').expressConfig(server);
require('./routes').serverRoutes(server);

//Start server
const port = config.port;
server.listen(port);

console.log('server.js is listening on port ' + port);