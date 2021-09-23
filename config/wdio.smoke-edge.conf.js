const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'MicrosoftEdge',
    specs: [
      'test/selenium/edge-safari/organisationCRUD.js',
      'test/selenium/edge-safari/cleanInvites.js',
      'test/selenium/edge-safari/permissions.js',
      'test/selenium/edge-safari/officeLogin.js',
      'test/selenium/edge-safari/schoolCRUD.js',
      'test/selenium/edge-safari/resultsCRUD.js',
      'test/selenium/smokeTest/seDomainTest.js'
    ],
  },
],

config.onPrepare = function (suite) {
},

exports.config = config;