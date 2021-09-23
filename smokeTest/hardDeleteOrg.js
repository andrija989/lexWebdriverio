 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'
import Axios from 'axios';

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const administratorPage = require('../pageObjects/administratorPage.js');
 const organisationPage = require('../pageObjects/organisationPage.js');
 const config = require('../config/mainConfig.js');
 const generators = require('../utilis/generators.js');
 const login = require('../login/loginTest.js')
 
 describe('clear invites ->', function() {

  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('go to administration page', function() {
      allureReporter.addFeature('Smoke test')
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

  var token = ''
  it('get token', function() {
    var data = browser.execute(function (key) {
        return this.localStorage.getItem(key)
    }, 'oidc.user:https://stsdev.lexplore.com/identity:FCE3BBA3-D3C6-4CD5-AB40-549CE7600AD8')
    data;
    token = JSON.parse(data)
  })

  it('delete org hard', function() {
    const access_token = token.access_token
    browser.call(() => {
      return Axios.delete('https://oplxcustsvcs-neu-dev-sys.azurewebsites.net/organizations/62ab0780-b974-4ed2-b8ca-f4154cdda554',
      {
        headers: {
          Authorization: `Bearer ${access_token}`
        }
      })
    }) 
  })
});
 