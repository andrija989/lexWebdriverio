import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPage = require('../pageObjects/loginPage.js');
 const generators = require('../utilis/generators.js');
 const navbar = require('../pageObjects/leftNavbar.js');
 const studentPage = require('../pageObjects/studentResultsPage.js');
 const homePage = require('../pageObjects/homePage.js');
 const singleStudentPage = require('../pageObjects/singleStudentPage.js');
 const loginPageMyLexplore = require('../pageObjects/myLexplore/loginPage.js');
 const homePageMyLexplore = require('../pageObjects/myLexplore/homePage.js')
 const config = require('../config/mainConfig.js');
 const login = require('../login/loginTest.js')
 
 describe('my lexplore - path trough results portal ->', function() {
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })

  it('click on results portal link', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    homePageMyLexplore.toResultsPortal() 
  })

  it('check url for lexplore results portal', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Minor')
    browser.pause(3000)
    var url = browser.getUrl()
    expect(url).to.eql(config.devStage)
  })
 });
 