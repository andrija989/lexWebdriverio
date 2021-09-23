 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const login = require('../../login/loginTest.js')
 
 describe('check Clever sync times ->', function() {
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('go to administration page', function() {
    allureReporter.addFeature('Clever - sync')
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
 
  it('select sync log', function() {
    allureReporter.addFeature('Clever - sync')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('clear value from filter field')
    let filter = administratorPage.filterOrganisation;
    filter.clearValue();
    allureReporter.endStep()

    allureReporter.startStep('find clever import log')
    administratorPage.cleverErrorClick()
    allureReporter.endStep()
  });

  it('check if last import was', function() {
    allureReporter.addFeature('Clever - sync')
    allureReporter.addSeverity('Critical')
    var today = new Date();
    var dd = String(today.getDate())
    var mm = String(today.getMonth() + 1) 
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    expect(administratorPage.lastCleverImport).to.include(today)
  });

 });
 