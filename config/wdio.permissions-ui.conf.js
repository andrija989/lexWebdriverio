const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/permissionsTest/*.js',
    ],
  },
],

config.onPrepare = function (suite) {
},

config.onComplete = function() {
}

exports.config = config;