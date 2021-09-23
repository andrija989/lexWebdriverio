 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const loginPageMyLexplore = require('../pageObjects/myLexplore/loginPage.js');
 const homePage = require('../pageObjects/myLexplore/homePage.js')
 const loginPage = require('../pageObjects/loginPage.js');
 const config = require('../config/mainConfig.js');
 const login = require('../login/loginTest.js')
 
 describe('my lexplore - header ->', function() {

  login()

  it('change laguage to svesnka', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Blocker')
    loginPageMyLexplore.changeLanguage("svenska")
  })

  it('check if language is changed - low button - svenska', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let low = homePage.lowScoreButton.getText()
    expect(low).to.eql("LÅG LÄSNIVÅ")
  })

  it('check if language is changed - below average button - svenska', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let belowAverage = homePage.belowAverageScoreButton.getText()
    expect(belowAverage).to.eql("UNDER MEDEL LÄSNIVÅ")
  })

  it('check if language is changed - average button - svenksa', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let average = homePage.averageScoreButton.getText()
    expect(average).to.eql("MEDEL LÄSNIVÅ")
  })

  it('check if language is changed - above average button - svenska', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let aboveAverage = homePage.aboveAverageScoreButton.getText()
    expect(aboveAverage).to.eql("ÖVER MEDEL LÄSNIVÅ")
  })

  it('change laguage to english', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Blocker')
    loginPageMyLexplore.changeLanguage("english")
  })

  it('check if language is changed - low button', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let low = homePage.lowScoreButton.getText()
    expect(low).to.eql("LOW")
  })

  it('check if language is changed - below average button', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let belowAverage = homePage.belowAverageScoreButton.getText()
    expect(belowAverage).to.eql("BELOW AVERAGE")

  })

  it('check if language is changed - average button', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let average = homePage.averageScoreButton.getText()
    expect(average).to.eql("AVERAGE")
  })

  it('check if language is changed - above average button', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let aboveAverage = homePage.aboveAverageScoreButton.getText()
    expect(aboveAverage).to.eql("ABOVE AVERAGE")
  })

  it('check if language is changed - high button', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Normal')
    let high = homePage.highScoreButton.getText()
    expect(high).to.eql("HIGH")
  })

  it('change laguage to usa english', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Blocker')
    loginPageMyLexplore.changeLanguage("usa")
  })

  // it('lexplore intensive link', function() {
  //   allureReporter.addFeature('MyLexplore - smoke')
  //   allureReporter.addSeverity('Blocker')
  //   loginPageMyLexplore.lexploreIntensiveOpen()
  // })

  // it('check url for lexplore intensive', function() {
  //   allureReporter.addFeature('MyLexplore - smoke')
  //   allureReporter.addSeverity('Minor')
  //   browser.pause(3000)
  //   var url = browser.getUrl()
  //   expect(url).to.eql('https://mydev.lexplore.com/en/lexplore-intensive/')
  // })

  // it('all parents link', function() {
  //   allureReporter.addFeature('MyLexplore - smoke')
  //   allureReporter.addSeverity('Blocker')
  //   loginPageMyLexplore.clickHamburgerMenu()
  //   loginPageMyLexplore.parentInstructionClick()
  // })

  // it('check url for lexplore intensive', function() {
  //   allureReporter.addFeature('MyLexplore - smoke')
  //   allureReporter.addSeverity('Minor')
  //   browser.pause(3000)
  //   var url = browser.getUrl()
  //   expect(url).to.eql('https://mydev.lexplore.com/en/all-parent-instruction/')
  // })

  it('logout', function() {
    allureReporter.addFeature('MyLexplore - smoke')
    allureReporter.addSeverity('Critical')
    loginPageMyLexplore.logout()
  })
    
 });
 