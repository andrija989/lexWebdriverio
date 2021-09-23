 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'
 import { BrowserRouter } from 'react-router-dom';
 import { devStage } from '../../config/mainConfig.js';
 import singleStudentPage from '../../pageObjects/singleStudentPage';
 
 const navbar = require('../../pageObjects/leftNavbar.js');
 const login = require('../../login/loginTest.js')
 const color = require('../../utilis/consoleColor.js')
 const studentPage = require('../../pageObjects/singleStudentPage')
 const config = require('../../config/mainConfig.js')
 const administrationPage = require('../../pageObjects/administratorPage.js')
 const organisationPage = require('../../pageObjects/organisationPage.js')
 const userName = {
   nameOld : "supervisor",
   name : "newName",
   lastNameOld : "1",
   lastName : "2",
   emailOld : "supervisor@g.com",
   email : "supervisor@gm.com",
   phoneOld : "",
   phone : "06656789345"
 }
  
 describe('get students ->', function() {
 
   login()
   
   it('load vivify administration page', () => {
     allureReporter.addFeature('Edit user')
     allureReporter.addSeverity('Blocker')
     let vivify = `${config.devStage}admin/organization/${config.vivifyOrg}`
     browser.url(vivify)
     expect(browser.getUrl()).to.eql(vivify)
   });
 
   it('edit user first and last name', () => {
     allureReporter.addFeature('Edit user')
     allureReporter.addSeverity('Blocker')
     administrationPage.openEditUser(userName.nameOld, userName.lastNameOld)
     browser.pause(1000)
     organisationPage.editUser(userName.name, userName.lastName)
   })
 
   it('find new created user', () => {
     allureReporter.addFeature('Edit user')
     allureReporter.addSeverity('Blocker')
     administrationPage.findCreatedUser(userName.name, userName.lastName)
   })
 
   it('load vivify2 administration page', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    let vivify2 = `${config.devStage}admin/organization/${config.vivify2Org}`
    browser.url(vivify2)
    expect(browser.getUrl()).to.eql(vivify2)
  });

  it('find new created user vivify2', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    administrationPage.findCreatedUser(userName.name, userName.lastName)
  })

  it('edit user first and last name in vivify2', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    administrationPage.openEditUser(userName.name, userName.lastName)
    browser.pause(1000)
    organisationPage.editUser(userName.nameOld, userName.lastNameOld)
  })

  it('load vivify administration page', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    let vivify = `${config.devStage}admin/organization/${config.vivifyOrg}`
    browser.url(vivify)
    expect(browser.getUrl()).to.eql(vivify)
  });

  it('find reverted user', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    administrationPage.findCreatedUser(userName.nameOld, userName.lastNameOld)
  })
 
 });