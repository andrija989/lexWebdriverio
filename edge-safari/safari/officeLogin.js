 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../../pageObjects/loginPage.js');
const generators = require('../../utilis/generators.js');

describe('login with office ->', function() {
  this.retries(3);
  it('login with email', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
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
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(1000);

    allureReporter.startStep('insert lexplore office email')
    loginPage.setEmail('andrija.perovic@vivifyideas.com');
    allureReporter.endStep()

    allureReporter.startStep('confirm email')
    loginPage.clickSubmitButton();
    allureReporter.endStep()
  });

  it('set 365 password', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addFeature('EDGE - Smoke test')
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
