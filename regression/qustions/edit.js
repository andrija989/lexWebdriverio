 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const login = require('../../login/loginTest.js')
 const studentPage = require('../../pageObjects/studentResultsPage.js');
 
 describe('not participated qeustions ->', function() {
  login()
  let currentUrl = '';

  it('check url', function() {
    currentUrl = browser.getUrl();
  })

  it('open test student', function() {
    browser.url(`${config.laraRichardson}`);
    browser.pause(3000)
  })

  it('open edit answers modal', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('edit result click')
    studentPage.editResult();
    $('select[data-automation-id="dropdown-ReadingResultsSelector"] > option').waitForDisplayed(12000)
    const answers = $$('select[data-automation-id="dropdown-ReadingResultsSelector"] > option');
    allureReporter.endStep()

    allureReporter.startStep('change few answers')
    let count = 0
    answers.forEach(element => {
      if(element.getHTML().includes('Not Paritcipated')) {
        count++
      }
      expect(count).to.eql(0)
    });
    allureReporter.endStep()
  });
 });
 