 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const loginPage = require('../pageObjects/loginPage.js');
const navbar = require('../pageObjects/leftNavbar.js');
const administratorPage = require('../pageObjects/administratorPage.js');
const schoolPage = require('../pageObjects/schoolPage.js');
const homePage = require('../pageObjects/homePage.js');
const config = require('../config/mainConfig.js');
const organisationPage = require('../pageObjects/organisationPage.js');
const login = require('../login/loginTest.js')

describe('org.overview permisions ->', function() {

  login(config.OrgOvEmail, config.OrgOvPassword)
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('administrator page - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    const administratorLink = organisationPage.toAdministrationButton.isDisplayed();
    expect(administratorLink).to.eql(false);
  });

  it('select organisation', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    navbar.selectOrganisation('Vivify');
   });

  
  it('select schoolyear', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    browser.pause(3000)
    navbar.selectSchoolYear('20/21')
  })

  it('select school', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const school = navbar.selectSchoolButton;
    school.waitForEnabled(5000);
    navbar.selectSchool('All');
  });

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
    navbar.selectGrade('Gr1');
  });

  it('edit class - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
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

  it('can see student name in table - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    browser.pause(2000);
    const studentName = schoolPage.studentNameTable.isDisplayed();
    expect(studentName).to.eql(false);
  });

  it('can see student reading assesment in table - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentRead = schoolPage.studentReadingAbilityTable.isDisplayed();
    expect(studentRead).to.eql(false);
  });

  it('can see student gle in table - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentGLE = schoolPage.studentGLETable.isDisplayed();
    expect(studentGLE).to.eql(false);
  });

  it('can see student reading co in table - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentComperh = schoolPage.studentReadingComprehentionTable.isDisplayed();
    expect(studentComperh).to.eql(false);
  });

  it('student status in table - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentStatus = schoolPage.studentScreaningStatusTable.isDisplayed();
    expect(studentStatus).to.eql(false);
  });

  it('can see student comment in table - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentPublicCom = schoolPage.studentPublicCommentsTable.isDisplayed();
    expect(studentPublicCom).to.eql(false);
  });

  it('student internal comment in table - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const studentInternalCom = schoolPage.studentInternalCommentsTable.isDisplayed();
    expect(studentInternalCom).to.eql(false);
  });

  it('select student - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const student = navbar.selectStudentButton.isDisplayed();
    expect(student).to.eql(false);
  });

  it('logout org.overview role', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    allureReporter.startStep('open menu in navigation bar')
    browser.pause(3000)
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
