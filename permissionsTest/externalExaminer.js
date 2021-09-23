 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const loginPage = require('../pageObjects/loginPage.js');
const config = require('../config/mainConfig.js');
const login = require('../login/loginTest.js')

describe('external examiner permisions ->', function() {
  login(config.externalExEmail, config.externalExPassword)
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('unauthorised for web application', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    $('h1[class="error-title"]').waitForDisplayed(8000);
    const error = $('h1[class="error-title"]').getText();
    expect(error).to.eql('Unauthorized');
  });
});
