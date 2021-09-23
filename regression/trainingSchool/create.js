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

  it('Test Schools - create test school', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    homePage.addSchool('training')
    browser.pause(3000)
  })

  it('Test Schools - select school', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(10000);
    navbar.selectSchool('training');
    browser.pause(3000);
  });

  it('Test Schools - check if there is note about training school', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let error = homePage.notificationTraining.getText()
    expect(error).to.include('Training school')
  })
 
  it('Test Schools - create class', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    homePage.clickAddClass();
    browser.pause(1000);
    homePage.setClassName('training class');
    homePage.save();
    browser.pause(3000);
  });

  it('Test Schools - select grade', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('training class');
  });

  it('Test Schools - add student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    homePage.createStudentForm(
      'Training',
      '1',
      '08/08/2010',
      'training1234',
      1,
      'Male'
    );
    browser.pause(1500);
  });

  it('Test Schools - select grade', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('All');
    browser.pause(1000)
  });

  it('Test Schools - remove school', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    schoolPage.removeSchool()
    browser.pause(1000)
  })
  
  it('check report', function() {
    report.forEach(request => {
      if(request.status > 350) {
        errors.push({
          0 : request.url,
          1 : request.status
        })
      }
      expect(request.status).to.lte(450)
    });
  })

  it('create error report', function() {
    if(errors.length != 0) {
      var executorJson = JSON.stringify(errors)
      var fs = require('fs');
      fs.writeFile("./test/selenium/errors/errorTrainingSchoolCreate.json", executorJson, function(err, result) {
      });
    }
    browser.cdp('Network', 'disable')
    expect(errors.length).to.lte(3)
  })
});
