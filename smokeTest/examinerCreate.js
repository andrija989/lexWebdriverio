 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
import { request } from 'express';

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const administratorPage = require('../pageObjects/administratorPage.js');
 const organisationPage = require('../pageObjects/organisationPage.js');
 const config = require('../config/mainConfig.js');
 const generators = require('../utilis/generators.js');
 const baseUrl = require('../../../wdio.conf');
 const login = require('../login/loginTest.js')
 const password = require('../utilis/password.js')
 const navbar = require('../pageObjects/leftNavbar.js')
 
 describe('login smoke test ->', function() {
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
 
   it('pick organisation', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
 
     allureReporter.startStep('clear value from filter field')
     let filter = administratorPage.filterOrganisation;
     filter.clearValue();
     browser.pause(3000)
     allureReporter.endStep()
 
     allureReporter.startStep('find vivify organisation end select it')
     $('a[href="/admin/organization/84f1fb52-77ca-4e1c-a116-f0dd86e195fd"]').waitForDisplayed(15000);
     $('a[href="/admin/organization/84f1fb52-77ca-4e1c-a116-f0dd86e195fd"]').click();
     allureReporter.endStep()
   });
 
   it('invite user', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Blocker')
     allureReporter.startStep('Create invite for new user')
     if($('=Jack Dot').isDisplayed() === false ) {
       organisationPage.inviteUserButton.waitForEnabled(8000)
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


   var inviteUrl = ''
   it('activate user', function() {
     allureReporter.addSeverity('Critical')
     allureReporter.addFeature('Smoke test')
 
     allureReporter.startStep('Find invite for new created user and open it')
     browser.pause(2000)
     $('=Jack Dot').click();
     allureReporter.endStep()
 
     allureReporter.startStep('Catch invite link')
     browser.pause(2000)
     inviteUrl = $('form  a[target="_blank"]').getText()
     allureReporter.endStep()
 
     allureReporter.startStep('open menu in navigation bar')
     organisationPage.openUserMenuButton.waitForDisplayed(8000);
     organisationPage.openUserMenu()
     browser.pause(500)
     organisationPage.openUserMenu()
     allureReporter.endStep()
 
     allureReporter.startStep('logout')
     organisationPage.logout()
     allureReporter.endStep()
 
     allureReporter.startStep('check if you are loged out')
     browser.pause(4000)
     allureReporter.endStep()
 
     allureReporter.startStep('Click on invite for new created user')
     browser.url(inviteUrl)
     allureReporter.endStep()
   });
 
   var newPassword = ''
   it('generate password', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
 
     allureReporter.startStep('pop ID')
     let inviteId = inviteUrl.split("/").pop()
     allureReporter.endStep()

     allureReporter.startStep('pop ID')
     newPassword = password.generate(inviteId)
     allureReporter.endStep()
   });
 
   it('login with email and password', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Blocker')
     allureReporter.startStep('insert lexplore email')
     console.log(newPassword)
     loginPage.setPassword(newPassword);
     allureReporter.endStep()

     allureReporter.startStep('confirm password')
     loginPage.signIn();
     browser.pause(1000)
     allureReporter.endStep()
   });

   it('set new password', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('enter old password')
    browser.pause(2000)
    loginPage.setPassword(newPassword);
    allureReporter.endStep()

    allureReporter.startStep('enter new password')
    loginPage.setNewPassword(config.password);
    allureReporter.endStep()

    allureReporter.startStep('confirm password')
    loginPage.setRePassword(config.password);
    allureReporter.endStep()

    allureReporter.startStep('submit')
    loginPage.clickSubmitButton();
    allureReporter.endStep()
  });

   it('wait for login', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Minor')
    browser.waitUntil(
      () => navbar.selectGradeButton.isDisplayed() === true,
        {
            timeout: 15000,
            timeoutMsg: 'user has been logged'
        }
      );
    expect(navbar.selectGradeButton.isDisplayed()).to.eql(true)
  })
 
   it('delete cookie', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Minor')
     browser.execute(function (key) {
       return this.localStorage.clear()
       })
   })
 });
 