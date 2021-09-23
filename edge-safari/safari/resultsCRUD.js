 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const loginPage = require('../../pageObjects/loginPage.js');
const generators = require('../../utilis/generators.js');
const navbar = require('../../pageObjects/leftNavbar.js');
const studentPage = require('../../pageObjects/studentResultsPage.js');
const homePage = require('../../pageObjects/homePage.js');
const singleStudentPage = require('../../pageObjects/singleStudentPage.js');
const config = require('../../config/mainConfig.js');
const login = require('../../login/loginTest,js')

describe('check results ->', function() {

  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
 
  it('anonymize turn off', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Normal')
    navbar.clickAnonymize();
  });
 
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

  it('select grade', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('Class with results');
  });

  it('select student', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('Richardson, Lara');
  });

  it('review button existence', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('SAFARI - Smoke test')

    allureReporter.startStep('confirm that review button is displayed')
    studentPage.editResultButton.waitForDisplayed(8000);
    let review = studentPage.toReviewButton.isDisplayed()
    allureReporter.endStep()

    if(review === true) {
      allureReporter.startStep('review button click')
      studentPage.toReviewButton.click({force:true})
      allureReporter.endStep()

    } else if ($('button[data-automation-id="btn-pupil_editor.unpublish-single-PupilView-PrimaryButton"]').isDisplayed() === true ) {
      allureReporter.startStep('publish results')
      $('button[data-automation-id="btn-pupil_editor.unpublish-single-PupilView-PrimaryButton"]').click()
      allureReporter.endStep()

      allureReporter.startStep('review button click')
      studentPage.editResultButton.waitForDisplayed(8000);
      studentPage.toReviewButton.click({force:true})
      allureReporter.endStep()
    }
    browser.pause(1000)
  });

  it('edit answers', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('edit result click')
    studentPage.editResult();
    const answers = $$('select[data-automation-id="dropdown-ReadingResultsSelector"]');
    allureReporter.endStep()

    allureReporter.startStep('change few answers')
    answers.forEach(element => {
      if(element.isSelected(['option[value=10]'])) {
        studentPage.changeAnswer1('Correct')
        browser.pause(500)
      } else {
        studentPage.changeAnswer1('Wrong')
        browser.pause(500)
      } 
    });
    allureReporter.endStep()

    allureReporter.startStep('save changes')
    studentPage.saveChangeResults()
    allureReporter.endStep()
  });

  it('page refresh', function() {
    browser.refresh()
    browser.pause(4000)
  })

  it('move result to other student', function() {
    browser.pause(2000)
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.startStep('move result click')
    singleStudentPage.moveResultClick();
    allureReporter.endStep()

    allureReporter.startStep('confirm there are students on the list')
    singleStudentPage.pick1StudentButton.waitForDisplayed(8000);
    browser.pause(2000)
    allureReporter.endStep()

    allureReporter.startStep('pick student')
    browser.pause(2000)
    singleStudentPage.pickAStudent('Raynolds Brian');
    $('.buttons .primary').click({force:true});
    browser.pause(4000);
    allureReporter.endStep()
  });

  it('select student', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('Raynolds, Brian');
  });
  
  it('move result back to first student', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.startStep('confirm there is edit result button')
    studentPage.editResultButton.waitForDisplayed(8000);
    browser.pause(2000)
    allureReporter.endStep()

    allureReporter.startStep('confirm there is review button')
    let review = studentPage.toReviewButton.isDisplayed()
    allureReporter.endStep()


    if(review === true) {
      browser.pause(2000)
      allureReporter.startStep('click review button')
      studentPage.toReviewButton.click();
      browser.pause(2000);
      allureReporter.endStep()
    }

    allureReporter.startStep('move result button')
    browser.pause(2000)
    singleStudentPage.moveResultClick();
    allureReporter.endStep()

    allureReporter.startStep('confirm that students are displayed in list')
    browser.pause(2000)
    singleStudentPage.pick1StudentButton.waitForDisplayed(8000);
    browser.pause(2000)
    allureReporter.endStep()

    allureReporter.startStep('select student')
    browser.pause(2000)
    singleStudentPage.pickAStudent('Richardson Lara');
    allureReporter.endStep()

    allureReporter.startStep('Confirm')
    $('.buttons .primary').click({force:true});
    browser.pause(4000);
    allureReporter.endStep()
  });

  it('back to class', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addFeature('SAFARI - Smoke test')
    studentPage.clickLinkToClass();
  });

  it('add student 1', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    homePage.createStudentForm(
      'Remove',
      '1',
      '08/08/2010',
      '123Rand1',
      1,
      'Boy'
    );
  });
  
  it('add student 2', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(2000);
    homePage.createStudentForm(
      'Remove',
      '2',
      '08/08/2010',
      '123Rand2',
      2,
      'Girl'
    );
  });

  it('add student 3', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(2000);
    homePage.createStudentForm(
      'Remove',
      '3',
      '08/08/2010',
      '123Rand3',
      2,
      'Girl'
    );
    browser.pause(2000);
  });

  it('select other student 1', function() {
    browser.pause(2000)
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('1, Remove');
  });

  it('remove student 1 from class', function() {
    browser.pause(2000)
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let studentsName = $('h1');
    allureReporter.startStep('remove student 1')
    studentPage.removeStudentClick();
    browser.pause(500);
    allureReporter.endStep()

    allureReporter.startStep('delete from class')
    studentPage.deleteFromClassClick();
    browser.pause(500);
    allureReporter.endStep()

    allureReporter.startStep('Confirm')
    studentPage.fillDeleteInput();
    studentPage.delete();
    allureReporter.endStep()
  });

  it('select other student 2', function() {
    browser.pause(2000)
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(12000);
    navbar.selectStudent('2, Remove');
  });

  it('remove student 2 from school', function() {
    browser.pause(3000)
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let studentsName = $('h1');
    allureReporter.addStep('remove student 3')
    studentPage.removeStudentClick();
    browser.pause(500);
    allureReporter.endStep()

    allureReporter.addStep('delete from school')
    studentPage.deleteFromSchoolClick();
    browser.pause(500);
    allureReporter.endStep()

    allureReporter.addStep('confirm')
    studentPage.fillDeleteInputSchool();
    studentPage.delete();
    allureReporter.endStep()
  });

  it('select other student 3', function() {
    browser.pause(2000)
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(12000);
    navbar.selectStudent('3, Remove');
  });

  it('remove student 3 from organisation', function() {
    browser.pause(2000)
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let studentsName = $('h1');
    allureReporter.addStep('remove student 3')
    studentPage.removeStudentClick();
    browser.pause(500);
    allureReporter.endStep()

    allureReporter.addStep('delete from organisation')
    studentPage.deleteFromOrganisationClick();
    browser.pause(500);
    allureReporter.endStep()

    allureReporter.addStep('confirm')
    studentPage.fillDeleteInputOrganisation();
    studentPage.delete();
    allureReporter.endStep()
  });

  it('select move student', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(3000)
    let student = navbar.selectStudentButton;
    student.waitForEnabled(12000);
    navbar.selectStudent('Richardson, Lara');
  });

  it('move to another class', function() {
    browser.pause(2000)
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    studentPage.moveStudentForm('school', 'class');
    browser.pause(3000)
  });

  it('select school', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(10000);
    navbar.selectSchool('Crossroads Elementary');
    browser.pause(3000);
  });

  it('select grade', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(10000);
    navbar.selectGrade('Class with results');
    browser.pause(2000)
  });

  it('student withdrawn', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Normal')

    allureReporter.addStep('confirm that student is withdrawn')
    expect(studentPage.studentStatus.getText()).to.eql('Withdrawn');
    allureReporter.endStep()

    allureReporter.addStep('confirm that student performans is displayed')
    expect(studentPage.studentPerformans.isDisplayed(undefined, true));
    browser.pause(2000)
    allureReporter.endStep()
  });

  it('select school', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(2000)
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(5000);
    navbar.selectSchool('school');
    browser.pause(2000)
  });

  it('select grade', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('Gr1');
    browser.pause(2000)
  });

  it('select student', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    browser.pause(2000)
    navbar.selectStudent('Richardson, Lara');
    browser.pause(2000)
  });

  it('move to another class', function() {
    browser.pause(2000)
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    browser.pause(2000)
    studentPage.moveStudentForm('Crossroads Elementary', 'Class with results');
    browser.pause(2000)
  });

  it('check test school', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Normal')
    let school = studentPage.testSchool.getText();
    expect(school).to.eql('Crossroads Elementary');
    browser.pause(2000)
  });
});