const { join } = require('path');
const { config } = require('../../../wdio.conf.js');
const path = require('path')
const fs = require('fs')

global.downloadDir = path.join(__dirname, 'tempDownload');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': {
      prefs: {
        'directory_upgrade': true,
        'prompt_for_download': false,
        'download.default_directory': downloadDir
      }
    },
    specs: [
      'test/selenium/regression/excel/exportUSA.js',
      'test/selenium/regression/excel/exportLog.js',
    ],
  },
],

exports.config = config;