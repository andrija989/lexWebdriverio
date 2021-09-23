 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
import mainConfig from '../../config/mainConfig.js';

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const studentPage = require('../../pageObjects/studentResultsPage.js');
 const singleStudentPage = require('../../pageObjects/singleStudentPage.js');
 const config = require('../../config/mainConfig.js');
 const login = require('../../login/loginTest.js')
 
 describe('qa messages ->', function() {
 
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('visit student url', function() {
   allureReporter.addSeverity('Critical')
   allureReporter.addFeature('QA messages')
   browser.url(config.qaStudent)
  })

  it('confirm review message', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('QA messages')
    browser.waitUntil(
      () => browser.getUrl() === config.qaStudent,
        {
            timeout: 15000,
            timeoutMsg: 'Url has not changed to qa messages student'
        }
      );
    expect(browser.getUrl()).to.eql(config.qaStudent)
    let reviewMessageText = singleStudentPage.reviewMessage.getText()
    expect(reviewMessageText).to.eql(mainConfig.reviewMessages.examiner)
  })

  it('confirm review message', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('QA messages')
    let qaMessageText = singleStudentPage.qaMessage.getText()
    expect(qaMessageText).to.eql(mainConfig.reviewMessages.singleMessage)
  })

  it('confirm instruction message', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('QA messages')
    let instruction = singleStudentPage.reviewInstruction.getText()
    expect(instruction).to.eql(mainConfig.reviewMessages.instruction)
  })

});