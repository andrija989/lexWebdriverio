 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
import { func } from 'prop-types';

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const navbar = require('../pageObjects/leftNavbar.js');
 const studentPage = require('../pageObjects/studentResultsPage.js');
 const homePage = require('../pageObjects/homePage.js');
 const singleStudentPage = require('../pageObjects/singleStudentPage.js');
 const config = require('../config/mainConfig.js');
 const login = require('../login/loginTest.js')

 describe('sticky words check', function() {
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
    allureReporter.addFeature('Regression')
  allureReporter.addSeverity('Normal')
  navbar.clickAnonymize();
  });
 
  it('select organisation', function() {
  allureReporter.addFeature('Smoke test')
  allureReporter.addSeverity('Normal')
  navbar.selectOrganisation('Vivify');
  });
  
  it('select school', function() {
    allureReporter.addFeature('Regression')
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
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('Class with results');
  });

  it('select student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('Richardson, Lara');
  });

  it('check if sticky words as present', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    singleStudentPage.stickyWordsTable.waitForDisplayed(8000);
    let sticky = singleStudentPage.stickyWordsTable.isDisplayed()
    expect(sticky).to.eql(true)
  })

  it('number of displayed sticky words should be 6', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let count = 0;
    const number = $$('.c-table__tr')
    number.forEach(element => {
      count++;
    });
    expect(count).to.eql(6)
  })

  it('open sticky words modal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    singleStudentPage.stickyWordsModalOpen()
  })

  it('confirm there is more words in the modal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let count = 0;
    const number = $$('.c-table__tr')
    number.forEach(element => {
      count++;
    });
    expect(count).to.be.above(12)
  })

  it('close modal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
  })

  it('select second student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let student = navbar.selectStudentButton;
    student.waitForEnabled(5000);
    navbar.selectStudent('1, Student');
  });

  it('check if sticky words as present - second student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    singleStudentPage.stickyWordsTable.waitForDisplayed(8000);
    let sticky = singleStudentPage.stickyWordsTable.isDisplayed()
    expect(sticky).to.eql(true)
  })

  it('number of displayed sticky words should be 6 - second student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let count = 0;
    const number = $$('.c-table__tr')
    number.forEach(element => {
      count++;
    });
    expect(count).to.eql(6)
  })

  it('open sticky words modal - second student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    singleStudentPage.stickyWordsModalOpen()
  })

  it('confirm there is more words in the modal - second student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    let count = 0;
    const number = $$('.c-table__tr')
    number.forEach(element => {
      count++;
    });
    expect(count).to.be.above(12)
  })

  it('close modal - second student', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
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
      fs.writeFile("./test/selenium/errors/errorsStickyWords.json", executorJson, function(err, result) {
      });
    }
    browser.cdp('Network', 'disable')
    expect(errors.length).to.lte(1)
  })
 })