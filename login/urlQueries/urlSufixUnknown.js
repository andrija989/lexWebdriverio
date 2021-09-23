import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../../pageObjects/loginPage.js');
const config = require('../../config/mainConfig.js');
const organisationPage = require('../../pageObjects/organisationPage.js');
const navigation = require('../../pageObjects/leftNavbar.js')

describe('login suite', function() {
  this.retries(4)

  it('Wrong URL sufix - url sufix', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    browser.url('./signin/webdriverio')
  });


  it('Wrong URL sufix - login with signin link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')

    loginPage.inputEmail.waitForDisplayed(8000)
    let email = loginPage.inputEmail.isDisplayed()
    let password = loginPage.inputPassword.isDisplayed()
    expect(email).to.eql(true)
    expect(password).to.eql(false)
  });

  it('Wrong URL sufix - login from given link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setEmail(config.ExAdminEmail);
    loginPage.clickSubmitButton()
  })

  it('select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('Wrong URL sufix - password', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setPassword(config.ExAdminPassword)
    loginPage.signIn()
    browser.pause(2000)

    organisationPage.openUserMenuButton.waitForDisplayed(8000)
    let menuBar = organisationPage.openUserMenuButton.isDisplayed()
    expect(menuBar).to.eql(true)
  })



  it('Wrong URL sufix - check if redirected to dev stage', function() {
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

