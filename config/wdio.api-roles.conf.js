const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
    {
      maxInstances: 1,
      browserName: 'chrome',
      'goog:chromeOptions': { 
        args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
      },
      specs: [
        'test/selenium/API/login/login.js',
        'test/selenium/API/roles/roleQualityAdmin.js',
        'test/selenium/API/login/loginTeacher.js',
        'test/selenium/API/roles/roleTeacher.js',
        'test/selenium/API/login/loginOrgOverview.js',
        'test/selenium/API/roles/roleOrgOverview.js',
        'test/selenium/API/login/loginExaminer.js',
        'test/selenium/API/roles/roleExaminer.js',
        'test/selenium/API/login/loginPrincipal.js',
        'test/selenium/API/roles/rolePrincipal.js',
        'test/selenium/API/login/loginExternalExaminer.js',
        'test/selenium/API/roles/roleExternalExaminer.js',
        'test/selenium/API/login/loginExaminerAdmin.js',
        'test/selenium/API/roles/roleExaminerAdmin.js',
        'test/selenium/API/login/loginUserAdmin.js',
        'test/selenium/API/roles/roleUserAdmin.js',
      ],
    },
],

exports.config = config;