 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const loginPage = require('../pageObjects/loginPage.js');
const config = require('../config/mainConfig.js');
const organisationPage = require('../pageObjects/organisationPage.js');
const administratorPage = require('../pageObjects/administratorPage.js');
const login = require('../login/loginTest.js')

describe('user admin permisions ->', function() {

  login(config.userAdminEmail, config.userAdminPassword)
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('pick organisation', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('clear value from filter field')
    browser.pause(3000)
    let filter = administratorPage.filterOrganisation;
    filter.clearValue();
    allureReporter.endStep()

    allureReporter.startStep('find vivify organisation end select it')
    $('=Vivify').waitForDisplayed(8000);
    $('=Vivify').click();
    allureReporter.endStep()
  });

  it('can invite users', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Blocker')
    browser.pause(5000)
    organisationPage.inviteUserButton.waitForDisplayed(8000);
    const invite = organisationPage.inviteUserButton.isDisplayed();
    expect(invite).to.eql(true);
  });

  it('can invite only predefined roles', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    browser.pause(2000)
    organisationPage.inviteUser();
    browser.pause(2000);
    const selectBox = organisationPage.userRole;
    selectBox.selectByVisibleText('Teacher');
    selectBox.selectByVisibleText('Org. overview');
    selectBox.selectByVisibleText('Supervisor');
    selectBox.selectByVisibleText('Principal');
    selectBox.selectByVisibleText('User administrator');
  });

  it('exit modal', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Blocker')
    organisationPage.exitModal.click({ force: true });
  });

  it('logout user admin', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    allureReporter.startStep('open menu in navigation bar')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('logout')
    organisationPage.logout()
    allureReporter.endStep()

    allureReporter.startStep('check if you are loged out')
    browser.pause(3000)
    var url = browser.getUrl()
    expect(url).to.include('https://logindev.lexplore.com')
    allureReporter.endStep()
  })
});
