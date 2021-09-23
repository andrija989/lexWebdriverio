 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

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

  it('confirm message', function() {
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
    singleStudentPage.confirmQAMessage()
    browser.pause(4000)
    let message = singleStudentPage.confirmQAButton.isDisplayed()
    expect(message).to.eql(false)
  })

  it('review button existence', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('Smoke test')

    allureReporter.startStep('confirm that review button is displayed')
    studentPage.editResultButton.waitForDisplayed(8000);
    let review = studentPage.toReviewButton.isDisplayed()
    allureReporter.endStep()

    if(review === true) {
      allureReporter.startStep('review button click')
      studentPage.toReviewButton.click({force:true})
      allureReporter.endStep()

    } else if (singleStudentPage.reviewButton.isDisplayed() === true ) {
      allureReporter.startStep('publish results')
      singleStudentPage.clickReviewButton()
      allureReporter.endStep()

      allureReporter.startStep('review button click')
      studentPage.editResultButton.waitForDisplayed(8000);
      studentPage.toReviewButton.click({force:true})
      allureReporter.endStep()
    }
    browser.pause(1000)
  });

  it('split session', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('QA messages')
    singleStudentPage.splitSession()
    singleStudentPage.saveRecordMove()
    browser.pause(2000)
  })

  it('merge back session', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('QA messages')
    singleStudentPage.splitSession()
    singleStudentPage.saveRecordMove()
    browser.pause(2000)
    let mergeSession = singleStudentPage.sessionSecondRecording[1]
    mergeSession.click()
    singleStudentPage.saveRecordMove()
  })

  it('delete session', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(3000);
    browser.refresh()
    browser.pause(4000)
    let firstSessionQuestions = singleStudentPage.session1Questions.isDisplayed()
    let secondSessionQuestions = singleStudentPage.session2Questions.isDisplayed()

    console.log(firstSessionQuestions)
    console.log(secondSessionQuestions)

    if(secondSessionQuestions === true) {
      allureReporter.startStep('delete result')
      singleStudentPage.deleteTestResultLink();
      browser.pause(2000);
      singleStudentPage.confirmDeleteResult();
      browser.pause(2000);
      allureReporter.endStep()
    }

    if(firstSessionQuestions === true) {
      allureReporter.startStep('delete result')
      singleStudentPage.deleteSecondSession();
      browser.pause(2000);
      singleStudentPage.confirmDeleteResult();
      browser.pause(2000);
      allureReporter.endStep()
    }
  });
});