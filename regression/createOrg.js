 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const administratorPage = require('../pageObjects/administratorPage.js');
 const organisationPage = require('../pageObjects/organisationPage.js');
 const config = require('../config/mainConfig.js');
 const generators = require('../utilis/generators.js');
 const baseUrl = require('../../../wdio.conf');
 const login = require('../login/loginTest.js')
 
 describe('organisation create ->', function() {
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
 
  it('go to administration page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('open menu in navigation bar')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('select admin page')
    organisationPage.toAdminPage()
    browser.pause(3000);
    allureReporter.endStep()
  });

  it('wait for admin page to load', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    allureReporter.startStep('load page')
    let filter = administratorPage.filterOrganisation;
    filter.clearValue();
    allureReporter.endStep()
  })
 
  const organisation = new Date().toLocaleString()
  const shortOrg = generators.randomStringFourDigits()
  it('add organisation', function(done) {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('find vivify org and select it')
    administratorPage.clickAddOrganisation()
    browser.pause(3000)
    allureReporter.endStep()

    allureReporter.startStep('create new organisation form submit')
    administratorPage.createOrganisationForm(`00${organisation}`, shortOrg, `00${organisation}`, 'USA', 'English')
    browser.pause(3000)
    allureReporter.endStep()
  })
});