 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const login = require('../../login/loginTest.js')
 
 describe('clear invites ->', function() {
  this.retries(4)
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
 
  it('pick organisation', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('clear value from filter field')
    let filter = administratorPage.filterOrganisation;
    filter.clearValue();
    allureReporter.endStep()

    allureReporter.startStep('find vivify organisation end select it')
    $('=stimulisNorway').waitForDisplayed(8000);
    $('=stimulisNorway').click();
    allureReporter.endStep()
  });
 
  it('delete invited feide user', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    allureReporter.startStep('find invite for new creted user')
    browser.waitUntil(
      () => $('=Jack Feide').isDisplayed() == true,
        {
            timeout: 15000,
            timeoutMsg: 'Jack skol not found'
        }
    );
    var deleteUser = $('=Jack Feide')
    deleteUser.scrollIntoView()
    deleteUser.click();
    allureReporter.endStep()

    allureReporter.startStep('delete invite')
    browser.pause(2000);
    organisationPage.deleteInviteRegistered();
    browser.pause(2000);
    allureReporter.endStep()

    allureReporter.startStep('confirm that invite is deleted')
    let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
    expect(deleteModal).to.eql(false);
    allureReporter.endStep()
    browser.pause(2000)
  });
 });
 