 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const generators = require('../utilis/generators.js');
const loginPage = require('../pageObjects/loginPage.js');
const homePage = require('../pageObjects/homePage.js');
const organisationPage = require('../pageObjects/organisationPage.js');
const navbar = require('../pageObjects/leftNavbar.js');
const config = require('../config/mainConfig.js');
const login = require('../login/loginTest.js')

describe('school and student create ->', function() {

  login()
  let currentUrl = ''
  let report = new Array()
  let errors = new Array()

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('turn on network listener', function() {
    browser.cdp('Network', 'enable')
    browser.on('Network.responseReceived', (params) => {
        report.push(params.response)
    })
  })

  it('select organisation', function() {
    if(
      currentUrl.includes('dev.lexplore.com') || 
      currentUrl.includes('dev-test.lexplore.com') || 
      currentUrl.includes('localhost:8080')
      ) {
        allureReporter.addFeature('Smoke test')
        allureReporter.addSeverity('Normal')
        navbar.selectOrganisation('Vivify');
    }
  });

  it('select organisation', function() {
    if(
      currentUrl.includes('dev.lexplore.com') || 
      currentUrl.includes('dev-test.lexplore.com')
    ) {
      allureReporter.addFeature('Smoke test')
      allureReporter.addSeverity('Normal')
      navbar.selectOrganisation('Vivify');
    }
  });

  it('select school', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('wait for schools to be enabled')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(10000);
    allureReporter.endStep()

    allureReporter.startStep('pick school')
    navbar.selectSchool('Crossroads Elementary');
    allureReporter.endStep()

  });

  let newClass = 'z' + generators.randomStringFourDigits();
  it('create class', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('add new class click')
    homePage.clickAddClass();
    browser.pause(1000);
    allureReporter.endStep()

    allureReporter.startStep('set class name')
    homePage.setClassName(newClass);
    allureReporter.endStep()

    allureReporter.startStep('save class')
    homePage.save();
    browser.pause(3000);
    allureReporter.endStep()

    allureReporter.startStep('select created class')
    $(`[data-automation-id=filter-grid-item-link-${newClass}]`).click({
      force: true,
    });
    allureReporter.endStep()
  });

  it('add student', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(500);

    allureReporter.startStep('create 1st student')
    homePage.createStudentForm(
      'Oliver',
      'Twist',
      '08/08/2010',
      765881,
      1,
      'Male'
    );
    browser.pause(4000);
    allureReporter.endStep()

    allureReporter.startStep('create 2nd student')
    homePage.createStudentForm(
      'Mika',
      'Jankins',
      '08/08/2010',
      746211,
      2,
      'Female'
    );
    browser.pause(3000);
    allureReporter.endStep()

    allureReporter.startStep('confirm that 2 students are created')
    let result = $('span[class=resultSummaryBar-prop-value]').getText();
    expect(result).to.eql('2');
    allureReporter.endStep()
  });

  it('turn off testing for selected class', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    browser.pause(2500);

    allureReporter.startStep('turn off students prepare')
    homePage.clickPrepareReTest();
    browser.pause(1500)
    homePage.uncheckTest();
    browser.pause(1500)
    homePage.confirmSelect();
    homePage.saveTesting();
    homePage.close();
    $(
      'd50MdCFt0M2WvqTu4oIn1 Kz8SxMv1DdHZCPUdI3DBI _1JGqIgAz7pHNqS4g3iN3Aj'
    ).isDisplayed(undefined, false);
    allureReporter.endStep()
  });

  it('turn on testing for selected class', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    browser.pause(2500);

    allureReporter.startStep('turn on students prepare')
    homePage.clickPrepareReTest();
    browser.pause(1500)
    homePage.uncheckTest();
    browser.pause(1500)
    homePage.confirmSelect();
    homePage.saveTesting();
    homePage.close();
    $(
      'd50MdCFt0M2WvqTu4oIn1 Kz8SxMv1DdHZCPUdI3DBI _1JGqIgAz7pHNqS4g3iN3Aj'
    ).isDisplayed(undefined, false);
    allureReporter.endStep()
  });

  it('remove created class', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    browser.pause(500);

    allureReporter.startStep('remove created class')
    homePage.removeClass();
    allureReporter.endStep()

    allureReporter.startStep('confirm remove')
    homePage.confirmRemoveClass();
    browser.pause(4000);
    allureReporter.endStep()
  });

  it('logout', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    allureReporter.startStep('open menu in navigation bar')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('logout')
    organisationPage.logout()
    browser.pause(3000)
    allureReporter.endStep()

    allureReporter.startStep('check if you are loged out')
    browser.pause(3000)
    var url = browser.getUrl()
    expect(url).to.include('Account')
    allureReporter.endStep()
  })

  it('check report', function() {
    report.forEach(request => {
      if(request.status > 350) {
        errors.push({
          0 : request.url,
          1 : request.status
        })
      }
      expect(request.status).to.lte(350)
    });
  })

  it('create error report', function() {
    if(errors.length != 0) {
      var executorJson = JSON.stringify(errors)
      var fs = require('fs');
      fs.writeFile("./test/selenium/errors/errorsSchoolAndStudentCreate.json", executorJson, function(err, result) {
      });
    }
    browser.cdp('Network', 'disable')
    expect(errors.length).to.lte(1)
  })
});
