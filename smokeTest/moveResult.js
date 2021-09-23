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
 
   it('move result to other student', function() {
     browser.pause(1000)
     allureReporter.addFeature('Smoke test')
     allureReporter.startStep('move result click')
     singleStudentPage.moveResultClick();
     allureReporter.endStep()
 
     allureReporter.startStep('confirm there are students on the list')
     singleStudentPage.pick1StudentButton.waitForDisplayed(8000);
     browser.pause(2000)
     allureReporter.endStep()
 
     allureReporter.startStep('pick student')
     browser.pause(2000)
     singleStudentPage.modalClassPick()
     singleStudentPage.pickAStudent('Raynolds Brian');
     $('div[role="dialog"] > div > button[class="btn primary "]').click({force:true});
     browser.pause(4000);
     allureReporter.endStep()
   });
 
   it('select student', function() {
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('Raynolds, Brian');
   });
   
   it('move result back to first student', function() {
     allureReporter.addFeature('Smoke test')
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