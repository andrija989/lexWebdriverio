 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const feide = require('../../pageObjects/feide.js')
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const wdio = require('../../../../wdio.conf')
 
 describe('feide login ->', function() {
  this.retries(4)
  let currentUrl = ''
  let stage = [
    'https://portal-us.lexplore.com/welcome',
    'https://portal.lexplore.com/welcome',
    'https://demo.lexplore.com/welcome',
    'https://test.lexplore.com/welcome',
  ]
  it('login the url feide', function() {
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

  it('login with email feide', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('insert lexplore email')
    loginPage.setEmail('andrija.perovic+faide10@vivifyideas.com');
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
  
  it('login with guest feide account', function() {
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
    feide.loginFeide('andrijafaide10', 'Admin123')
    allureReporter.endStep()
  })

  it('check url', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('check url to be lexplore')
    browser.pause(3000)
    var url = browser.getUrl()
    expect(url).to.include('/admin/organization/947db3fe-f500-46a9-b16e-e9eacf4c464a')
  })
});
 