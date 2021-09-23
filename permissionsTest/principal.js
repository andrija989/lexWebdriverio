 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const loginPage = require('../pageObjects/loginPage.js');
const navbar = require('../pageObjects/leftNavbar.js');
const studentResultsPage = require('../pageObjects/studentResultsPage.js');
const singleStudentPage = require('../pageObjects/singleStudentPage.js');
const administratorPage = require('../pageObjects/administratorPage.js');
const schoolPage = require('../pageObjects/schoolPage.js');
const homePage = require('../pageObjects/homePage.js');
const config = require('../config/mainConfig.js');
const organisationPage = require('../pageObjects/organisationPage.js');
const login = require('../login/loginTest.js')

describe('principal permisions ->', function() {

  login(config.principalEmail, config.principalPassword)
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('administrator page - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
  });

  it('check if unauthorized', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    browser.pause(3000)
    var unauth = organisationPage.toAdministrationButton.isDisplayed()
    expect(unauth).to.eql(false)
  });

  it('select organisation', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    navbar.selectOrganisation('Vivify')
   });

  
  it('select schoolyear', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    browser.pause(1000)
    navbar.selectSchoolYear('20/21')
  })

  it('select school', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const school = navbar.selectSchoolButton;
    school.waitForEnabled(5000);
    navbar.selectSchool('Crossroads Elementary');
  });

  it('edit school - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const editSchool = schoolPage.editSchoolButton.isDisplayed();
    expect(editSchool).to.eql(false);
  });

  it('remove school - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const removeSchool = schoolPage.removeSchoolButton.isDisplayed();
    expect(removeSchool).to.eql(false);
  });

  it('add new class - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const addClass = homePage.addClassButton.isDisplayed();
    expect(addClass).to.eql(false);
  });

  it('select grade', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('Class with results');
  });

  it('edit class - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    browser.pause(3000)
    const editClass = schoolPage.removeClassButton.isDisplayed();
    expect(editClass).to.eql(false);
  });

  it('remove class - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const removeClass = schoolPage.editClassButton.isDisplayed();
    expect(removeClass).to.eql(false);
  });

  it('prepare re-test - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const prepareReTest = homePage.prepareReTestButton.isDisplayed();
    expect(prepareReTest).to.eql(false);
  });

  it('import students - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const importStudents = homePage.importStudentsButton.isDisplayed();
    expect(importStudents).to.eql(false);
  });

  it('can add student - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const addStudent = homePage.addStudentButton.isDisplayed();
    expect(addStudent).to.eql(false);
  });

  it('publish test sessions - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const publishTest = homePage.publishTestSessionsButton.isDisplayed();
    expect(publishTest).to.eql(false);
  });

  it('can see student name in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const studentName = schoolPage.studentNameTable.isDisplayed();
    expect(studentName).to.eql(true);
  });

  // it('can see student bithday in table', function() {
  //   let studentBithday = schoolPage.studentBirthdayTable.isDisplayed();
  //   expect(studentBithday).to.eql(true);
  // });

  it('can see student reading assesment in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentRead = schoolPage.studentReadingAbilityTable.isDisplayed();
    expect(studentRead).to.eql(true);
  });

  it('can see student gle in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentGLE = schoolPage.studentGLETable.isDisplayed();
    expect(studentGLE).to.eql(true);
  });

  it('can see student reading co in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentComperh = schoolPage.studentReadingComprehentionTable.isDisplayed();
    expect(studentComperh).to.eql(true);
  });

  it('student status in table - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentStatus = schoolPage.studentScreaningStatusTable.isDisplayed();
    expect(studentStatus).to.eql(false);
  });

  // it('can see student comment in table', function() {
  //   const studentPublicCom = schoolPage.studentPublicCommentsTable.isDisplayed();
  //   expect(studentPublicCom).to.eql(true);
  // });

  it('student internal comment in table - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentInternalCom = schoolPage.studentInternalCommentsTable.isDisplayed();
    expect(studentInternalCom).to.eql(false);
  });

  it('select student under review', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    $('span*=Richardson, Lara').click();
  });

  it('edit student - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    
    browser.pause(2000);
    const editStudent = studentResultsPage.editStudentButton.isDisplayed();
    expect(editStudent).to.eql(false);
  });

  it('move student - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const moveStudent = studentResultsPage.moveStudentLink.isDisplayed();
    expect(moveStudent).to.eql(false);
  });

  it('remove student - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const removeStudent = studentResultsPage.removeStudentButton.isDisplayed();
    expect(removeStudent).to.eql(false);
  });

  it('add comment - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const addComment = studentResultsPage.addCommentButton.isDisplayed();
    expect(addComment).to.eql(false);
  });

  it('delete result - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const deleteResult = studentResultsPage.deleteResultButton.isDisplayed();
    expect(deleteResult).to.eql(false);
  });

  it('move result - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const moveResult = singleStudentPage.moveResultToOtherStudentButton.isDisplayed();
    expect(moveResult).to.eql(false);
  });

  it('edit result - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const editResult = studentResultsPage.editResultButtonExaminer.isDisplayed();
    expect(editResult).to.eql(false);
  });

  it('publish result - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const publishResult = studentResultsPage.publishResultsButton.isDisplayed();
    expect(publishResult).to.eql(false);
  });

  it('access to graphs result - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Trivial')
    const graphAccess = singleStudentPage.graphResults.isDisplayed();
    expect(graphAccess).to.eql(false);
  });

  it('access recordings - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Trivial')
    const questionResults = singleStudentPage.tableResults.isDisplayed();
    expect(questionResults).to.eql(false);
  });

  it('logout principal', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    allureReporter.startStep('open menu in navigation bar')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('logout')
    organisationPage.logout()
    allureReporter.endStep()

    allureReporter.startStep('check if you are loged out')
    browser.pause(3000)
    var url = browser.getUrl()
    expect(url).to.include('https://logindev.lexplore.com')
    allureReporter.endStep()
  })
});
