 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const navbar = require('../pageObjects/leftNavbar.js');
 const singleStudentPage = require('../pageObjects/singleStudentPage.js');
 const studentPage = require('../pageObjects/studentResultsPage.js');
 const config = require('../config/mainConfig.js');
 const login = require('../login/loginTest.js')
 
 describe('teacher permisions ->', function() {
   
  login(config.teacherEmail, config.teacherPassword)
  let currentUrl = ''

  it('check url - EDGE', function() {
    currentUrl = browser.getUrl()
  })

  it('select organisation - EDGE', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    navbar.selectOrganisation('Vivify');
  });

  it('select school - EDGE', function() {
    allureReporter.addFeature('SAFARI - Smoke test')
    allureReporter.addSeverity('Critical')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(5000);
    navbar.selectSchool('Crossroads Elementary');
  });

  it('select grade - EDGE', function() {
    allureReporter.addFeature('EDGE - Smoke test')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('Class with results');
  });
 
   it('select student wither results under rewiev - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Critical')
     allureReporter.startStep('Select student that has review status')
     navbar.selectStudent('Richardson, Lara');
     allureReporter.endStep()
   });
 
   it('check teacher permisions - EDGE', function() {
     allureReporter.addFeature('EDGE - Smoke test')
     allureReporter.addSeverity('Minor')
     let graphs = singleStudentPage.graphResults;
     let resultTable = singleStudentPage.tableResults;
     
     allureReporter.startStep('Confirm that graphs table is not displayed')
     expect(graphs.isDisplayed()).to.eql(false);
     allureReporter.endStep()
 
     allureReporter.startStep('Confirm that results table is not displayed')
     expect(resultTable.isDisplayed()).to.eql(false);
     allureReporter.endStep()
   });
});
 