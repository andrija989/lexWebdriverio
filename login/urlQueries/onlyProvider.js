import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../../pageObjects/loginPage.js');
const config = require('../../config/mainConfig.js');
const organisationPage = require('../../pageObjects/organisationPage.js');
const navigation = require('../../pageObjects/leftNavbar.js')

describe('login suite', function() {
  this.retries(4)

  it('only provider - url sufix', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    browser.url(`?provider=b2c`)
  });

  it('only provider - login with signin link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')

    loginPage.inputEmail.waitForDisplayed(8000)
    let email = loginPage.inputEmail.isDisplayed()
    expect(email).to.eql(true)
  });

  it('only provider - login from given link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setEmail(config.ExAdminEmail)
    loginPage.clickSubmitButton()
    browser.pause(2000)
  })

  
  it('only provider - select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('only provider - password', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setPassword(config.ExAdminPassword)
    loginPage.signIn()
    browser.pause(2000)
  })

  it('only provider - check if redirected to dev stage', function() {
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

