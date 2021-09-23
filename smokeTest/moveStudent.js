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
 
   it('select move student', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     browser.pause(2000)
     let student = navbar.selectStudentButton;
     student.waitForEnabled(12000);
     navbar.selectStudent('Richardson, Lara');
   });
 
   it('move to another class', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     browser.pause(2000)
     studentPage.moveStudentForm('school', 'class')
   });
 
   // it('check student status', function() {
   //   allureReporter.addFeature('Smoke test')
   //   allureReporter.addSeverity('Minor')
   //   let status = studentPage.testStatus.getText();
   //   expect(status).to.eql('Reading comprehension:');
   // });
 
   // it('check student status in new school', function() {
   //   allureReporter.addFeature('Smoke test')
   //   allureReporter.addSeverity('Minor')
   //   studentPage.backToClassLink();
   //   expect(studentPage.newSchoolResults.isDisplayed(undefined, true));
   // });

 
   it('move to another class', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Critical')
     browser.pause(3000)
     studentPage.moveStudentForm('Crossroads Elementary', 'Class with results');
   });
 
   it('check test school', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Normal')
     browser.pause(2000)
     let school = studentPage.testSchool.getText();
     expect(school).to.eql('Crossroads Elementary');
   });
 
   it('check student status', function() {
     allureReporter.addFeature('Smoke test')
     allureReporter.addSeverity('Minor')
     let status = studentPage.testStatus.getText();
     expect(status).to.eql('Reading comprehension:');
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