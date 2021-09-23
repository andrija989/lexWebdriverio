 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
 import { func } from 'prop-types';
 
const assert = require('assert');
const loginPage = require('../pageObjects/loginPage.js');
const administratorPage = require('../pageObjects/administratorPage.js');
const organisationPage = require('../pageObjects/organisationPage.js');
const config = require('../config/mainConfig.js');
const generators = require('../utilis/generators.js');
const baseUrl = require('../../../wdio.conf');
const login = require('../login/loginTest.js')
  
describe('IDP change ->', function() {
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

  it('wait for page to load', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    allureReporter.startStep('clear value from filter field')
    let filter = administratorPage.filterOrganisation;
    filter.clearValue();
    allureReporter.endStep()
   })
 
  it('pick organisation', function() {
     allureReporter.addFeature('Regression')
     allureReporter.addSeverity('Critical')
     allureReporter.startStep('find vivify organisation end select it')
     browser.url(`/admin/organization/${config.vivifyOrg}`)
     allureReporter.endStep()
   });

  it('select already created user', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Minor')
    administratorPage.selectIDPuser()
  });

  it('change IDP', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    allureReporter.startStep('change IDP to office 365')
    administratorPage.changeIDPtoNew()
    allureReporter.endStep()

    allureReporter.startStep('close edit modal')
    $('.btn.close-button.primary > span:nth-of-type(2)').click()
    browser.pause(2000)
    allureReporter.endStep()
  });

  var inviteUrl = ''
  it('invitation', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('invititaion select for IDP user')
    browser.pause(2000)
    browser.refresh()
    administratorPage.invitationClick()
    allureReporter.endStep()

    allureReporter.startStep('Catch invite link')
    browser.pause(2000)
    inviteUrl = $('form  a[target="_blank"]').getText()
    allureReporter.endStep()

    allureReporter.startStep('open menu in navigation bar')
    $('.close-button').click()
    browser.pause(2000)
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('logout')
    organisationPage.logout()
    allureReporter.endStep()

    allureReporter.startStep('check if you are loged out')
    browser.pause(5000)
    allureReporter.endStep()

    allureReporter.startStep('Click on invite for new created user')
    browser.url(inviteUrl)
    allureReporter.endStep()
  })

 it('login with office 365', function() {
   allureReporter.addFeature('Regression')
   allureReporter.addSeverity('Critical')
   browser.pause(1000);

  //  allureReporter.startStep('login with new office account')
  //  $('div#otherTile img[role="presentation"]').click()
  //  browser.pause(1000);
  //  browser.pause(1000);
  //  allureReporter.endStep()

   allureReporter.startStep('set 365 email')
   loginPage.set365Email();
   allureReporter.endStep()

   allureReporter.startStep('confirm email')
   loginPage.clickSubmit365();
   allureReporter.endStep()
 });

 it('set 365 password', function() {
   allureReporter.addFeature('Regression')
   allureReporter.addSeverity('Critical')
   browser.pause(1000);

   allureReporter.startStep('set 365 password')
   loginPage.setPassword365();
   allureReporter.endStep()

   allureReporter.startStep('confirm password')
   loginPage.clickSubmit365();
   browser.pause(2000)
   allureReporter.endStep()
 });
})