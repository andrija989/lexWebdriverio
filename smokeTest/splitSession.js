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
   
   it('anonymize turn off', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Normal')
     navbar.clickAnonymize();
   });
 
   it('select organisation', function() {
       allureReporter.addFeature('Smoke test')
       allureReporter.addSeverity('Normal')
       navbar.selectOrganisation('Vivify');
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
     browser.pause(3000);
     allureReporter.endStep()
   });
 
   it('select grade', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     let grade = navbar.selectGradeButton;
     grade.waitForEnabled(5000);
     navbar.selectGrade('Class with results');
   });
 
   it('select student', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('Richardson, Lara');
   });
 
   it('review button existence', function() {
     allureReporter.addSeverity('Critical')
     allureReporter.addFeature('Smoke test')
 
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
 
   it('move record to new test', function() {
     allureReporter.addSeverity('Normal')
     allureReporter.addFeature('Smoke test')
     browser.pause(1000);
     singleStudentPage.fillRecordMoveForm();
     browser.pause(3000);
   });
 
  //  it('back to class', function() {
  //    allureReporter.addFeature('Smoke test')
  //    allureReporter.addSeverity('Critical')
  //    studentPage.clickLinkToClass();
  //  });
 
  //  it('select student', function() {
  //    allureReporter.addFeature('Smoke test')
  //    allureReporter.addSeverity('Critical')
  //    let student = navbar.selectStudentButton;
  //    student.waitForEnabled(5000);
  //    navbar.selectStudent('Richardson, Lara');
  //  });
 
   it('move recording back', function() {
     allureReporter.addFeature('Smoke test')
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
  //    allureReporter.addFeature('Smoke test')
  //    allureReporter.addSeverity('Critical')
  //    studentPage.clickLinkToClass();
  //  });
 
  //  it('select student', function() {
  //    allureReporter.addFeature('Smoke test')
  //    allureReporter.addSeverity('Critical')
  //    let student = navbar.selectStudentButton;
  //    student.waitForEnabled(5000);
  //    navbar.selectStudent('Richardson, Lara');
  //  });
 
   it('delete result', function() {
     allureReporter.addFeature('Smoke test')
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
 
   it('delete cookie', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Minor')
     browser.execute(function (key) {
       return this.localStorage.clear()
       })
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
       fs.writeFile("./test/selenium/errors/errorsCheckTestResults.json", executorJson, function(err, result) {
       });
     }
     browser.cdp('Network', 'disable')
     expect(errors.length).to.lte(1)
   })
 });