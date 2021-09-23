 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const login = require('../../login/loginTest.js')
 const homePage = require('../../pageObjects/homePage.js')
 const navbar = require('../../pageObjects/leftNavbar.js')
 const schoolPage = require('../../pageObjects/schoolPage.js')
 const studentResultsPage = require('../../pageObjects/studentResultsPage.js')
  
 describe('Test Schools ->', function() {
   login()
   let currentUrl = '';
   let report = new Array()
   let errors = new Array()
 
   it('Test Schools - check url', function() {
     currentUrl = browser.getUrl();
   })

   it('turn on network listener', function() {
    browser.cdp('Network', 'enable')
    browser.on('Network.responseReceived', (params) => {
        report.push(params.response)
    })
  })
 
   it('Test Schools - open test organisation', function() {
     allureReporter.addFeature('Regression')
     allureReporter.addSeverity('Critical')
     browser.url(`${config.devStage}organization/${config.vivifyOrg}`);
     console.log(`${config.devStage}organization/${config.vivifyOrg}`);
   })
 
   it('select school', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(10000);
    navbar.selectSchool('Test school - real data');
    browser.pause(3000);
  });

  it('anonymize turn off', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    navbar.clickAnonymize();
  });

  it('select grade', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('class - 1');
  });

  it('select student', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('4, Student');
  });

  it('edit student', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    studentResultsPage.editStudent()
    browser.pause(4000)
  })

  it('unique it check', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    let id = studentResultsPage.uniqueID.getValue()
    expect(id).to.have.lengthOf(32);
  })

  
  it('create error report', function() {
    if(errors.length != 0) {
      var executorJson = JSON.stringify(errors)
      var fs = require('fs');
      fs.writeFile("./test/selenium/errors/errorTrainingSchoolEditUniqueId.json", executorJson, function(err, result) {
      });
    }
    browser.cdp('Network', 'disable')
    expect(errors.length).to.lte(1)
  })
 });
 