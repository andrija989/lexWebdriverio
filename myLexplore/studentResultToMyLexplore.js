 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
import { all } from 'lodash/fp';
import organisationPage from '../pageObjects/organisationPage.js';

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const generators = require('../utilis/generators.js');
 const navbar = require('../pageObjects/leftNavbar.js');
 const studentPage = require('../pageObjects/studentResultsPage.js');
 const homePage = require('../pageObjects/homePage.js');
 const singleStudentPage = require('../pageObjects/singleStudentPage.js');
 const config = require('../config/mainConfig.js');
 const login = require('../login/loginTest.js')
 
 describe('my lexplore - path trough results portal ->', function() {
  login(config.email, config.password, config.devStage)
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
   it('anonymize turn off', function() {
      allureReporter.addFeature('MyLexplore - smoke')
      allureReporter.addSeverity('Normal')
      navbar.clickAnonymize();
   });
  
   it('select organisation', function() {
      allureReporter.addFeature('MyLexplore - smoke')
      allureReporter.addSeverity('Normal')
      navbar.selectOrganisation('stimulisSweden');
   });
   
   it('select school', function() {
     allureReporter.addFeature('MyLexplore - smoke')
     allureReporter.addSeverity('Critical')
 
     allureReporter.startStep('wait for schools to be enabled')
     let school = navbar.selectSchoolButton;
     school.waitForEnabled(10000);
     allureReporter.endStep()
 
     allureReporter.startStep('pick school')
     navbar.selectSchool('Story testing');
     browser.pause(3000);
     allureReporter.endStep()
   });
 
   it('select grade', function() {
     allureReporter.addFeature('MyLexplore - smoke')
     allureReporter.addSeverity('Critical')
     let grade = navbar.selectGradeButton;
     grade.waitForEnabled(5000);
     navbar.selectGrade('#9425');
   });
 
   it('select student', function() {
     allureReporter.addFeature('MyLexplore - smoke')
     allureReporter.addSeverity('Critical')
     let student = navbar.selectStudentButton;
     student.waitForEnabled(5000);
     navbar.selectStudent('1, 1');
   });

   it('from student result to myLexplore', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Critical')
    singleStudentPage.myLexploreLink()
    browser.pause(2000)
   })

   it('check url for lexplore intensive', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Minor')
    browser.switchWindow('my.lexplore.com');
    browser.waitUntil(() => {
      let pageUrl = browser.getUrl();
      return pageUrl.indexOf('my.lexplore.com') > -1
    }, 8000)
    var url = browser.getUrl()
    expect(url).to.include('my.lexplore.com')
  })
 });