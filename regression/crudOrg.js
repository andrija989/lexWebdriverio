 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
 import Axios from 'axios';
import { response } from 'express';

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const administratorPage = require('../pageObjects/administratorPage.js');
 const organisationPage = require('../pageObjects/organisationPage.js');
 const config = require('../config/mainConfig.js');
 const generators = require('../utilis/generators.js');
 const baseUrl = require('../../../wdio.conf');
 const login = require('../login/loginTest.js')
 
 describe('organisation CRUD ->', function() {
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

    allureReporter.startStep('find organisation and confirm that is displayed')
    $("tr:nth-of-type(1) > td:nth-of-type(1) > div > a:nth-of-type(1)").waitForDisplayed(12000)
    allureReporter.endStep()

    allureReporter.startStep('select organisation')
    $("tr:nth-of-type(1) > td:nth-of-type(1) > div > a:nth-of-type(1)").click({ force:true });
    browser.pause(2000)
    allureReporter.endStep()
  });

  it('select setings tab', () => {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    administratorPage.toSettings()
  })
  
  it('edit organisation', function(done) {
   allureReporter.addFeature('Regression')
   allureReporter.addSeverity('Critical')
   allureReporter.startStep('select conntry code Portugal')
   browser.pause(1000)
   administratorPage.selectContryCode('Portugal')
   allureReporter.endStep()

   allureReporter.startStep('select language German')
   administratorPage.selectLanguageCode('German')
   allureReporter.endStep()

   allureReporter.startStep('confirm editing')
   administratorPage.createOrganisaton.scrollIntoView()
   administratorPage.createOrganisaton.click({ force:true })
   browser.pause(3000)
   allureReporter.endStep()
  })

  var organisation = ''
  it('get organisation url', function() {
    allureReporter.addFeature('Regression')
    var url = browser.getUrl()
    organisation = url.split('/')
  })


  it('delete organisation', function() {
   allureReporter.addFeature('Regression')
   allureReporter.addSeverity('Critical')

   allureReporter.startStep('click delete organisation')
   administratorPage.clickDeleteOrganisation({ force:true })
   allureReporter.endStep()

   allureReporter.startStep('set input value to delete')
   administratorPage.inputDeleteOrganisation.setValue('DELETE')
   allureReporter.endStep()

   allureReporter.startStep('confirm delete of organisation')
   administratorPage.deleteOrgConfirmClick()
   browser.pause(3000)
   allureReporter.endStep()
  })

  var token = ''
  it('get token', function() {
    allureReporter.addFeature('Regression')
    var userKey = ''
    if(organisation[2] === 'test.lexplore.com') {
      userKey = 'oidc.user:https://ststest.lexplore.com/identity:E9C977B7-48C4-42D6-81BC-048CDEABEB06'
    } else if(organisation[2] === 'dev.lexplore.com') {
      userKey = 'oidc.user:https://logindev.lexplore.com/identity:FCE3BBA3-D3C6-4CD5-AB40-549CE7600AD8'
    } else if (organisation[2] === 'demo.lexplore.com') {
      userKey = 'oidc.user:https://stsdemo.lexplore.com/identity:CA12C513-386A-498F-A695-03008C7266DA'
    } 
    var data = browser.execute(function (key) {
        return this.localStorage.getItem(key)
    }, userKey)
    data;
    token = JSON.parse(data)
  })

  it('delete org hard', function() {
    allureReporter.addFeature('Regression')
    console.log(organisation[2])
      const access_token = token.access_token
      browser.call(() => {
        return Axios.delete(`https://oplxcustsvcs-neu-dev-sys.azurewebsites.net/organizations/${organisation[5]}`,
          {
            headers: {
              Authorization: `Bearer ${access_token}`
          }
        }).then(response => { 
          expect(response.status).to.eql(404)
        })
        .catch(error => {
          if(organisation[2] === 'test.lexplore.com' 
          || organisation[2] === 'demo.lexplore.com'
          || organisation[2] === 'portal-us.lexplore.com'
          || organisation[2] === 'portal-us.lexplore.com'
          || organisation[2] === 'portal.lexplore.com'
          ) {
            expect(JSON.stringify(error)).to.include('401')
          } else {
            expect(JSON.stringify(error)).to.include('404')
          }
        });
      })
  })
});
 


