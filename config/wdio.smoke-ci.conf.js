const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/smokeTest/examinerCreate.js',
      'test/selenium/smokeTest/cleanInvites.js',
      'test/selenium/smokeTest/teacherPermissions.js',
      'test/selenium/smokeTest/loginWith365.js',
      'test/selenium/smokeTest/schoolAndStudentsCreate.js',
      'test/selenium/smokeTest/editResults.js',
      'test/selenium/smokeTest/createRemoveStudent.js',
      'test/selenium/smokeTest/moveStudent.js',
      'test/selenium/smokeTest/moveResult.js',
      'test/selenium/smokeTest/splitSession.js',
      'test/selenium/smokeTest/seDomainTest.js'
    ],
  },
],

config.onPrepare = function (suite) {
},

config.onComplete = function() {
},

config.reporters =  ['spec'],

config.beforeSuite = function (suite) {
},


exports.config = config;