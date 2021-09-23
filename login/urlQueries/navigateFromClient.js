import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../../pageObjects/loginPage.js');
const config = require('../../config/mainConfig.js');
const organisationPage = require('../../pageObjects/organisationPage.js');
const navigation = require('../../pageObjects/leftNavbar.js')

describe('login suite', function() {
  this.retries(4)

  it('customer id - url sufix', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    browser.url(`/${config.laraRichardsonShort}`)
  });

  it('customer id - select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('customer id - login with signin link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')

    loginPage.inputPassword.waitForDisplayed(8000)
    let email = loginPage.inputEmail.isDisplayed()
    let password = loginPage.inputPassword.isDisplayed()
    expect(email).to.eql(true)
    expect(password).to.eql(true)
  });

  it('customer id - login from given link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setEmail(config.ExAdminEmail)
    loginPage.setPassword(config.ExAdminPassword)
    loginPage.signIn()
    browser.pause(2000)
  })

  it('customer id - check if redirected to desired stage', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    browser.waitUntil(
      () => config.laraUrl.includes(browser.getUrl()) === true,
        {
            timeout: 15000,
            timeoutMsg: 'Url has not changed'
        }
      );
    expect(config.laraUrl).to.include(browser.getUrl())
  })

})

