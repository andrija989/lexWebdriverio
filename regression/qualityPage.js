 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const generators = require('../utilis/generators.js');
 const navbar = require('../pageObjects/leftNavbar.js');
 const studentPage = require('../pageObjects/studentResultsPage.js');
 const homePage = require('../pageObjects/homePage.js');
 const singleStudentPage = require('../pageObjects/singleStudentPage.js');
 const config = require('../config/mainConfig.js');
 const organisationPage = require('../pageObjects/organisationPage.js');
 const administratorPage = require('../pageObjects/administratorPage.js');
 const qualityPage = require('../pageObjects/qualityPage.js')
 const login = require('../login/loginTest.js')
 
describe('quality page automated test ->', function() {
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('go to quality page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')

    allureReporter.startStep('user menu is displayed')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    allureReporter.endStep()

    allureReporter.startStep('open user menu')
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('select quality page')
    organisationPage.toQualityPage()
    browser.pause(3000);
    allureReporter.endStep()
  });

  it('turn off anonymize filter', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    qualityPage.clickAnonymize()
  })

  it('select market', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    browser.pause(4000)

    allureReporter.startStep('select market is displayed')
    qualityPage.selectMarket.waitForDisplayed(8000)
    allureReporter.endStep()

    allureReporter.startStep('select market from list')
    qualityPage.selectMarketAction('USA')
    browser.pause(1000)
    allureReporter.endStep()
  })

  it('select organsation', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    qualityPage.selectOrganisationAction('Vivify')
    browser.pause(1000)
  })

  it('select school', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('select school is displayed')
    qualityPage.selectSchoolsQuality.waitForDisplayed(8000)
    allureReporter.endStep()

    allureReporter.startStep('open school multiselect')
    qualityPage.openSchoolsSelect()
    allureReporter.endStep()

    allureReporter.startStep('select school')
    qualityPage.reactSelectOption('school', 1) // select Brazil elementary
    browser.pause(1000)
    allureReporter.endStep()
  })

  it('select class', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('select class is displayed')
    qualityPage.selectClassesQuality.waitForDisplayed(8000)
    allureReporter.endStep()

    allureReporter.startStep('open class multiselect')
    qualityPage.openClassesSelect()
    allureReporter.endStep()

    allureReporter.startStep('select class')
    qualityPage.reactSelectOption('class', 0) // select School 
    browser.pause(1000)
    allureReporter.endStep()
  })

  // it('select grade', function() {
  //   qualityPage.selectGradesQuality.waitForDisplayed(8000)
  //   qualityPage.openGradesSelect()
  //   browser.pause(1000)
  //   qualityPage.reactSelectOption('grade', 1) // select Grade
  //   browser.pause(1000)
  // })

  it('select status', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('select schools quality is displayed')
    qualityPage.selectSchoolsQuality.waitForDisplayed(8000)
    allureReporter.endStep()

    allureReporter.startStep('open status multyselect')
    qualityPage.openStatusSelect()
    allureReporter.endStep()

    allureReporter.startStep('select status')
    qualityPage.reactSelectOption('status', 2) //select status
    browser.pause(1000)
    allureReporter.endStep()
  })

  it('select first grade student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    qualityPage.selectFirstStudent()
  })

  it('publish reviewed testing', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')

    allureReporter.startStep('publish student with result on review')
    qualityPage.publish()
    allureReporter.endStep()

    allureReporter.startStep('confirm publish')
    qualityPage.confirmClick()
    browser.pause(3000)
    allureReporter.endStep()
  })

  it('go to results page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Minor')

    allureReporter.startStep('go to results page')
    organisationPage.toResultsPage()
    browser.pause(1000);
    allureReporter.endStep()
  });

  it('select organization', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let organisation = navbar.selectOrganisationButton
    organisation.waitForEnabled(10000);
    navbar.selectOrganisation('Vivify')
  })

  it('select school', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(10000);
    navbar.selectSchool('Crossroads Elementary');
    browser.pause(3000);
  });

  it('select grade', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('Class with results');
  });

  it('select student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('Richardson, Lara');
  });

  it('move test back to review', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    studentPage.toReviewButton.click({force:true})
    browser.pause(3000)
  })
});
