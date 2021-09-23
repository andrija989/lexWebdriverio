 /* eslint-env jquery */
 import allureReporter from '@wdio/allure-reporter'
 import generators from '../../utilis/generators.js';
 
 const loginPage = require('../../pageObjects/loginPage.js');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const color = require('../../utilis/consoleColor.js')
 const login = require('../../login/loginTest.js')
 
 describe('Role - principal - API automation - login and store token ->', function() {

  login(config.principalEmail, config.principalPassword)
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
 
  it('Role - principal - go to administration page', function() {
    allureReporter.addFeature('API automation')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('open menu in navigation bar')
    browser.pause(5000)
    allureReporter.endStep()
  });
 
  var token = ''
  it('Role - principal - get token', function() {
    allureReporter.addFeature('API automation')
    allureReporter.addSeverity('Blocker')
      var data = browser.execute(function (key) {
          return this.localStorage.getItem(key)
      }, 'oidc.user:https://logindev.lexplore.com/identity:FCE3BBA3-D3C6-4CD5-AB40-549CE7600AD8')
      data;
      token = JSON.parse(data)
  })
     
  it('Role - principal - set token', function() {
    var executor = token

    var executorJson = JSON.stringify(executor)

    var fs = require('fs');
    fs.writeFile("./test/selenium/API/roles/token.json", executorJson, function(err, result) {
    if (err) throw err;
      color.log('The file with principal token has been saved!', 'success');
    });
  })
 });
 