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

  it('edit user first name', () => {
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

  it('logout', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    organisationPage.logout()
    browser.pause(3000)
  })


  login('supervisor@g.com', 'Supervisor123')

  it('confirm user name has changed', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    organisationPage.loggedUserName.waitForDisplayed(8000)
    let text = organisationPage.loggedUserName.getText()
    expect(text).to.eql(`${userName.name.toUpperCase()} ${userName.lastName}`)
  })

  it('logout', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    organisationPage.openUserMenuButton.waitForDisplayed(8000);
    organisationPage.openUserMenu()
    organisationPage.logout()
    browser.pause(3000)
  })

  login()

  it('load vivify administration page', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    let vivify = `${config.devStage}admin/organization/${config.vivifyOrg}`
    browser.url(vivify)
    expect(browser.getUrl()).to.eql(vivify)
  });

  it('edit user first name', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    administrationPage.openEditUser(userName.name, userName.lastName)
    browser.pause(1000)
    organisationPage.editUser(userName.nameOld, userName.lastNameOld)
  })

  it('find new created user', () => {
    allureReporter.addFeature('Edit user')
    allureReporter.addSeverity('Blocker')
    administrationPage.findCreatedUser(userName.nameOld, userName.lastNameOld)
  })

});