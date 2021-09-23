import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../pageObjects/loginPage.js');
const config = require('../config/mainConfig.js');
const organisationPage = require('../pageObjects/organisationPage.js');

module.exports = function login(userName = config.email, userPassword = config.password, defUrl = './') {
  
  let currentUrl = ''
  let stage = [
    'https://portal-us.lexplore.com/welcome',
    'https://portal.lexplore.com/welcome',
    'https://demo.lexplore.com/welcome',
    'https://test.lexplore.com/welcome'
  ]
  
  it('login with email', function() {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('try to maximize window',)
    browser.maximizeWindow();
    allureReporter.endStep()

    allureReporter.startStep('visit login page')
    browser.url(defUrl);
    allureReporter.endStep()

    currentUrl = browser.getUrl()
    if(stage.includes(currentUrl)) 
    {
      browser.url('./signin/vivify')
    } 
  });

  it('login with email', function() {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    browser.pause(2000)

    // if you are already loged in
    let header = organisationPage.openUserMenuButton.isDisplayed()
    if(header === true) {
      organisationPage.openUserMenu()
      organisationPage.logout()
    } 
    // if url leads you to invite
    let newUrl = browser.getUrl()
    if(newUrl.includes('invite')) {
      browser.url(defUrl)
    }

    browser.waitUntil(
      () => loginPage.inputEmail.isDisplayed() == true,
        {
            timeout: 15000,
            timeoutMsg: 'Email is visible'
        }
      );

    if(stage.includes(currentUrl)) 
    {
      allureReporter.startStep('insert lexplore email')
      loginPage.setEmail(config.qualityEmail);
      allureReporter.endStep()

      allureReporter.startStep('confirm email')
      loginPage.clickSubmitButton();
      allureReporter.endStep()
    } else {
      allureReporter.startStep('insert lexplore email')
      loginPage.setEmail(userName);
      allureReporter.endStep()

      allureReporter.startStep('confirm email')
      loginPage.clickSubmitButton();
      allureReporter.endStep()
    }
  });

  it('select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('enter password and login', function() {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    if(
        currentUrl === 'https://portal-us.lexplore.com/welcome'
      || currentUrl === 'https://portal.lexplore.com/welcome'
      || currentUrl === 'https://demo.lexplore.com/welcome'
      || currentUrl === 'https://test.lexplore.com/welcome'
    ) {
      allureReporter.startStep('insert lexplore password')
      loginPage.setPassword(config.qualityPassword);
      allureReporter.endStep()

      allureReporter.startStep('confirm password')
      loginPage.signIn();
      allureReporter.endStep()
    } else {
      allureReporter.startStep('insert lexplore email')
      loginPage.setPassword(userPassword);
      allureReporter.endStep()

      allureReporter.startStep('confirm password')
      loginPage.signIn();
      browser.pause(1000)
      allureReporter.endStep()
    }
  });
}