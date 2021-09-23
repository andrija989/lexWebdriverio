 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
 import singleStudentPage from '../../pageObjects/singleStudentPage';
 
 const navbar = require('../../pageObjects/leftNavbar.js');
 const login = require('../../login/loginTest.js')
 const color = require('../../utilis/consoleColor.js')
 const studentPage = require('../../pageObjects/singleStudentPage')
 
 describe('get students ->', function() {
  
   login()
   
   it('select organisation', function() {
     allureReporter.addFeature('Recomendation texts')
     allureReporter.addSeverity('Blocker')
     navbar.selectOrganisation('stimulisUSA');
   });
 
   it('select school', function() {
     allureReporter.addFeature('Recomendation texts')
     allureReporter.addSeverity('Critical')
 
     allureReporter.startStep('wait for schools to be enabled')
     let school = navbar.selectSchoolButton;
     school.waitForEnabled(10000);
     allureReporter.endStep()
 
     allureReporter.startStep('pick school')
     navbar.selectSchool('Automated testing');
     browser.pause(3000);
     allureReporter.endStep()
   });
 
   it('select grade', function() {
     allureReporter.addFeature('Recomendation texts')
     allureReporter.addSeverity('Critical')
     let grade = navbar.selectGradeButton;
     grade.waitForEnabled(5000);
     navbar.selectGrade('Recomendations');
   });
 
   
   it('get all students', function() {
     allureReporter.addFeature('Recomendation texts')
     allureReporter.addSeverity('Blocker')
     browser.waitUntil(
       () => $('select[data-automation-id="left-nav-select-pupil"]').isEnabled() === true,
       {
           timeout: 15000,
           timeoutMsg: 'Students are visible now'
       }
     );
   })
 
   it('Create students json', function() {
     var executor = $$('select[data-automation-id="left-nav-select-pupil"] > option').map(option => option.getText())
 
     var executorJson = JSON.stringify(executor)
 
     var fs = require('fs');
     fs.writeFile("./test/selenium/regression/student/recomendation.json", executorJson, function(err, result) {
     if (err) throw err;
       color.log('Students file has been created', 'success');
     });
   })
 });