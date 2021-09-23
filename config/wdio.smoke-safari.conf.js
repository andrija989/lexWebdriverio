const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'safari',
    'safari:options':
    {
      technologyPreview: true
    },
    specs: [
      'test/selenium/edge-safari/safari/loginAdmin.js',
      'test/selenium/edge-safari/safari/officeLogin.js',
      'test/selenium/edge-safari/safari/cleanInvites.js',
      'test/selenium/edge-safari/safari/schoolCRUD.js',
      'test/selenium/edge-safari/safari/resultsCRUD.js',
      'test/selenium/smokeTest/seDomainTest.js'
    ],
  },
],

config.onPrepare = function (suite) {
},

exports.config = config;