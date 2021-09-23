 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const generators = require('../../utilis/generators.js');
const loginPage = require('../../pageObjects/loginPage.js');
const homePage = require('../../pageObjects/homePage.js');
const navbar = require('../../pageObjects/leftNavbar.js');
const config = require('../../config/mainConfig.js');
const login = require('../../login/loginTest,js')

describe('school and student create ->', function() {

  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
 
  it('select organisation', function() {
  allureReporter.addFeature('SAFARI - Smoke test')
  allureReporter.addSeverity('Normal')
  navbar.selectOrganisation('Vivify');
  });

  it('select school', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('wait for schools to be enabled')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(10000);
    allureReporter.endStep()

    allureReporter.startStep('pick school')
    navbar.selectSchool('Crossroads Elementary');
    browser.pause(3000);
    allureReporter.endStep()
  });

  let newClass = 'z' + generators.randomStringFourDigits();
  it('create class', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
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
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade(`${newClass}`);
    allureReporter.endStep()
  });

  it('add student', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(500);

    allureReporter.startStep('create 1st student')
    homePage.createStudentForm(
      'Oliver',
      'Twist',
      '08/08/2010',
      765881,
      1,
      'Boy'
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
      'Girl'
    );
    browser.pause(3000);
    allureReporter.endStep()

    allureReporter.startStep('confirm that 2 students are created')
    let result = $('span[class=resultSummaryBar-prop-value]').getText();
    expect(result).to.eql('2');
    allureReporter.endStep()
  });

  it('turn off testing for selected class', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Normal')
    browser.pause(1000);

    allureReporter.startStep('turn off students prepare')
    homePage.testStudentsOnOff();
    browser.pause(3000);
    allureReporter.endStep()
  });

  it('turn on testing for selected class', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Normal')
    browser.pause(2500);

    allureReporter.startStep('turn on students prepare')
    homePage.testStudentsOnOff();
    allureReporter.endStep()
  });

  it('remove created class', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
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
});
