const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
  {
    maxInstances: 10,
    browserName: 'chrome',
    specs: [
      'test/selenium/loadTest/*.js',
    ],
  },
],
exports.config = config;

