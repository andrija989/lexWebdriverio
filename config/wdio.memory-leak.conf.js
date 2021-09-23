const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': { 
      args: ["--enable-precise-memory-info"]
    },
    specs: [
      'test/selenium/memoryLeak/*.js',
    ],
  },
],

config.onPrepare = function (suite) {
},

config.onComplete = function() {
}

exports.config = config;