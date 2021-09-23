 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const generators = require('../utilis/generators.js');
 const loginPage = require('../pageObjects/loginPage.js');
 const homePage = require('../pageObjects/homePage.js');
 const organisationPage = require('../pageObjects/organisationPage.js');
 const navbar = require('../pageObjects/leftNavbar.js');
 const config = require('../config/mainConfig.js');
 const login = require('../login/loginTest.js')
 
 describe('.se browser check ->', function() {
   this.retries(3);

   login(config.ExAdminEmail, config.ExAdminPassword)
    let currentUrl = ''

    it('check url', function() {
      currentUrl = browser.getUrl()
    })


    it('go to administration page', function() {
      allureReporter.addFeature('Smoke test')
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
    
    it('check if browser can open page', function() {
      allureReporter.addFeature('Smoke test')
      allureReporter.addSeverity('Normal')
      browser.pause(3000)
      var url = browser.getUrl()
      expect(url).to.includes('organizations')
    })
    
 });
 