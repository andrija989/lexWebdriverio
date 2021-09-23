 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const loginPage = require('../pageObjects/loginPage.js');
const config = require('../config/mainConfig.js');
const navbar = require('../pageObjects/leftNavbar.js');
const wdio = require('../../../wdio.conf.js')
const administratorPage = require('../pageObjects/administratorPage.js');
const schoolPage = require('../pageObjects/schoolPage.js');
const homePage = require('../pageObjects/homePage.js');
const qualityPage = require('../pageObjects/qualityPage.js');
const studentPage = require('../pageObjects/studentResultsPage.js');
const singleStudentPage = require('../pageObjects/singleStudentPage.js');
const studentResultsPage = require('../pageObjects/studentResultsPage.js');
const organisationPage = require('../pageObjects/organisationPage.js');
const login = require('../login/loginTest.js')

describe('quality admin permisions ->', function() {

  login(config.qualityEmail, config.qualityPassword)
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('administrator page - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Blocker')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    let button = organisationPage.toAdministrationButton.isDisplayed()
    expect(button).to.eql(false)
  });

  it('select organisation', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    navbar.selectOrganisation('Vivify')
  });

  it('select schoolyear', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    browser.pause(1000)
    navbar.selectSchoolYear('20/21')
  })

  it('add new school  - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    browser.pause(2000);
    const addSchool = homePage.addSchoolButton.isDisplayed();
    expect(addSchool).to.eql(false);
  });

  it('select school', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const school = navbar.selectSchoolButton;
    school.waitForEnabled(5000);
    navbar.selectSchool('Crossroads Elementary');
  });

  it('add new class  - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    $('h1[class="toolbar__header"]').waitForDisplayed(8000)
    const addClass = homePage.addClassButton.isDisplayed();
    expect(addClass).to.eql(false);
  });

  it('edit school - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const editSchool = schoolPage.editSchoolButton.isDisplayed();
    expect(editSchool).to.eql(false);
  });

  it('remove school - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const removeSchool = schoolPage.removeSchoolButton.isDisplayed();
    expect(removeSchool).to.eql(false);
  });

  it('import users - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const importUsers = homePage.importStudentsButton.isDisplayed();
    expect(importUsers).to.eql(false);
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
    $('h1[class="toolbar__header"]').waitForDisplayed(8000)
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

  it('add student - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const addStudent = $(
      'button[data-automation-id="a-create-pupil-primary-button"]'
    ).isDisplayed();
    expect(addStudent).to.eql(false);
  });

  it('can publish test sessions', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const publishTest = homePage.publishTestSessionsButton.isDisplayed();
    expect(publishTest).to.eql(false);
  });

  it('can see student name in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Minor')
    const studentName = schoolPage.studentNameTable.isDisplayed();
    expect(studentName).to.eql(true);
  });

  it('can see student reading assesment in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Minor')
    const studentRead = schoolPage.studentReadingAbilityTable.isDisplayed();
    expect(studentRead).to.eql(true);
  });

  it('can see student gle in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Minor')
    const studentGLE = schoolPage.studentGLETable.isDisplayed();
    expect(studentGLE).to.eql(true);
  });

  it('can see student reading co in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Minor')
    const studentComperh = schoolPage.studentReadingComprehentionTable.isDisplayed();
    expect(studentComperh).to.eql(true);
  });

  it('can see student status in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Minor')
    const studentStatus = schoolPage.studentScreaningStatusTable.isDisplayed();
    expect(studentStatus).to.eql(false);
  });

  // it('can see student comment in table', function() {
  //   const studentPublicCom = schoolPage.studentPublicCommentsTable.isDisplayed();
  //   expect(studentPublicCom).to.eql(true);
  // });

  it('can see student internal comment in table', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Minor')
    const studentInternalCom = schoolPage.studentInternalCommentsTable.isDisplayed();
    expect(studentInternalCom).to.eql(false);
  });

  it('anonymize turn off', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    navbar.clickAnonymize();
  });

  it('select student under review', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    $('span*=Richardson, Lara').click();
  });

  it('edit student - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    browser.pause(2000)
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

  it('can add comment', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const addComment = studentResultsPage.addCommentButton.isDisplayed();
    expect(addComment).to.eql(true);
  });

  it('can delete result', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const deleteResult = studentResultsPage.deleteResultButton.isDisplayed();
    expect(deleteResult).to.eql(true);
  });

  it('can move result', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const moveResult = singleStudentPage.moveResultToOtherStudentButton.isDisplayed();
    expect(moveResult).to.eql(true);
  });

  it('can edit result', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const editResult = studentResultsPage.editResultButton.isDisplayed();
    expect(editResult).to.eql(true);
  });

  it('can publish result', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const publishResult = studentResultsPage.publishResultsButton.isDisplayed();
    expect(publishResult).to.eql(true);
  });

  it('can access to graphs result', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const graphAccess = singleStudentPage.graphResults.isDisplayed();
    expect(graphAccess).to.eql(true);
  });

  it('can access questions results', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const questionResults = singleStudentPage.tableResults.isDisplayed();
    expect(questionResults).to.eql(true);
  });

  it('check if quality page is displayed in menu and select it', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    organisationPage.toQualityPage()
    browser.pause(3000);
  })

  it('check url', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    const curentUrl = browser.getUrl()
    expect(curentUrl).to.include('admin/quality-review')
  })

  // it('select student result', function() {
  //   allureReporter.addFeature('Permissions test')
  //   allureReporter.addSeverity('Normal')
  //   qualityPage.selectSecondStudent()
  // })

  // it('check if button is displayed', function() {
  //   allureReporter.addFeature('Permissions test')
  //   allureReporter.addSeverity('Normal')
  //   const publishButon = qualityPage.publishButton.isDisplayed()
  //   expect(publishButon).to.eql(true)
  // })

  // it('check if published button changed status to active', function() {
  //   allureReporter.addFeature('Permissions test')
  //   allureReporter.addSeverity('Normal')
  //   const enabled = qualityPage.publishButton.isEnabled()
  //   expect(enabled).to.eql(true)
  // })

  it('logout quality administrator', function() {
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
