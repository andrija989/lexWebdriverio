 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const login = require('../login/loginTest.js')
const config = require('../config/mainConfig.js');
const loginPage = require('../pageObjects/loginPage.js');
const homePageMyLexplore = require('../pageObjects/myLexplore/homePage.js')

describe('my lexplore - courses ->', function() {
  it('go to prod courses without login', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Blocker')
    browser.url('./courses');
  })

  it('check url - should be login page', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Blocker')
    browser.pause(3000)
    let pageUrl = browser.getUrl();
    expect(pageUrl).to.include('https://stsdev.lexplore.com/Account')
  })

  it('login with email', function() {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')

    allureReporter.startStep('try to maximize window',)
    browser.maximizeWindow();
    allureReporter.endStep()

    allureReporter.startStep('insert lexplore email')
    loginPage.setEmail(config.email);
    allureReporter.endStep()

    allureReporter.startStep('confirm email')
    loginPage.clickSubmitButton();
    allureReporter.endStep()
  });

  it('enter password and login', function() {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('insert lexplore email')
    loginPage.setPassword(config.password);
    allureReporter.endStep()

    allureReporter.startStep('confirm password')
    loginPage.signIn();
    browser.pause(3000)
    allureReporter.endStep()
  });

  it('check if courses work when logged in', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Blocker')
    homePageMyLexplore.goToCourses()
    browser.pause(2000)
  })

  it('courses should be visible', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Blocker')
    homePageMyLexplore.learnDash.waitForDisplayed({ timeout: 3000 })
    let learnD = homePageMyLexplore.learnDash.isDisplayed()
    expect(learnD).to.eql(true)
  })
});
 