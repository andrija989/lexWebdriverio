const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
    {
      maxInstances: 1,
      browserName: 'chrome',
      specs: [
        'test/selenium/smokeTest/tlsVersion.js',
      ],
    },
],
exports.config = config;