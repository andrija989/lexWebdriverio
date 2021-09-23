 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../pageObjects/loginPage.js');
const generators = require('../utilis/generators.js');

describe('login with office ->', function() {
  this.retries(3);
  it('login with office', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('maximize windows')
    browser.maximizeWindow();
    allureReporter.endStep()

    allureReporter.startStep('visit login page')
    browser.url('./');
    allureReporter.endStep()
    browser.pause(1000);

  });

  it('login with office 365', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(1000);

    allureReporter.startStep('insert lexplore office email')
    loginPage.setEmail('andrija.perovic@lexplore.com');
    allureReporter.endStep()

    allureReporter.startStep('confirm email')
    loginPage.clickSubmitButton();
    allureReporter.endStep()
  });

  it('select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('set 365 password', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(1000);

    allureReporter.startStep('insert office password')
    loginPage.setPassword365();
    allureReporter.endStep()

    allureReporter.startStep('confirm password')
    loginPage.clickSubmit365();
    allureReporter.endStep()
  });
});
