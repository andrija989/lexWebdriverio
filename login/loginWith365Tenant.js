 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const generators = require('../utilis/generators.js');
 const config = require('../config/mainConfig')
 
 describe('login with office ->', function() {
   this.retries(3);
   it('login with office with tenant', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Blocker')
     allureReporter.startStep('maximize windows')
     browser.maximizeWindow();
     allureReporter.endStep()
 
     allureReporter.startStep('visit login page')
     browser.url(config.officeTenant);
     allureReporter.endStep()
     browser.pause(1000);
 
   });
 
   it('login with office 365 with tenant', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     browser.pause(1000);
 
     allureReporter.startStep('catch display name')
     let officeName = loginPage.displayNameOffice.getText()
     allureReporter.endStep()
 
     allureReporter.startStep('expect name to be test.testason')
     expect(officeName).to.eql('test.testsson@lexplore.com')
     allureReporter.endStep()
   });
 });
 