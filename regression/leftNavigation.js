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
 
 describe('left navigation test ->', function() {
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
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    navbar.selectOrganisation('Vivify');
  });

  it('select school', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(5000);
    navbar.selectSchool('Crossroads Elementary');
  });

  it('select grade', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')
    let grade = navbar.selectGradeButton;
    grade.waitForEnabled(5000);
    navbar.selectGrade('Class with results');
  });
  
  it('select grade filter', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('select grade filter and confirm that exists')
    navbar.selectGradeFilter.waitForExist(15000);
    navbar.selectGradeFilterClick()
    allureReporter.endStep()

    allureReporter.startStep('pick grade 1 from filter')
    navbar.pickGrade1fromFilter()
    browser.pause(1000)
    allureReporter.endStep()
  })

  it('check if students grades are right filtered', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('confirm that there is one student grade 1')
    const studentGR1 = navbar.studentLaraInTable.isDisplayed()
    expect(studentGR1).to.eql(false);
    allureReporter.endStep()
  })

  it('change grade to GR8', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('exit multiselect')
    navbar.exitFromMultiSelectAction()
    browser.pause(1000)
    allureReporter.endStep()

    allureReporter.startStep('select grade 8 in filter')
    // navbar.selectGradeFilterClick()
    navbar.pickGrade8fromFilter();
    allureReporter.endStep()
  })

  it('expect 0 students with grade 8', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Trivial')

    allureReporter.startStep('confirm that there is no gr8 students')
    const tabel = navbar.studentTable.isDisplayed()
    expect(tabel).to.eql(false);
    allureReporter.endStep()
  })

  it('turn off filters in grade filters', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('exit from multiselect')
    navbar.exitFromMultiSelectAction()
    allureReporter.endStep()

    allureReporter.startStep('turn off grade filter')
    navbar.selectGradeFilterClick()
    allureReporter.endStep()
  })

  it('reading ability filter bellow average', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('confirm that ability filter exists')
    navbar.studentAbilityFilter.waitForExist(15000);
    allureReporter.endStep()

    allureReporter.startStep('ability filter select')
    navbar.studentAbilityFilterClick()
    allureReporter.endStep()

    allureReporter.startStep('select low ability')
    navbar.selectLowAbility()
    browser.pause(1000)
    allureReporter.endStep()
  })

  it('check bellow average students', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('expect that there is no low ability students')
    const tabel = navbar.studentTable.isDisplayed()
    expect(tabel).to.eql(false);
    allureReporter.endStep()
  })

  it('turn off filter reading ability', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('exit from multiselect')
    navbar.exitFromMultiSelectAction()
    allureReporter.endStep()

    allureReporter.startStep('click ability filter')
    navbar.studentAbilityFilterClick()
    allureReporter.endStep()
  })

  it('check if all results are back', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('confirm that student table is displayed')
    const tabel = navbar.studentTable.isDisplayed()
    expect(tabel).to.eql(false);
    allureReporter.endStep()
  })

  it('reading ability filter high', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('ability filter exists')
    navbar.studentAbilityFilter.waitForExist(15000);
    allureReporter.endStep()

    allureReporter.startStep('ability filter click')
    navbar.studentAbilityFilterClick()
    allureReporter.endStep()

    allureReporter.startStep('ability filter select high students')
    navbar.actionSelectHighStudents()
    browser.pause(1000)
    allureReporter.endStep()
  })

  it('check high students', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')

    allureReporter.startStep('confirm that there are high students')
    const tabel = navbar.studentTable.isDisplayed()
    expect(tabel).to.eql(false);
    allureReporter.endStep()
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
      fs.writeFile("./test/selenium/errors/errorsLeftNavigation.json", executorJson, function(err, result) {
      });
    }
    browser.cdp('Network', 'disable')
    expect(errors.length).to.lte(1)
  })
});