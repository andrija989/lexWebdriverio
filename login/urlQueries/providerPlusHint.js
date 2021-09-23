import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../../pageObjects/loginPage.js');
const config = require('../../config/mainConfig.js');
const organisationPage = require('../../pageObjects/organisationPage.js');
const navigation = require('../../pageObjects/leftNavbar.js')

describe('login suite', function() {
  this.retries(4)

  it('provider + hint - url sufix', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    browser.url(`?provider=b2c&login_hint=${config.ExAdminEmail}`)
  });

  it('provider + hint - select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('provider + hint - login with signin link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')

    loginPage.inputPassword.waitForDisplayed(8000)
    let email = loginPage.inputEmail.isDisplayed()
    let password = loginPage.inputPassword.isDisplayed()
    expect(email).to.eql(true)
    expect(password).to.eql(true)
  });

  it('provider + hint - login from given link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setPassword(config.ExAdminPassword)
    loginPage.signIn()
    browser.pause(2000)
  })

  it('provider + hint - check if redirected to dev stage', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    let url = new URL(browser.getUrl())
    browser.waitUntil(
      () => config.allStages.includes(url.origin) === true,
        {
            timeout: 15000,
            timeoutMsg: 'Url has not changed'
        }
      );
    expect(config.allStages).to.include(url.origin)
  })

})

