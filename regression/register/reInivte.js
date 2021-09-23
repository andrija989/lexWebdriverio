 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
import homePage from 'test/selenium/pageObjects/homePage.js';

 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const baseUrl = require('../../../../wdio.conf');
 const login = require('../../login/loginTest.js')
 const password = require('../../utilis/password.js')
 
 describe('login Regression ->', function() {
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('go to administration page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('confirm and login')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('confirm and login')
    organisationPage.toAdminPage()
    browser.pause(3000);
    allureReporter.endStep()
  });
 
  it('pick organisation', function() {
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
 
  it('invite user', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('Create invite for new user')
    if($('=Jack DotRe').isDisplayed() === false ) {
      organisationPage.inviteUser();
      browser.pause(1000)
      organisationPage.submitAllInformationViaContactUsForm(
        'Jack',
        'DotRe',
        'jackdotRe@gmail.com',
        'Examiner',
        'school 2',
        '19/20',
        'class'
      );
    }
    allureReporter.endStep()
  });
 
  var inviteUrl = ''
  it('activate user', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('Regression')

    allureReporter.startStep('Find invite for new created user and open it')
    browser.pause(2000)
    $('=Jack DotRe').click();
    allureReporter.endStep()

    allureReporter.startStep('Catch invite link')
    browser.pause(2000)
    inviteUrl = $('form  a[target="_blank"]').getText()
    allureReporter.endStep()

    allureReporter.startStep('open menu in navigation bar')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('logout')
    organisationPage.logout()
    allureReporter.endStep()

    allureReporter.startStep('check if you are loged out')
    browser.pause(3000)
     allureReporter.endStep()

    allureReporter.startStep('Click on invite for new created user')
    browser.url(inviteUrl)
    allureReporter.endStep()
  });
 
  var newPassword = ''
  it('generate password', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('pop ID')
    let inviteId = inviteUrl.split("/").pop()
    allureReporter.endStep()

    allureReporter.startStep('pop ID')
    newPassword = password.generate(inviteId)
    allureReporter.endStep()
  });
 
  it('input examiner password', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('insert lexplore email')
    loginPage.setPassword(newPassword);
    allureReporter.endStep()

    allureReporter.startStep('confirm password')
    loginPage.signIn();
    browser.pause(1000)
    allureReporter.endStep()
  });
 
  it('set new password', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('enter old password')
    browser.pause(2000)
    loginPage.setPassword(newPassword);
    allureReporter.endStep()

    allureReporter.startStep('enter new password')
    loginPage.setNewPassword(config.password);
    allureReporter.endStep()

    allureReporter.startStep('confirm password')
    loginPage.setRePassword(config.password);
    allureReporter.endStep()

    allureReporter.startStep('submit')
    loginPage.clickSubmitButton();
    allureReporter.endStep()
  });

  it('logout registered user', function() {
    allureReporter.addFeature('Permissions test')
    allureReporter.addSeverity('Critical')
    allureReporter.startStep('open menu in navigation bar')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('logout')
    organisationPage.logout()
    allureReporter.endStep()

    allureReporter.startStep('check if you are loged out')
    browser.pause(3000)
    var url = browser.getUrl()
    expect(url).to.include('.lexplore.com/')
    allureReporter.endStep()
  })

  it('login with email', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    if(
        currentUrl === 'https://portal-us.lexplore.com/welcome'
    || currentUrl === 'https://portal.lexplore.com/welcome'
    || currentUrl === 'https://demo.lexplore.com/welcome'
    || currentUrl === 'https://test.lexplore.com/welcome'
    ) {
      allureReporter.startStep('insert lexplore email')
      loginPage.setEmail(config.qualityEmail);
      allureReporter.endStep()

      allureReporter.startStep('confirm email')
      loginPage.clickSubmitButton();
      allureReporter.endStep()
    } else {
      allureReporter.startStep('insert lexplore email')
      loginPage.setEmail(config.email);
      allureReporter.endStep()

      allureReporter.startStep('confirm email')
      loginPage.clickSubmitButton();
      allureReporter.endStep()
    }
  });

  it('select europe', () => {
    allureReporter.addFeature('Login')
    allureReporter.addSeverity('Blocker')
    loginPage.selectEurope()
  })

  it('enter password and login', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    if(
        currentUrl === 'https://portal-us.lexplore.com/welcome'
      || currentUrl === 'https://portal.lexplore.com/welcome'
      || currentUrl === 'https://demo.lexplore.com/welcome'
      || currentUrl === 'https://test.lexplore.com/welcome'
    ) {
      allureReporter.startStep('insert lexplore password')
      loginPage.setPassword(config.qualityPassword);
      allureReporter.endStep()

      allureReporter.startStep('confirm password')
      loginPage.signIn();
      allureReporter.endStep()
    } else {
      allureReporter.startStep('insert lexplore email')
      loginPage.setPassword(config.password);
      allureReporter.endStep()

      allureReporter.startStep('confirm password')
      loginPage.signIn();
      browser.pause(1000)
      allureReporter.endStep()
    }
  });

  it('go to administration page', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('confirm and login')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('confirm and login')
    organisationPage.toAdminPage()
    browser.pause(3000);
    allureReporter.endStep()
  });

 it('pick organisation - vivify', function() {
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

  it('delete invited user Jack DotRe', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Normal')
    allureReporter.startStep('find user Jack')
    var deleteUser = $('=Jack DotRe')
    // deleteUser.scrollIntoView()
    deleteUser.click({force:true});
    allureReporter.endStep()

    allureReporter.startStep('delete invite')
    browser.pause(2000);
    organisationPage.deleteInviteRegistered();
    browser.pause(2000);
    allureReporter.endStep()

    allureReporter.startStep('confirm that invite is deleted')
    let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
    expect(deleteModal).to.eql(false);
    allureReporter.endStep()
    browser.pause(5000)
  });

  it('invite user - 2nd time', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('Create invite for new user')
    if($('=Jack DotRe').isDisplayed() === false ) {
      organisationPage.inviteUserButton.scroll
      organisationPage.inviteUser();
      browser.pause(1000)
      organisationPage.submitAllInformationViaContactUsForm(
        'Jack',
        'DotRe',
        'jackdotRe@gmail.com',
        'Examiner',
        'school 2',
        '19/20',
        'class'
      );
    }
    allureReporter.endStep()
  });

  it('activate user - 2nd time', function() {
    allureReporter.addSeverity('Critical')
    allureReporter.addFeature('Regression')

    allureReporter.startStep('Find invite for new created user and open it')
    browser.pause(2000)
    $('=Jack DotRe').click();
    allureReporter.endStep()

    allureReporter.startStep('Catch invite link')
    browser.pause(4000)
    inviteUrl = $('form  a[target="_blank"]').getText()
    allureReporter.endStep()

    allureReporter.startStep('open menu in navigation bar')
    browser.pause(4000)
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    organisationPage.openUserMenu()
    allureReporter.endStep()

    allureReporter.startStep('logout')
    organisationPage.logout()
    allureReporter.endStep()

    allureReporter.startStep('check if you are loged out')
    browser.pause(3000)
     allureReporter.endStep()

    allureReporter.startStep('Click on invite for new created user')
    browser.url(inviteUrl)
    allureReporter.endStep()
  });
 
  it('generate password - 2nd time', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Critical')

    allureReporter.startStep('pop ID')
    let inviteId = inviteUrl.split("/").pop()
    allureReporter.endStep()

    allureReporter.startStep('pop ID')
    newPassword = password.generate(inviteId)
    allureReporter.endStep()
  });
 
  it('input examiner password - 2nd time', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('insert lexplore email')
    loginPage.setPassword(newPassword);
    allureReporter.endStep()

    allureReporter.startStep('confirm password')
    loginPage.signIn();
    browser.pause(1000)
    allureReporter.endStep()
  });
 
  it('set new password - 2nd time', function() {
    allureReporter.addFeature('Regression')
    allureReporter.addSeverity('Blocker')
    allureReporter.startStep('enter old password')
    browser.pause(2000)
    loginPage.setPassword(newPassword);
    allureReporter.endStep()

    allureReporter.startStep('enter new password')
    loginPage.setNewPassword(config.password);
    allureReporter.endStep()

    allureReporter.startStep('confirm password')
    loginPage.setRePassword(config.password);
    allureReporter.endStep()

    allureReporter.startStep('submit')
    loginPage.clickSubmitButton();
    allureReporter.endStep()
  });


//  it('accept new org and close modal - 2nd time', function() {
//    allureReporter.addFeature('Permissions test')
//    allureReporter.addSeverity('Minor')
//    allureReporter.startStep('close modal')
//    homePage.closeModal()
//    browser.pause(2000)
//    allureReporter.endStep()
//  })

 it('logout registered user - 2nd time', function() {
   allureReporter.addFeature('Permissions test')
   allureReporter.addSeverity('Critical')
   allureReporter.startStep('open menu in navigation bar')
   organisationPage.openUserMenuButton.waitForDisplayed(8000);
   organisationPage.openUserMenu()
   allureReporter.endStep()

   allureReporter.startStep('logout')
   organisationPage.logout()
   allureReporter.endStep()

   allureReporter.startStep('check if you are loged out')
   browser.pause(3000)
   var url = browser.getUrl()
   expect(url).to.include('.lexplore.com/')
   allureReporter.endStep()
 })
 it('login with email - 2nd time', function() {
  allureReporter.addFeature('Regression')
  allureReporter.addSeverity('Blocker')
  if(
      currentUrl === 'https://portal-us.lexplore.com/welcome'
  || currentUrl === 'https://portal.lexplore.com/welcome'
  || currentUrl === 'https://demo.lexplore.com/welcome'
  || currentUrl === 'https://test.lexplore.com/welcome'
  ) {
    allureReporter.startStep('insert lexplore email')
    loginPage.setEmail(config.qualityEmail);
    allureReporter.endStep()

    allureReporter.startStep('confirm email')
    loginPage.clickSubmitButton();
    allureReporter.endStep()
  } else {
    allureReporter.startStep('insert lexplore email')
    loginPage.setEmail(config.email);
    allureReporter.endStep()

    allureReporter.startStep('confirm email')
    loginPage.clickSubmitButton();
    allureReporter.endStep()
  }
});

it('select europe', () => {
  allureReporter.addFeature('Login')
  allureReporter.addSeverity('Blocker')
  loginPage.selectEurope()
})

it('enter password and login - 2nd time', function() {
  allureReporter.addFeature('Regression')
  allureReporter.addSeverity('Blocker')
  if(
      currentUrl === 'https://portal-us.lexplore.com/welcome'
    || currentUrl === 'https://portal.lexplore.com/welcome'
    || currentUrl === 'https://demo.lexplore.com/welcome'
    || currentUrl === 'https://test.lexplore.com/welcome'
  ) {
    allureReporter.startStep('insert lexplore password')
    loginPage.setPassword(config.qualityPassword);
    allureReporter.endStep()

    allureReporter.startStep('confirm password')
    loginPage.signIn();
    allureReporter.endStep()
  } else {
    allureReporter.startStep('insert lexplore email')
    loginPage.setPassword(config.password);
    allureReporter.endStep()

    allureReporter.startStep('confirm password')
    loginPage.signIn();
    browser.pause(1000)
    allureReporter.endStep()
  }
});

 it('go to administration page - 2nd time', function() {
   allureReporter.addFeature('Regression')
   allureReporter.addSeverity('Critical')

   allureReporter.startStep('confirm and login')
   organisationPage.openUserMenuButton.waitForDisplayed(8000);
   organisationPage.openUserMenu()
   allureReporter.endStep()

   allureReporter.startStep('confirm and login')
   organisationPage.toAdminPage()
   browser.pause(3000);
   allureReporter.endStep()
 });

it('pick organisation - vivify - 2nd time', function() {
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

 it('delete invited user Jack DotRe - 2nd time', function() {
   allureReporter.addFeature('Regression')
   allureReporter.addSeverity('Normal')
   allureReporter.startStep('find user Jack')
   var deleteUser = $('=Jack DotRe')
   deleteUser.click({force:true});
   allureReporter.endStep()

   allureReporter.startStep('delete invite')
   browser.pause(2000);
   organisationPage.deleteInviteRegistered();
   browser.pause(2000);
   allureReporter.endStep()

   allureReporter.startStep('confirm that invite is deleted')
   let deleteModal = $('div[class=add-edit-modal]').isDisplayed();
   expect(deleteModal).to.eql(false);
   allureReporter.endStep()
   browser.pause(2000)
 });
});
 