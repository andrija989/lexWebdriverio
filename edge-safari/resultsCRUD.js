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
 const login = require('../login/loginTest.js')
 
 describe('check results ->', function() {
   
  login()
  let currentUrl = ''

  it('check url - EDGE', function() {
    currentUrl = browser.getUrl()
  })
  
  it('anonymize turn off - EDGE', function() {
    allureReporter.addFeature('EDGE - Smoke test')
    allureReporter.addSeverity('Normal')
    browser.pause(3000)
    navbar.clickAnonymize();
  });
  
  it('select organisation - EDGE', function() {
    allureReporter.addFeature('EDGE - Smoke test')
    allureReporter.addSeverity('Normal')
    navbar.selectOrganisation('Vivify');
  });
   
  it('select school - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
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
 
   it('select grade - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let grade = navbar.selectGradeButton;
     grade.waitForEnabled(5000);
     navbar.selectGrade('Class with results');
   });
 
   it('select student - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('Richardson, Lara');
   });
 
   it('review button existence - EDGE', function() {
     allureReporter.addSeverity('Critical')
     allureReporter.addFeature('EDGE - Smoke test')
 
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
 
   it('edit answers - EDGE', function() {
    allureReporter.addFeature('EDGE - Smoke test')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('edit result click')
    studentPage.editResult();
    const answers = $$('select[data-automation-id="dropdown-ReadingResultsSelector"]');
    allureReporter.endStep()

    allureReporter.startStep('change few answers')
    answers.forEach(element => {
      if(element.isSelected(['option[value=10]'])) {
        element.selectByVisibleText('Correct');
      } else {
        element.selectByVisibleText('Wrong');
        browser.pause(500)
      } 
    });
    allureReporter.endStep()

    allureReporter.startStep('save changes')
    studentPage.saveChangeResults()
    allureReporter.endStep()
   });
 
   it('hide recording - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Normal')
     browser.pause(4000)
     studentPage.hideAndCommentRecording(generators.randomString());
     browser.pause(3000);
   });
 
   it('move record to new test - EDGE', function() {
     allureReporter.addSeverity('Normal')
     allureReporter.addFeature('EDGE - Smoke test')
     browser.pause(1000);
     singleStudentPage.fillRecordMoveForm();
     browser.pause(3000);
   });
 
  //  it('back to class', function() {
  //    allureReporter.addFeature('EDGE - Smoke test')
  //    allureReporter.addSeverity('Critical')
  //    studentPage.clickLinkToClass();
  //  });
 
  //  it('select student', function() {
  //    allureReporter.addFeature('EDGE - Smoke test')
  //    allureReporter.addSeverity('Critical')
  //    let student = navbar.selectStudentButton;
  //    student.waitForEnabled(5000);
  //    navbar.selectStudent('Richardson, Lara');
  //  });
 
  it('move recording back - EDGE', function() {
    allureReporter.addFeature('EDGE - Smoke test')
    allureReporter.addSeverity('Normal')
    browser.pause(5000);
    if (singleStudentPage.moveBackRecordingButton.isExisting()) {
      singleStudentPage.moveRecordBack();
      browser.pause(5000);
    }
    if (singleStudentPage.moveBackRecordingButton.isExisting()) {
      singleStudentPage.moveRecordBack();
      browser.pause(5000);
    }
  });
 
  //  it('back to class', function() {
  //    allureReporter.addFeature('EDGE - Smoke test')
  //    allureReporter.addSeverity('Critical')
  //    studentPage.clickLinkToClass();
  //  });
 
  //  it('select student', function() {
  //    allureReporter.addFeature('EDGE - Smoke test')
  //    allureReporter.addSeverity('Critical')
  //    let student = navbar.selectStudentButton;
  //    student.waitForEnabled(5000);
  //    navbar.selectStudent('Richardson, Lara');
  //  });
 
   it('delete result - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     browser.pause(3000);
     if (singleStudentPage.confirmResultDoesntExists.isExisting() === false) {
       browser.refresh()
       browser.pause(2000)
 
       allureReporter.startStep('delete result 1st try')
       singleStudentPage.deleteTestResultLink();
       browser.pause(2000);
       allureReporter.endStep()
 
       allureReporter.startStep('delete result 2st try')
       singleStudentPage.confirmDeleteResult();
       browser.pause(2000);
       allureReporter.endStep()
     }
   });
 
   it('back to class - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     studentPage.clickLinkToClass();
   });
 
   it('select student', function() {
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('Richardson, Lara');
   });
 
   it('move result to other student - EDGE', function() {
     browser.pause(1000)
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.startStep('move result click')
     singleStudentPage.moveResultClick();
     allureReporter.endStep()
 
     allureReporter.startStep('confirm there are students on the list')
     singleStudentPage.pick1StudentButton.waitForDisplayed(8000);
     browser.pause(2000)
     allureReporter.endStep()
 
     allureReporter.startStep('pick student')
     singleStudentPage.pickAStudent('Raynolds Brian');
     $('div[role="dialog"] > div > button[class="btn primary "]').click({force:true});
     browser.pause(4000);
     allureReporter.endStep()
   });
 
   it('select student - EDGE', function() {
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('Raynolds, Brian');
   });
   
   it('move result back to first student - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.startStep('confirm there is edit result button')
     studentPage.editResultButton.waitForDisplayed(8000);
     allureReporter.endStep()
 
     allureReporter.startStep('confirm there is review button')
     let review = studentPage.toReviewButton.isDisplayed()
     allureReporter.endStep()
 
 
     if(review === true) {
       allureReporter.startStep('click review button')
       studentPage.toReviewButton.click();
       browser.pause(2000);
       allureReporter.endStep()
     }
 
     allureReporter.startStep('move result button')
     singleStudentPage.moveResultClick();
     allureReporter.endStep()
 
     allureReporter.startStep('confirm that students are displayed in list')
     singleStudentPage.pick1StudentButton.waitForDisplayed(8000);
     browser.pause(2000)
     allureReporter.endStep()
 
     allureReporter.startStep('select student')
     singleStudentPage.pickAStudent('Richardson Lara');
     allureReporter.endStep()
 
     allureReporter.startStep('Confirm')
     $('div[role="dialog"] > div > button[class="btn primary "]').click({force:true});
     browser.pause(4000);
     allureReporter.endStep()
   });
 
   it('back to class - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     studentPage.clickLinkToClass();
   });
 
   it('add student 1 - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     homePage.createStudentForm(
       'Remove',
       '1',
       '08/08/2010',
       '123Rand1',
       1,
       'Male'
     );
   });
   
   it('add student 2 - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     browser.pause(2000);
     homePage.createStudentForm(
       'Remove',
       '2',
       '08/08/2010',
       '123Rand2',
       2,
       'Female'
     );
   });
 
   it('add student 3 - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     browser.pause(2000);
     homePage.createStudentForm(
       'Remove',
       '3',
       '08/08/2010',
       '123Rand3',
       2,
       'Female'
     );
     browser.pause(2000);
   });
 
   it('select other student 1 - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('1, Remove');
   });
 
   it('remove student 1 from class - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let studentsName = $('h1');
     if (studentsName.getText() == 'Remove 1') {
 
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
     }
   });
 
   it('select other student 2 - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(12000);
     navbar.selectStudent('2, Remove');
   });
 
   it('remove student 2 from school - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let studentsName = $('h1');
     if (studentsName.getText() == 'Remove 2') {
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
     }
   });
 
   it('select other student 3 - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(12000);
     navbar.selectStudent('3, Remove');
   });
 
   it('remove student 3 from organisation - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let studentsName = $('h1');
     if (studentsName.getText() == 'Remove 3') {
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
     }
   });
 
   it('select move student - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(12000);
     navbar.selectStudent('Richardson, Lara');
   });
 
   it('move to another class - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     studentPage.moveStudentForm('school', 'class');
   });
 
   it('select school - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let school = navbar.selectSchoolButton;
     school.waitForEnabled(10000);
     navbar.selectSchool('Crossroads Elementary');
     browser.pause(3000);
   });
 
   it('select grade - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let grade = navbar.selectGradeButton;
     grade.waitForEnabled(10000);
     navbar.selectGrade('Class with results');
   });
 
   it('student withdrawn - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Normal')
 
     allureReporter.addStep('confirm that student is withdrawn')
     expect(studentPage.studentStatus.getText()).to.eql('Withdrawn');
     allureReporter.endStep()
 
     allureReporter.addStep('confirm that student performans is displayed')
     expect(studentPage.studentPerformans.isDisplayed(undefined, true));
     allureReporter.endStep()
   });
 
   it('select school - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let school = navbar.selectSchoolButton;
     school.waitForEnabled(5000);
     navbar.selectSchool('school');
   });
 
   it('select grade - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let grade = navbar.selectGradeButton;
     grade.waitForEnabled(5000);
     navbar.selectGrade('Gr1');
   });
 
   it('select student - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('Richardson, Lara');
   });
 
   it('check test school - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Minor')
     let school = studentPage.testSchool.getText();
     expect(school).to.eql('Crossroads Elementary');
   });
 
   it('check student status - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Minor')
     let status = studentPage.testStatus.getText();
     expect(status).to.eql('Reading comprehension:');
   });
 
   it('check student status in new school - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Minor')
     studentPage.backToClassLink();
     expect(studentPage.newSchoolResults.isDisplayed(undefined, true));
   });
 
   it('select student - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('Richardson, Lara');
   });
 
   it('move to another class - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     studentPage.moveStudentForm('Crossroads Elementary', 'Class with results');
   });
 
   it('check test school - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Normal')
     let school = studentPage.testSchool.getText();
     expect(school).to.eql('Crossroads Elementary');
   });
 
   it('check student status - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Minor')
     let status = studentPage.testStatus.getText();
     expect(status).to.eql('Reading comprehension:');
   });
 });