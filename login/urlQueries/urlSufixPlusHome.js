import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../../pageObjects/loginPage.js');
const config = require('../../config/mainConfig.js');
const organisationPage = require('../../pageObjects/organisationPage.js');
const navigation = require('../../pageObjects/leftNavbar.js')

describe('login suite', function() {
  this.retries(4)

  it('url sufix', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    browser.url('./signin/vivify?home=true')
  });

  it('select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('login with signin link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')

    loginPage.inputEmail.waitForDisplayed(8000)
    let email = loginPage.inputEmail.isDisplayed()
    let password = loginPage.inputPassword.isDisplayed()
    expect(email).to.eql(true)
    expect(password).to.eql(true)
  });

  it('login from given link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setEmail(config.ExAdminEmail);
    loginPage.setPassword(config.ExAdminPassword)
    loginPage.signIn()
    browser.pause(2000)
  })

  it('check if redirected to myDev', function() {
    browser.waitUntil(
      () => browser.getUrl() === config.myLexplore,
        {
            timeout: 15000,
            timeoutMsg: 'Url has not changed to mydev'
        }
      );
    expect(browser.getUrl()).to.eql(config.myLexplore)
  })

})

