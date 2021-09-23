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
 
   it('add student 1', function() {
     allureReporter.addFeature('Smoke test')
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
   
   it('add student 2', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     browser.pause(2000);
     homePage.createStudentForm(
       'Remove',
       '2',
       '08/08/2010',
       '123Rand2',
       9,
       'Female'
     );
   });
 
   it('add student 3', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     browser.pause(2000);
     homePage.createStudentForm(
       'Remove',
       '3',
       '08/08/2010',
       '123Rand3',
       12,
       'Female'
     );
     browser.pause(2000);
   });
 
   it('select other student 1', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('1, Remove');
   });
 
   it('remove student 1 from class', function() {
     allureReporter.addFeature('Smoke test')
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
 
   it('select other student 2', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(12000);
     navbar.selectStudent('2, Remove');
   });
 
   it('remove student 2 from school', function() {
     allureReporter.addFeature('Smoke test')
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
 
   it('select other student 3', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(12000);
     navbar.selectStudent('3, Remove');
   });
 
   it('remove student 3 from organisation', function() {
     allureReporter.addFeature('Smoke test')
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