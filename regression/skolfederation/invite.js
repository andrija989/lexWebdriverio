 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const feide = require('../../pageObjects/feide.js')
 const skolfederation = require('../../pageObjects/skolfederationPage.js')
 const login = require('../../login/loginTest.js')
 
 describe('skolfederation invite ->', function() {
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

    allureReporter.startStep('find sweden organisation end select it')
    $('=stimulisSweden').waitForDisplayed(8000);
    $('=stimulisSweden').click();
    allureReporter.endStep()
  });
 
  it('invite skolfederation user', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Blocker')
    browser.pause(2000)

    allureReporter.startStep('Create invite for new user skolfederation')
    if($('=Jack Feide').isDisplayed() === false ) {
      organisationPage.inviteUser();
      organisationPage.submitFeideInvite(
        'Jack',
        'Skol',
        'jackskol@gm.com',
        'Quality administrator',
      );
    }
    allureReporter.endStep()
  });

  it('activate user skolfederation', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('Smoke test')

    allureReporter.startStep('Find feide user')
    browser.pause(2000)
    $('=Jack Skol').click();
    allureReporter.endStep()

    allureReporter.startStep('Catch invite link')
    browser.pause(2000)
    var inviteFeide = $('form  a[target="_blank"]').getText()
    allureReporter.endStep()

    allureReporter.startStep('open menu in navigation bar')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    organisationPage.openUserMenu()
    browser.pause(2000)
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

  it('select skolfederation', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('select guest feide')
    skolfederation.findSkolFederationTrialIDP()
    allureReporter.endStep()
  });

  it('fill form invite', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    allureReporter.startStep('input name')
    skolfederation.insertDisplayName('jack')
    allureReporter.endStep()

    allureReporter.startStep('input principal name')
    skolfederation.insertPrincipalName('jackskol@gm.com')
    allureReporter.endStep()

    allureReporter.startStep('input given name')
    skolfederation.insertGivenName('jack')
    allureReporter.endStep()

    allureReporter.startStep('input email')
    skolfederation.insertEmail('jackskol@gm.com')
    allureReporter.endStep()

    allureReporter.startStep('input sn')
    skolfederation.insertSn('skol')
    allureReporter.endStep()

    allureReporter.startStep('submit form')
    skolfederation.submitForm()
    allureReporter.endStep()
  })

  
  it('check url, should be loged in', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('check url to be lexplore')
    browser.waitUntil(
      () => browser.getUrl().includes('/organization/af818f31-9e40-4e5f-b20f-036e89af8beb'),
        {
            timeout: 15000,
            timeoutMsg: 'Url has not changed'
        }
      );
    var url = browser.getUrl()
    expect(url).to.include('/organization/af818f31-9e40-4e5f-b20f-036e89af8beb')
  })
 });
 