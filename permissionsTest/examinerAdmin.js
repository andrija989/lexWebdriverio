 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const loginPage = require('../pageObjects/loginPage.js');
const navbar = require('../pageObjects/leftNavbar.js');
const studentResultsPage = require('../pageObjects/studentResultsPage.js');
const singleStudentPage = require('../pageObjects/singleStudentPage.js');
const administratorPage = require('../pageObjects/administratorPage.js');
const organisationPage = require('../pageObjects/organisationPage.js');
const schoolPage = require('../pageObjects/schoolPage.js');
const homePage = require('../pageObjects/homePage.js');
const config = require('../config/mainConfig.js');
const login = require('../login/loginTest.js')

describe('examiner admin permisions ->', function() {
  
  login(config.ExAdminEmail, config.ExAdminPassword)
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
  
  it('go to administration page', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    organisationPage.toAdminPage()
    browser.pause(3000);
  });

  it('more than one organisation is displayed', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Trivial')
    administratorPage.allOrganisations.waitForDisplayed(15000);
    let count = 0;
    const organisations = $$('table > tbody > tr');
    organisations.forEach(element => {
      count++;
    });
    expect(count).to.be.above(0);
  });

  it('add organisation button is displayed', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Minor')
    const addOrg = administratorPage.addOrganisation.isDisplayed();
    expect(addOrg).to.eql(true);
  });

  it('select organisation', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Blocker')
    administratorPage.vivify.waitForDisplayed(12000);
    browser.pause(2000);
    administratorPage.selectVivify();
  });

  it('can invite users', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Blocker')
    organisationPage.inviteUserButton.waitForDisplayed(8000);
    const invite = organisationPage.inviteUserButton.isDisplayed();
    expect(invite).to.eql(true);
  });

  it('can import users with CSV', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Blocker')
    organisationPage.importUsersButton.waitForDisplayed(8000);
    const invite = organisationPage.importUsersButton.isDisplayed();
    expect(invite).to.eql(true);
  })

  it('can invite only predefined roles', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    browser.pause(5000)
    organisationPage.inviteUser();
    browser.pause(2000);
    const selectBox = organisationPage.userRole;
    selectBox.selectByVisibleText('Teacher');
    selectBox.selectByVisibleText('Org. overview');
    selectBox.selectByVisibleText('Supervisor');
    selectBox.selectByVisibleText('Principal');
    selectBox.selectByVisibleText('Examiner external');
    selectBox.selectByVisibleText('Examiner');
    selectBox.selectByVisibleText('Examiner administrator');
    selectBox.selectByVisibleText('User administrator');
  });

  it('exit modal', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Blocker')
    organisationPage.exitModal.click({ force: true });
  });

  it('can edit organisation', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const edit = organisationPage.editOrganisationButton.isDisplayed();
    expect(edit).to.eql(true);
  });

  it('to overview page', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    administratorPage.returnToOverviewPage();
  });

  it('select organisation', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    navbar.selectOrganisation('Vivify');
  });

  
  it('select schoolyear', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    browser.pause(1000)
    navbar.selectSchoolYear('20/21')
  })

  it('can add new school', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
    browser.pause(2000);
    homePage.addSchoolButton.waitForDisplayed(8000);
    const addSchool = homePage.addSchoolButton.isDisplayed();
    expect(addSchool).to.eql(true);
  });

  it('select school', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const school = navbar.selectSchoolButton;
    school.waitForEnabled(5000);
    navbar.selectSchool('Crossroads Elementary');
  });

  it('can add new class', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    homePage.addClassButton.waitForDisplayed(8000);
    const addClass = homePage.addClassButton.isDisplayed();
    expect(addClass).to.eql(true);
  });

  it('can edit school', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    schoolPage.editSchoolButton.waitForDisplayed(8000);
    const editSchool = schoolPage.editSchoolButton.isDisplayed();
    expect(editSchool).to.eql(true);
  });

  it('can remove school', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const removeSchool = schoolPage.removeSchoolButton.isDisplayed();
    expect(removeSchool).to.eql(true);
  });

  it('can import users', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const importUsers = homePage.importStudentsButton.isDisplayed();
    expect(importUsers).to.eql(true);
  });

  it('select grade', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('Class with results');
  });

  it('can edit class', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    schoolPage.removeClassButton.waitForDisplayed(8000);
    const editClass = schoolPage.removeClassButton.isDisplayed();
    expect(editClass).to.eql(true);
  });

  it('can remove class', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const removeClass = schoolPage.editClassButton.isDisplayed();
    expect(removeClass).to.eql(true);
  });

  it('can prepare re-test', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const prepareReTest = homePage.prepareReTestButton.isDisplayed();
    expect(prepareReTest).to.eql(true);
  });

  it('can import students', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const importStudents = homePage.importStudentsButton.isDisplayed();
    expect(importStudents).to.eql(true);
  });

  it('can add student', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const addStudent = $(
      'button[data-automation-id="a-create-pupil-primary-button"]'
    ).isDisplayed();
    expect(addStudent).to.eql(true);
  });

  it('can publish test sessions - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Normal')
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
    allureReporter.addSeverity('Normal')
    const student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('Richardson, Lara');
  });

  it('can edit student', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    studentResultsPage.editStudentButton.waitForDisplayed(12000);
    const editStudent = studentResultsPage.editStudentButton.isDisplayed();
    expect(editStudent).to.eql(true);
  });

  it('can move student', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const moveStudent = studentResultsPage.moveStudentLink.isDisplayed();
    expect(moveStudent).to.eql(true);
  });

  it('can remove student', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const removeStudent = studentResultsPage.removeStudentButton.isDisplayed();
    expect(removeStudent).to.eql(true);
  });

  it('can add comment', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
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
    allureReporter.addSeverity('Critical')
    const editResult = studentResultsPage.editResultButtonExaminer.isDisplayed();
    expect(editResult).to.eql(true);
  });

  it('can publish result - no permission', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    const publishResult = studentResultsPage.publishResultsButton.isDisplayed();
    expect(publishResult).to.eql(false);
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

  it('logout examiner administrator', function() {
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
