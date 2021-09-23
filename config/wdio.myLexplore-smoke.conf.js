const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/myLexplore/header.js',
      'test/selenium/myLexplore/resultsPortalPath.js',
      'test/selenium/myLexplore/flowToFluencyApp.js',
      'test/selenium/myLexplore/myLexploreToResults.js',
      'test/selenium/myLexplore/studentResultToMyLexplore.js',
      'test/selenium/myLexplore/courses.js',
    ],
  },
],

config.onPrepare = function (suite) {
},

exports.config = config;