 /* eslint-env jquery */

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const generators = require('../utilis/generators.js');
 const navbar = require('../pageObjects/leftNavbar.js');
 const studentPage = require('../pageObjects/studentResultsPage.js');
 const homePage = require('../pageObjects/homePage.js');
 const singleStudentPage = require('../pageObjects/singleStudentPage.js');
 const config = require('../config/mainConfig.js');
 const organisationPage = require('../pageObjects/organisationPage.js');
 const administratorPage = require('../pageObjects/administratorPage.js');
 const qualityPage = require('../pageObjects/qualityPage.js')
 
 let i = 0
 for(i=0; i<10; i++) {
  describe('load test 8 ->', function() {
    this.retries(5)
    it('login with email', function() {
      browser.maximizeWindow();
      browser.url('./welcome');
      let currentUrl = browser.getUrl()
      if(
       currentUrl === 'https://portal-us.lexplore.com/welcome'
    || currentUrl === 'https://portal.lexplore.com/welcome'
    ) {
        browser.url('./signin/vivify')
      } else {
        loginPage.loginWithEmail();
      }
    });

    it('login with email and password', function() {
      loginPage.setEmail(config.Sa8Email);
      loginPage.setPassword(config.password);
      loginPage.clickSubmitButton();
    });

    it('go to administration page', function() {
      organisationPage.openUserMenuButton.waitForDisplayed(8000);
      organisationPage.openUserMenu()
      organisationPage.toAdminPage()
      browser.pause(3000);
    });

    it('pick organisation', function() {
      let filter = administratorPage.filterOrganisation;
      filter.clearValue();
      $('=Vivify').waitForDisplayed(8000);
      $('=Vivify').click();
    });
  
    it('invite user', function() {
      browser.refresh();
      browser.pause(2000)
      if($('=Sa8 User').isDisplayed() === false ) {
        organisationPage.inviteUser();
        organisationPage.submitAllInformationViaContactUsForm(
        'Sa8',
        'User',
        'sa8user@gmail.com',
        'Examiner',
        'school 2',
        '19/20',
        'class'
      );
      }
    });

    it('delete user', function() {
      $('=Sa8 User').waitForDisplayed(12000)
      if ($('=Sa8 User').isDisplayed(undefined, true)) {
        $('=Sa8 User').click();
        organisationPage.deleteInvite();
        browser.pause(2000);
        let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
        expect(deleteModal).to.eql(false);
      }
    });

    it('go to quality page', function() {
      organisationPage.openUserMenuButton.waitForDisplayed(8000);
      organisationPage.openUserMenu()
      organisationPage.toQualityPage()
      browser.pause(3000);
    });

    it('select first student', function() {
      qualityPage.selectFirstStudent()
    })

    it('go to results page', function() {
      organisationPage.openUserMenuButton.waitForDisplayed(8000);
      organisationPage.openUserMenu()
      organisationPage.toResultsPage()
      browser.pause(3000);
    });

    it('select organization', function() {
      let organisation = navbar.selectOrganisationButton
      organisation.waitForEnabled(10000);
      navbar.selectOrganisation('Vivify')
    })

    it('select school', function() {
      let school = navbar.selectSchoolButton;
      school.waitForEnabled(10000);
      navbar.selectSchool('Crossroads Elementary');
      browser.pause(3000);
    });

    it('anonymize turn off', function() {
      navbar.clickAnonymize();
    });

    it('create class', function() {
      if($(`[data-automation-id=filter-grid-item-link-loadSchool8]`).isDisplayed() === false) {
        homePage.clickAddClass();
        browser.pause(1000);
        homePage.setClassName('loadSchool8');
        homePage.save();
        browser.pause(3000);
        $(`[data-automation-id=filter-grid-item-link-loadSchool8]`).click({
          force: true,
        });
      }
    });

    it('add student 1', function() {
      homePage.createStudentForm(
        'Cook',
        'Student1',
        '08/08/2010',
        'Fake108',
        1,
        'Boy'
      );
    });
    it('add student 2', function() {
      browser.pause(2000);
      homePage.createStudentForm(
        'Cook',
        'Student2',
        '08/08/2010',
        'Fake208',
        2,
        'Girl'
      );
    });
    it('add student 3', function() {
      browser.pause(2000);
      homePage.createStudentForm(
        'Cook',
        'Student3',
        '08/08/2010',
        'Fake308',
        2,
        'Girl'
      );
      browser.pause(2000);
    });

    it('select other student 1', function() {
      let student = navbar.selectStudentButton;
      student.waitForEnabled(5000);
      navbar.selectStudent('Student1, Cook');
    });

    it('remove student 1 from class', function() {
      let studentsName = $('h1');
      if (studentsName.getText() == 'Cook Student1') {
        studentPage.removeStudentClick();
        browser.pause(500);
        studentPage.deleteFromClassClick();
        browser.pause(500);
        studentPage.fillDeleteInput();
        studentPage.delete();
      }
    });

    it('select other student 2', function() {
      let student = navbar.selectStudentButton;
      student.waitForEnabled(12000);
      navbar.selectStudent('Student2, Cook');
    });

    it('remove student 2 from school', function() {
      let studentsName = $('h1');
      if (studentsName.getText() == 'Cook Student2') {
        studentPage.removeStudentClick();
        browser.pause(500);
        studentPage.deleteFromSchoolClick();
        browser.pause(500);
        studentPage.fillDeleteInputSchool();
        studentPage.delete();
      }
    });

    it('select other student 3', function() {
      let student = navbar.selectStudentButton;
      student.waitForEnabled(12000);
      navbar.selectStudent('Student3, Cook');
    });

    it('remove student 3 from organisation', function() {
      let studentsName = $('h1');
      if (studentsName.getText() == 'Cook Student3') {
        studentPage.removeStudentClick();
        browser.pause(500);
        studentPage.deleteFromOrganisationClick();
        browser.pause(500);
        studentPage.fillDeleteInputOrganisation();
        studentPage.delete();
      }
    });

    it('remove created class', function() {
      browser.pause(500);
      homePage.removeClass();
      homePage.confirmRemoveClass();
      browser.pause(4000);
    });

    it('select class', function() {
      let school = navbar.selectGradeButton;
      school.waitForEnabled(10000);
      navbar.selectGrade('load class');
      browser.pause(3000);
    });


    it('select move student', function() {
      let student = navbar.selectStudentButton;
      student.waitForEnabled(12000);
      navbar.selectStudent('Student, Move8');
    });

    it('move to another class', function() {
      studentPage.moveStudentForm('school', 'class');
    });

    it('select school', function() {
      let school = navbar.selectSchoolButton;
      school.waitForEnabled(10000);
      navbar.selectSchool('Crossroads Elementary');
      browser.pause(3000);
    });

    it('select grade', function() {
      let grade = navbar.selectGradeButton;
      grade.waitForEnabled(10000);
      navbar.selectGrade('load class');
    });

    it('student withdrawn', function() {
      expect(studentPage.studentStatus.getText()).to.eql('Withdrawn');
      expect(studentPage.studentPerformans.isDisplayed(undefined, true));
    });

    it('select school', function() {
      let school = navbar.selectSchoolButton;
      school.waitForEnabled(5000);
      navbar.selectSchool('school');
    });

    it('select grade', function() {
      let grade = navbar.selectGradeButton;
      grade.waitForEnabled(5000);
      navbar.selectGrade('Gr1');
    });

    it('select student', function() {
      let student = navbar.selectStudentButton;
      student.waitForEnabled(5000);
      navbar.selectStudent('Student, Move8');
    });


    it('move to another class', function() {
      studentPage.moveStudentForm('Crossroads Elementary', 'load class');
    });

    it('check test school', function() {
      let school = studentPage.testSchool.getText();
      expect(school).to.eql('Crossroads Elementary');
    });

    it('logout', function() {
      organisationPage.openUserMenuButton.waitForDisplayed(8000);
      organisationPage.openUserMenu()
      organisationPage.logout()
      browser.pause(3000);
    });
  });
  }