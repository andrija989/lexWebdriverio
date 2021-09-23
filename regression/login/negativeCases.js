 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const login = require('../../login/loginTest.js')
 
 describe('login negative cases ->', function() {

  let currentUrl = ''
  let stage = [
    'https://portal-us.lexplore.com/welcome',
    'https://portal.lexplore.com/welcome',
    'https://demo.lexplore.com/welcome',
    'https://test.lexplore.com/welcome'
  ]
  
  beforeEach(function(done){
    browser.url('./');
    browser.maximizeWindow();
    currentUrl = browser.getUrl()
    if(
      currentUrl === 'https://portal-us.lexplore.com/welcome'
   || currentUrl === 'https://portal.lexplore.com/welcome'
   || currentUrl === 'https://demo.lexplore.com/welcome'
   || currentUrl === 'https://test.lexplore.com/welcome'
   ) {
      browser.url('./signin/vivify')
    } 
  })

  it('login with email that is not in DB', function() {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    if(stage.includes(currentUrl)) 
    {
      allureReporter.startStep('insert lexplore email')
      loginPage.setEmail('Miro@g.com');
      allureReporter.endStep()

      allureReporter.startStep('confirm email')
      loginPage.clickSubmitButton();
      allureReporter.endStep()
    } else {
      allureReporter.startStep('insert lexplore email')
      loginPage.setEmail('Miro@g.com');
      allureReporter.endStep()

      allureReporter.startStep('confirm email')
      loginPage.clickSubmitButton();
      allureReporter.endStep()
    }
  });
});
 