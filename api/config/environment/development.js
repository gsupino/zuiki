'use strict';

var MONGO_ADDR = process.env.MONGO_PORT_27017_TCP_ADDR || 'localhost';
var MONGO_PORT = process.env.MONGO_PORT_27017_TCP_PORT || 27017;

// Development specific configuration
// ==================================
module.exports = {
    // MongoDB connection options
    mongo: {
        uri: 'mongodb://' + MONGO_ADDR + ':' + MONGO_PORT + '/mariabakery-dev'
    }

};
