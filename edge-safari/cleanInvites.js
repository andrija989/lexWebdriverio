 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const administratorPage = require('../pageObjects/administratorPage.js');
 const organisationPage = require('../pageObjects/organisationPage.js');
 const config = require('../config/mainConfig.js');
 const generators = require('../utilis/generators.js');
 const login = require('../login/loginTest.js')
 
 describe('clear invites ->', function() {

  login()
  let currentUrl = ''

  it('check url - EDGE', function() {
    currentUrl = browser.getUrl()
  })
  
  it('go to administration page - EDGE', function() {
    allureReporter.addFeature('EDGE - Smoke test')
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

  it('pick organisation - EDGE', function() {
    allureReporter.addFeature('EDGE - Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('clear value from filter field')
    let filter = administratorPage.filterOrganisation;
    filter.clearValue();
    allureReporter.endStep()

    allureReporter.startStep('find vivify organisation end select it')
    $('=Vivify').waitForDisplayed(8000);
    $('=Vivify').click();
    allureReporter.endStep()
  });
 
  it('delete invited user - EDGE', function() {
    allureReporter.addFeature('EDGE - Smoke test')
    allureReporter.addSeverity('Normal')
    if ($('=Jack Dot').isDisplayed(undefined, true)) {
      allureReporter.startStep('find invite for new creted user')
      $('=Jack Dot').click();
      allureReporter.endStep()

      allureReporter.startStep('delete invite')
      organisationPage.deleteInvite();
      browser.pause(2000);
      allureReporter.endStep()

      allureReporter.startStep('confirm that invite is deleted')
      let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
      expect(deleteModal).to.eql(false);
      allureReporter.endStep()
    }
    browser.pause(2000)
  });
 
  it('delete IDP change user - EDGE', function() {
    allureReporter.addFeature('EDGE - Smoke test')
    allureReporter.addSeverity('Normal')
    if (administratorPage.invitationIDP.isDisplayed(undefined, true)) {
      allureReporter.startStep('find user with idp change')
      administratorPage.invitationClick()
      allureReporter.endStep()

      allureReporter.startStep('delete invite')
      organisationPage.deleteInvite();
      browser.pause(2000);
      allureReporter.endStep()

      allureReporter.startStep('confirm that invite is deleted')
      let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
      expect(deleteModal).to.eql(false);
      allureReporter.endStep()
    }
    browser.pause(2000)
  });
});
 