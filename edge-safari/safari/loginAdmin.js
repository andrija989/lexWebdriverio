 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const baseUrl = require('../../../../wdio.conf');
 const login = require('../../login/loginTest,js')
 
 describe('login smoke test ->', function() {
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
  
  it('go to administration page', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('confirm and login')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('confirm and login')
    organisationPage.toAdminPage()
    browser.pause(3000);
    allureReporter.endStep()
  });
 
  it('pick organisation', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('clear value from filter field')
    let filter = administratorPage.filterOrganisation;
    filter.clearValue();
    allureReporter.endStep()

    allureReporter.startStep('find vivify organisation end select it')
    $('=Vivify').waitForDisplayed(8000);
    browser.url('./admin/organization/84f1fb52-77ca-4e1c-a116-f0dd86e195fd')
    allureReporter.endStep()
  });
 
  it('invite user', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Blocker')
    browser.refresh();
    browser.pause(2000)

    allureReporter.startStep('Create invite for new user')
    if($('=Jack Dot').isDisplayed() === false ) {
      organisationPage.inviteUser();
      organisationPage.submitAllInformationViaContactUsForm(
        'Jack',
        'Dot',
        'jackdot@gmail.com',
        'Examiner',
        'school 2',
        '19/20',
        'class'
      );
    }
    allureReporter.endStep()
  });

  it('activate user', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('SAFARI - Smoke test')

    allureReporter.startStep('Click on invite for new created user')
    var inviteFeide = $('form  a[target="_blank"]').getText()
    browser.url(inviteFeide)
    allureReporter.endStep()

    allureReporter.startStep('switch to new window with invite opened')
    browser.switchWindow('/invite');
    allureReporter.endStep()

    allureReporter.startStep('Logout from current user and switch to new one')
    organisationPage.logoutButtonInvite.click();
    allureReporter.endStep()
  });

  it('login with invite email', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('maximize window')
    browser.maximizeWindow();
    browser.pause(5000);
    allureReporter.endStep()

    allureReporter.startStep('click on login with email button')
    loginPage.selectRegionAction('USA')
    loginPage.loginWithEmailAndPassword.click({ force: true });
    allureReporter.endStep()
  });
 });
 