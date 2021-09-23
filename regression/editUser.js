 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
 import { func } from 'prop-types';
import mainConfig from '../config/mainConfig.js';
 
  const assert = require('assert');
  const loginPage = require('../pageObjects/loginPage.js');
  const administratorPage = require('../pageObjects/administratorPage.js');
  const organisationPage = require('../pageObjects/organisationPage.js');
  const config = require('../config/mainConfig.js');
  const generators = require('../utilis/generators.js');
  const baseUrl = require('../../../wdio.conf');
  const login = require('../login/loginTest.js')
  
  describe('edit user ->', function() {
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
     browser.url(`/admin/organization/${mainConfig.vivifyOrg}`)
     allureReporter.endStep()
   });
 
   it('select already created user', function() {
     allureReporter.addFeature('Regression')
     allureReporter.addSeverity('Minor')
     $('//a[contains(text(),"Andrija Admin")]').click()
   });
 
   it('change user role', function() {
     allureReporter.addFeature('Regression')
     allureReporter.addSeverity('Blocker')
     browser.pause(2000)
 
     allureReporter.startStep('change first name')
     organisationPage.userFirstName.clearValue()
     organisationPage.setFirstName('Jack')
     allureReporter.endStep()
 
     allureReporter.startStep('change last name')
     organisationPage.userLastName.clearValue()
     organisationPage.setLastName('Not')
     allureReporter.endStep()
 
     allureReporter.startStep('change role')
     organisationPage.selectRole('Quality administrator')
     allureReporter.endStep()
 
     allureReporter.startStep('confirm role')
     organisationPage.confirmClass()
     allureReporter.endStep()
 
     allureReporter.startStep('save edit')
     organisationPage.saveEditUser()
     browser.pause(1000)
     allureReporter.endStep()
   });
 
   it('re-select already created user', function() {
     allureReporter.addFeature('Regression')
     allureReporter.addSeverity('Normal')
     $('//a[contains(text(),"Jack Not")]').click()
   });
 
   it('delete role', function() {
     allureReporter.addFeature('Regression')
     allureReporter.addSeverity('Normal')
     browser.pause(1000)
 
     allureReporter.startStep('change back first name')
     organisationPage.userFirstName.clearValue()
     organisationPage.setFirstName('Andrija')
     allureReporter.endStep()
 
     allureReporter.startStep('change back last name')
     organisationPage.userLastName.clearValue()
     organisationPage.setLastName('Admin')
     allureReporter.endStep()
 
     allureReporter.startStep('delete added role')
     organisationPage.deleteRole()
     allureReporter.endStep()
 
     allureReporter.startStep('save edit')
     organisationPage.saveEditUser()
     browser.pause(3000)
     allureReporter.endStep()
   })
 })