const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
    {
      maxInstances: 1,
      browserName: 'chrome',
      specs: [
        'test/selenium/API/login.js',
      ],
    },
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': { 
        args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
      },
      specs: [
        'test/selenium/API/sisIntegration.js',
        'test/selenium/API/organisationCRUD.js',
        'test/selenium/API/userCRUD.js',
        'test/selenium/API/schoolCRUD.js',
        'test/selenium/API/classCRUD.js',
        'test/selenium/API/studentCRUD.js',
        'test/selenium/API/featureStudentImport.js',
        'test/selenium/API/featureMoveStudent.js',
        'test/selenium/API/recordingsCRUD.js',
        'test/selenium/API/emailFilter/emailFilterAdmin.js',
        'test/selenium/API/deleteToken.js',
      ],
    },
    {
      maxInstances: 1,
      browserName: 'chrome',
      specs: [
        'test/selenium/API/emailFilter/login.js',
      ],
    },
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': { 
        args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
      },
      specs: [
        'test/selenium/API/emailFilter/filter.js',
        'test/selenium/API/deleteToken.js',
      ],
    },
],
exports.config = config;