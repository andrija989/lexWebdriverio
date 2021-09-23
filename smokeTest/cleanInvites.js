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
  
  login(config.ExAdminEmail, config.ExAdminPassword)
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
 
  it('go to administration page', function() {
    allureReporter.addFeature('Smoke test')
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
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('clear value from filter field')
    let filter = administratorPage.filterOrganisation;
    filter.clearValue();
    allureReporter.endStep()

    allureReporter.startStep('find vivify organisation end select it')
    $('a[href="/admin/organization/84f1fb52-77ca-4e1c-a116-f0dd86e195fd"]').waitForDisplayed(8000);
    $('a[href="/admin/organization/84f1fb52-77ca-4e1c-a116-f0dd86e195fd"]').click();
    browser.pause(2000)
    allureReporter.endStep()
  });

  it('delete invited user', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    allureReporter.startStep('find invite for new creted user')
    $('=Jack Dot').click();
    allureReporter.endStep()

    allureReporter.startStep('delete invite')
    organisationPage.deleteInviteRegistered();
    browser.pause(2000);
    allureReporter.endStep()

    allureReporter.startStep('confirm that invite is deleted')
    let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
    expect(deleteModal).to.eql(false);
    allureReporter.endStep()
    browser.pause(2000)
  });

  it('delete cookie', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Minor')
    browser.execute(function (key) {
      return this.localStorage.clear()
      })
  })
});
