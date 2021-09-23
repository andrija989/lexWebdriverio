 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPageMyLexplore = require('../pageObjects/myLexplore/loginPage.js');
 const homePage = require('../pageObjects/myLexplore/homePage.js')
 const loginPage = require('../pageObjects/loginPage.js');
 const lexploreIntensive = require('../pageObjects/myLexplore/lexploreIntensive.js')
 const fluencyHome = require('../pageObjects/fluencyApp/fluencyHome.js')
 const config = require('../config/mainConfig.js');
 const login = require('../login/loginTest.js')
 
 describe('my lexplore - fluency app ->', function() {

  login();

  it('select low score button', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Blocker')
    homePage.lowScoreClick()
  })

  it('check if redirected', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Critical')
    browser.pause(3000)
    var url = browser.getUrl()
    expect(url).to.eql('https://mydev.lexplore.com/low-red-2/')
  })

  it('left now selection should be for low results', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Critical')
    let readLevel = homePage.leftNavLevel.getText()
    expect(readLevel).to.include('Low')
  })

  it('click on first element from grade to grade 4', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Critical')
    lexploreIntensive.clickGrade2to4()
  })

  it('check if redirected to fluency app', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Critical')
    browser.pause(3000)
    browser.switchWindow('fluency-app.lexplore.com');
    browser.pause(1000)
    var url = browser.getUrl()
    expect(url).to.include('fluency-app.lexplore.com')
  })

  it('change slide to 2', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.clickNext()
  })

  it('expect slide 2 to to be active', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let atrib = fluencyHome.secondSlide.getAttribute('class')
    expect(atrib).to.eql('active')
  })

  it('change slide to 3', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.clickNext()
  })

  it('expect slide 3 to to be active', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let atrib = fluencyHome.thirdSlide.getAttribute('class')
    expect(atrib).to.eql('active')
  })

  it('change slide to 4', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.clickNext()
  })

  it('expect slide 4 to to be active', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let atrib = fluencyHome.fourthSlide.getAttribute('class')
    expect(atrib).to.eql('active')
  })

  it('change slide to 1', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.clickNext()
  })

  it('expect slide 1 to to be active', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let atrib = fluencyHome.firstSlide.getAttribute('class')
    expect(atrib).to.eql('active')
  })

  it('open fluency menu', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.openMenu()
    expect(fluencyHome.navigation.isDisplayed()).to.eql(true)
  })

  it('open groupe 1', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.openGroup(1)
  })

  it('open text 1 in group 1', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.openFirstText(1)
    fluencyHome.openFirstText(1)
  })

  it('open fluency menu', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.openMenu()
    expect(fluencyHome.navigation.isDisplayed()).to.eql(true)
  })

  it('open groupe 3', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.openGroup(3)
  })

  it('open text 1 in group 3', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    browser.pause(1000)
    fluencyHome.openFirstText(3)
  })

  it('open fluency menu', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.openMenu()
    expect(fluencyHome.navigation.isDisplayed()).to.eql(true)
  })

  it('open groupe 5', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    fluencyHome.openGroup(5)
  })

  it('open text 1 in group 5', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    browser.pause(1000)
    fluencyHome.openFirstText(5)
  })
 });
 