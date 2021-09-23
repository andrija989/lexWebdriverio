 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
import modals from 'test/selenium/pageObjects/modals.js';

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const generators = require('../../utilis/generators.js');
 const navbar = require('../../pageObjects/leftNavbar.js');
 const studentPage = require('../../pageObjects/studentResultsPage.js');
 const homePage = require('../../pageObjects/homePage.js');
 const singleStudentPage = require('../../pageObjects/singleStudentPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const login = require('../../login/loginTest.js')
 
 describe('languages check - class page ->', function() {
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
 
  it('anonymize turn off', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    navbar.clickAnonymize();
  });
 
  it('select organisation', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    navbar.selectOrganisation('stimulisUK');
    browser.pause(2000)
  });

  it('school data modal - org page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    modals.schoolData.waitForDisplayed(8000)
    let modal = modals.schoolData.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('reading ability modal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingAbility.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('comparisons modal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.comparisons.isDisplayed()
    expect(modal).to.eql(true)
  })
 
  it('select school', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(5000);
    navbar.selectSchool('Story testing');
    browser.pause(2000)
  });

  it('school data modal - school page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    browser.pause(4000)
    let modal = modals.schoolData.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('reading ability modal - school page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    browser.pause(2000)
    let modal = modals.readingAbility.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('comparisons modal - school page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.comparisons.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('select class', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('#9425');
    browser.pause(2000)
  });

  it('school data modal - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.schoolData.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('reading ability modal - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingAbility.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('comparisons modal - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.comparisons.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('yle - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.yle.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('readingCo - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingCo.isDisplayed()
    expect(modal).to.eql(true)
  })
   
  it('standard score - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.standardScore.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('reading age - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingAge.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('mean reading speed - checkbox - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.meanReadingSpeedCheckbox.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('comment - checkbox - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.commentCheckbox.isDisplayed()
    expect(modal).to.eql(true)
  })

   it('rading ability - table - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingAbilityTable.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('rading co - table - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingCoTable.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('rading age - table - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingAgeTable.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('mean reading speed - table - class page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.meanReadingSpeedTable.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('select student', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('4, grade');
    browser.pause(2000)
  });

  it('precentile - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.precentile.isDisplayed()
    expect(modal).to.eql(false)
  })

  it('answer number - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.answerNumber.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('reading speed - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingSpeedStudentPage.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('rapid naming - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.rapidNaming.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('saccadic length - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.saccadicLength.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('regression frequency - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.regressionFrequency.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('fixation time - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.fixationTime.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('YLE - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.yleStudentPage.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('standard score - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.standardScoreStudentPage.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('reading age - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingAgeStudentPage.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('decoding - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.decoding.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('decoding - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.decoding.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('reading ability - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.readingAbilityStudentPage.isDisplayed()
    expect(modal).to.eql(true)
  })

  it('questions - student page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let modal = modals.questions.isDisplayed()
    expect(modal).to.eql(true)
  })
   
 });