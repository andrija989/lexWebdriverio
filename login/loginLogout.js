 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const login = require('../login/loginTest.js')
 const color = require('../utilis/consoleColor.js')
 const organisationPage = require('../pageObjects/organisationPage.js');
 
 describe('login and logout ->', function() {
    this.retries(4)
    login()
 
    it('logout', function() {
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