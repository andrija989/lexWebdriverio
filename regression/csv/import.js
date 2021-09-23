 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const login = require('../../login/loginTest.js')
 
 describe('CSV import ->', function() {
  login()
  let currentUrl = ''

  it('CSV - check url', function() {
    currentUrl = browser.getUrl()
  })

  it('CSV - go to administration page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('open menu in navigation bar')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('select admin page')
    organisationPage.toAdminPage()
    browser.pause(3000);
    allureReporter.endStep()
  });
 
  it('CSV - pick organisation', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('clear value from filter field')
    let filter = administratorPage.filterOrganisation;
    filter.clearValue();
    allureReporter.endStep()

    allureReporter.startStep('find vivify organisation end select it')
    $('=Vivify').waitForDisplayed(8000);
    $('=Vivify').click();
    allureReporter.endStep()
  });

  it('CSV - Open csv import modal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.importUsersButton.waitForDisplayed(8000);
    organisationPage.importUsersButton.click();
  })

  it('CSV - Enter csv invite 1', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.textAreaCSV.setValue(`Marc,Zoom,marczoom@gmail.com,+3816031232,ExaminerAdmin,,,`)
  })

  it('CSV - Accept csv', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.validateCSV()
    browser.pause(1500)
  })

  it('CSV - Save csv', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.saveCSV()
    browser.pause(2000)
  })

  it('CSV - delete invited user', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    if ($('=Marc Zoom').isDisplayed(undefined, true)) {
      allureReporter.startStep('find invite for new creted user')
      $('=Marc Zoom').click();
      allureReporter.endStep()

      allureReporter.startStep('delete invite')
      organisationPage.deleteInvite();
      browser.pause(2000);
      allureReporter.endStep()

      allureReporter.startStep('confirm that invite is deleted')
      let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
      expect(deleteModal).to.eql(false);
      allureReporter.endStep()
    }
    browser.pause(2000)
  });

  it('CSV - Open csv import modal - examiner admin', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.importUsersButton.waitForDisplayed(8000);
    organisationPage.importUsersButton.click();
  })

  it('CSV - Enter csv - examiner admin', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.textAreaCSV.setValue(`Marc,Zoom,marczoom@gmail.com,+3816031232,Teacher,Crossroads Elementary,load class,20/21`)
  })

  it('CSV - Accept csv - teacher', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.validateCSV()
    browser.pause(1500)
  })

  it('CSV - Save csv - teacher', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.saveCSV()
    browser.pause(2000)
  })

  it('CSV - delete invited user - teacher', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    if ($('=Marc Zoom').isDisplayed(undefined, true)) {
      allureReporter.startStep('find invite for new creted user')
      $('=Marc Zoom').click();
      allureReporter.endStep()

      allureReporter.startStep('delete invite')
      organisationPage.deleteInvite();
      browser.pause(2000);
      allureReporter.endStep()

      allureReporter.startStep('confirm that invite is deleted')
      let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
      expect(deleteModal).to.eql(false);
      allureReporter.endStep()
    }
    browser.pause(2000)
  });

  it('CSV - Open csv import modal - examiner', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.importUsersButton.waitForDisplayed(8000);
    organisationPage.importUsersButton.click();
  })

  it('CSV - Enter csv - examiner', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.textAreaCSV.setValue(`Marc,Zoom,marczoom@gmail.com,+3816031232,Examiner,,,`)
  })

  it('CSV - Accept csv - examiner', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.validateCSV()
    browser.pause(1500)
  })

  it('CSV - Save csv - examiner', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.saveCSV()
    browser.pause(2000)
  })

  it('CSV - delete invited user - examiner', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    if ($('=Marc Zoom').isDisplayed(undefined, true)) {
      allureReporter.startStep('find invite for new creted user')
      $('=Marc Zoom').click();
      allureReporter.endStep()

      allureReporter.startStep('delete invite')
      organisationPage.deleteInvite();
      browser.pause(2000);
      allureReporter.endStep()

      allureReporter.startStep('confirm that invite is deleted')
      let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
      expect(deleteModal).to.eql(false);
      allureReporter.endStep()
    }
    browser.pause(2000)
  });

  it('CSV - Open csv import modal - principal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.importUsersButton.waitForDisplayed(8000);
    organisationPage.importUsersButton.click();
  })

  it('CSV - Enter csv - principal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.textAreaCSV.setValue(`Marc,Zoom,marczoom@gmail.com,+3816031232,Principal,Brazil,,`)
  })

  it('CSV - Accept csv - principal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.validateCSV()
    browser.pause(1500)
  })

  it('CSV - Save csv - principal', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    organisationPage.saveCSV()
    browser.pause(2000)
  })

  it('CSV - delete invited user - principal', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    if ($('=Marc Zoom').isDisplayed(undefined, true)) {
      allureReporter.startStep('find invite for new creted user')
      $('=Marc Zoom').click();
      allureReporter.endStep()

      allureReporter.startStep('delete invite')
      organisationPage.deleteInvite();
      browser.pause(2000);
      allureReporter.endStep()

      allureReporter.startStep('confirm that invite is deleted')
      let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
      expect(deleteModal).to.eql(false);
      allureReporter.endStep()
    }
    browser.pause(2000)
  });

 });
 