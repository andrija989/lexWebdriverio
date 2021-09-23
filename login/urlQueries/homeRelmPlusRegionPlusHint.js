import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../../pageObjects/loginPage.js');
const config = require('../../config/mainConfig.js');
const organisationPage = require('../../pageObjects/organisationPage.js');
const navigation = require('../../pageObjects/leftNavbar.js')

describe('login suite', function() {
  this.retries(4)
  
  it('homeRealm + region + hint - login with signin link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    browser.url(`?region=northeurope&home=true&login_hint=examineradmin@gmail.com`)

    loginPage.inputPassword.waitForDisplayed(8000)
    let email = loginPage.inputEmail.isDisplayed()
    let password = loginPage.inputPassword.isDisplayed()
    expect(email).to.eql(true)
    expect(password).to.eql(true)
  });

  it('provider + home + hint - login from given link', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    loginPage.setPassword(config.ExAdminPassword)
    loginPage.signIn()
    browser.pause(2000)
  })

  it('provider + home + hint - check if redirected to mylexplore', function() {
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

