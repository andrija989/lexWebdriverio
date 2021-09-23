 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const skolFederation = require('../../pageObjects/skolfederationPage.js')
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 
 describe('entity id - skolfederation login ->', function() {
  this.retries(4)
  let currentUrl = ''
  let stage = [
    'https://portal-us.lexplore.com/welcome',
    'https://portal.lexplore.com/welcome',
    'https://demo.lexplore.com/welcome',
    'https://test.lexplore.com/welcome'
  ]
  it('entity id - login the url skolfederation', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('try to maximize window',)
    browser.maximizeWindow();
    allureReporter.endStep()

    allureReporter.startStep('visit login page')
    browser.url('./');
    allureReporter.endStep()

    currentUrl = browser.getUrl()
    if(stage.includes(currentUrl)) 
    {
      browser.url('./signin/vivify')
    } 
  });

  it('entity id - login with email skolfederation', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('insert lexplore email')
    loginPage.setEmail('andrija@gmail.com');
    allureReporter.endStep()
    
    allureReporter.startStep('confirm email')
    loginPage.clickSubmitButton();
    allureReporter.endStep()
  });

  it('select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('entity id - fill form', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    allureReporter.startStep('input name')
    skolFederation.insertDisplayName('andrija')
    allureReporter.endStep()

    allureReporter.startStep('input principal name')
    skolFederation.insertPrincipalName('andrija@gmail.com')
    allureReporter.endStep()

    allureReporter.startStep('input given name')
    skolFederation.insertGivenName('andrija')
    allureReporter.endStep()

    allureReporter.startStep('input email')
    skolFederation.insertEmail('andrija@gmail.com')
    allureReporter.endStep()

    allureReporter.startStep('input sn')
    skolFederation.insertSn('p')
    allureReporter.endStep()

    allureReporter.startStep('submit form')
    skolFederation.submitForm()
    allureReporter.endStep()
  })

    
  it('entity id - check url, should be loged in', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('check url to be lexplore')
    browser.pause(3000)
    var url = browser.getUrl()
    expect(url).to.include('/organization/af818f31-9e40-4e5f-b20f-036e89af8beb')
  })
});

 