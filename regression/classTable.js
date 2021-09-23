 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const organisationPage = require('../pageObjects/organisationPage.js');
 const config = require('../config/mainConfig.js');
 const login = require('../login/loginTest.js')
 const fixtures = require('../fixtures/urls.js')
 const modals = require('../pageObjects/modals.js')
 const table = require('../fixtures/table.js')
 
 describe('clear invites ->', function() {
  login()
  let currentUrl = ''
  let report = new Array()
  let errors = new Array()

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('turn on network listener', function() {
    browser.cdp('Network', 'enable')
    browser.on('Network.responseReceived', (params) => {
        report.push(params.response)
    })
  })
  
  it('go to cross roads elementary', function() {
    allureReporter.addFeature('Table checkboxes testing')
    allureReporter.addSeverity('Critical')
    browser.url(fixtures.crossRoadsElementary)
  });

  it('open advanced parameters', function() {
    allureReporter.addFeature('Table checkboxes testing')
    allureReporter.addSeverity('Critical')
    modals.openAdvancedParamters()
  })

  Object.keys(table).forEach(function(key) {
    let value = table[key];
    let checked = ''
    it(`check if selected ${key}`, function() {
      $(`${value.checkbox}`).waitForDisplayed()
      checked = $(`${value.checkbox}`).isSelected()
      if(checked) {
        modals.clickTableElement(value.checkbox)
      }
    })

    it(`turn on ${key}`, function() {
      allureReporter.addFeature('Table checkboxes testing')
      allureReporter.addSeverity('Critical')
      modals.clickTableElement(value.checkbox)
      let data = $(`${value.table}`).isDisplayed()
      expect(data).to.eql(true)
    });
    
    it(`turn off ${key}`, function() {
      allureReporter.addFeature('Table checkboxes testing')
      allureReporter.addSeverity('Critical')
      modals.clickTableElement(value.checkbox)
      let data = $(`${value.table}`).isDisplayed()
      expect(data).to.eql(false)
    });
  })

  it('check report', function() {
    report.forEach(request => {
      if(request.status > 350) {
        errors.push({
          0 : request.url,
          1 : request.status
        })
      }
      expect(request.status).to.lte(350)
    });
  })

  it('create error report', function() {
    if(errors.length != 0) {
      var executorJson = JSON.stringify(errors)
      var fs = require('fs');
      fs.writeFile("./test/selenium/errors/errorsClassTable.json", executorJson, function(err, result) {
      });
    }
    browser.cdp('Network', 'disable')
    expect(errors.length).to.lte(1)
  })
});
 