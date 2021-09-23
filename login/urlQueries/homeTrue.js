import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../../pageObjects/loginPage.js');
const config = require('../../config/mainConfig.js');
const organisationPage = require('../../pageObjects/organisationPage.js');
const navigation = require('../../pageObjects/leftNavbar.js')

describe('login suite', function() {
  this.retries(4)

  it('home=true - url sufix', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    browser.url(`?home=true`)
  });

  it('home=true - login with signin link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')

    loginPage.inputEmail.waitForDisplayed(8000)
    let email = loginPage.inputEmail.isDisplayed()
    expect(email).to.eql(true)
  });

  it('home=true - login from given link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setEmail(config.ExAdminEmail)
    loginPage.clickSubmitButton()
  })

  it('home=true - select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('home=true - enter password', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setPassword(config.ExAdminPassword)
    loginPage.signIn()
    browser.pause(2000)
  })

  it('home=true - check if redirected to mylexplore', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    browser.waitUntil(
      () => browser.getUrl() === config.myLexplore,
        {
            timeout: 15000,
            timeoutMsg: 'Url has not changed to mylexplore'
        }
      );
    expect(browser.getUrl()).to.eql(config.myLexplore)
  })

})

