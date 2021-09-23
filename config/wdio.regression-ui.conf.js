const { join } = require('path');
const { config } = require('../../../wdio.conf.js');
const path = require('path')
const fs = require('fs')

global.downloadDir = path.join(__dirname, 'tempDownload');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/regression/createOrg.js',
      'test/selenium/regression/crudOrg.js',
      'test/selenium/regression/editUser.js',
      'test/selenium/regression/cleanInvites.js',
      'test/selenium/regression/idpChange.js',
    ],
  },
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
      'test/selenium/regression/qaMessages/*.js',
      'test/selenium/regression/login/negativeCases.js',
      'test/selenium/regression/leftNavigation.js',
      'test/selenium/regression/qualityPage.js',
      'test/selenium/regression/feide/login.js',
      'test/selenium/regression//feide/invite.js',
      'test/selenium/regression/feide/cleanNorway.js',
      'test/selenium/regression/skolfederation/login.js',
      'test/selenium/regression/skolfederation/invite.js',
      'test/selenium/regression/skolfederation/cleanSweden.js',
      'test/selenium/regression/stickyWords.js',
      'test/selenium/regression/languages/*.js',
      'test/selenium/regression/register/*.js',
      'test/selenium/regression/modals/*.js',
      'test/selenium/regression/trainingSchool/*.js',
      'test/selenium/regression/qustions/edit.js',
      'test/selenium/regression/classTable.js',
      'test/selenium/regression/student/getStudents.js',
      'test/selenium/regression/student/recomendationText.js',
      'test/selenium/regression/user/edit2Organisations.js',
    ],
  },
  {
    maxInstances: 1,
    browserName: 'chrome',
    'goog:chromeOptions': { 
      args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
    },
    specs: [
      'test/selenium/API/login.js',
      'test/selenium/regression/clever/checkSync.js'
    ],
  },
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
      'test/selenium/regression/clever/checkSyncPortal.js'
    ],
  },
],

exports.config = config;