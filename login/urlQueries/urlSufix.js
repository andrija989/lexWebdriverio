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
    browser.url('./signin/vivify')
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

    organisationPage.openUserMenuButton.waitForDisplayed(8000)
    let menuBar = organisationPage.openUserMenuButton.isDisplayed()
    expect(menuBar).to.eql(true)
  })

  it('check if organisations are filtered by url sufix', function() {
    allureReporter.addFeature('Login spec cases')
    allureReporter.addSeverity('Blocker')
    let allOrganisations = ''
    browser.waitUntil(
      () => $(navigation.selectOrganisationButton).isEnabled() === true,
        {
            timeout: 15000,
            timeoutMsg: 'Organisations are visible now'
        }
      );
    allOrganisations = $$(`select[id=left-nav-select-organization] > option`).map(option => option.getText())
    allOrganisations.forEach(organisation => {
      if(organisation != 'Select organization' && organisation != 'All') {
        expect(organisation).to.include('Vivify')
      }
    });
  })
})

