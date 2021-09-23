 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const feide = require('../../pageObjects/feide.js')
 const login = require('../../login/loginTest.js')
 
 describe('feide invite ->', function() {
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

    allureReporter.startStep('find norway organisation end select it')
    $('=stimulisNorway').waitForDisplayed(8000);
    $('=stimulisNorway').click();
    allureReporter.endStep()
  });
 
  it('invite feide user', function() {
  allureReporter.addFeature('Smoke test')
  allureReporter.addSeverity('Blocker')
  browser.pause(2000)

  allureReporter.startStep('Create invite for new user feide')
  if($('=Jack Feide').isDisplayed() === false ) {
    organisationPage.inviteUser();
    organisationPage.submitFeideInvite(
      'Jack',
      'Feide',
      'andrija.perovic+faide9@vivifyideas.com',
      'Quality administrator',
    );
  }
  browser.pause(2000)
  allureReporter.endStep()
  });

  it('activate user feide', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('Smoke test')

    allureReporter.startStep('Find feide user')
    browser.pause(2000)
    $('=Jack Feide').click();
    allureReporter.endStep()

    allureReporter.startStep('Catch invite link')
    browser.pause(2000)
    var inviteFeide = $('form  a[target="_blank"]').getText()
    allureReporter.endStep()

    allureReporter.startStep('open menu in navigation bar')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('logout')
    organisationPage.logout()
    allureReporter.endStep()

    allureReporter.startStep('check if you are loged out')
    browser.pause(3000)
     allureReporter.endStep()

    allureReporter.startStep('Click on invite for new created user')
    browser.url(inviteFeide)
    allureReporter.endStep()
  });

  // it('login with invite email', function() {
  //   allureReporter.addFeature('Smoke test')
  //   allureReporter.addSeverity('Critical')

  //   allureReporter.startStep('maximize window')
  //   browser.maximizeWindow();
  //   browser.pause(5000);
  //   allureReporter.endStep()

  //   allureReporter.startStep('click on login with email button')
  //   loginPage.loginWithEmailAndPassword.click({ force: true });
  //   allureReporter.endStep()
  // });

  it('register with guest feide account', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('select guest feide')
    feide.guestButtonClick()
    allureReporter.endStep()
  });

  it('login with feide account', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('login feide')
    feide.loginFeide('andrijafeide9', 'Admin123')
    allureReporter.endStep()
  })

  it('check url', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('check url to be lexplore')
    browser.pause(5000)
    var url = browser.getUrl()
    expect(url).to.include('/organization/947db3fe-f500-46a9-b16e-e9eacf4c464a')
  })

 });
 