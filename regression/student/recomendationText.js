 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'
import singleStudentPage from '../../pageObjects/singleStudentPage';

const navbar = require('../../pageObjects/leftNavbar.js');
const login = require('../../login/loginTest.js')
const color = require('../../utilis/consoleColor.js')
const studentPage = require('../../pageObjects/singleStudentPage')
const allStudents = require('../student/recomendation.json')

describe('recomendation texts ->', function() {
 
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
 
  allStudents.forEach(student => {
    if(student != "All" && student != "Select a student") {
      it(`select student ${student}`, function() {
        allureReporter.addFeature('Recomendation texts')
        allureReporter.addSeverity('Blocker')
        navbar.selectStudentButton.waitForEnabled(5000);
        navbar.selectStudent(student);
      })
  
      it(`check if recomendation text is loaded - ${student}`, function() {
        allureReporter.addFeature('Recomendation texts')
        allureReporter.addSeverity('Minor')
        singleStudentPage.recomendationText.waitForDisplayed(8000)
      })
  
      it(`check if field has text - ${student}`, function() {
        allureReporter.addFeature('Recomendation texts')
        allureReporter.addSeverity('Minor')
        let text = singleStudentPage.recomendationText.getText()
        expect(text.length).to.gte(20)
      })
    }
  });

  it('delete student json', function() {
    allureReporter.addFeature('Recomendation texts')
    allureReporter.addSeverity('Minor')
    var fs = require('fs');
    fs.unlink("./test/selenium/regression/student/recomendation.json", (err) => {
    if (err) throw err;
    color.log('Successfully deleted student json', 'success');
    });
  });

});