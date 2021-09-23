 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const navbar = require('../pageObjects/leftNavbar.js');
const login = require('../login/loginTest.js')
const color = require('../utilis/consoleColor.js')

describe('memory leak - load schools ->', function() {
login()

  let heapArray = new Array()

  it('select organisation', function() {
    allureReporter.addFeature('Memory Leak')
    allureReporter.addSeverity('Blocker')
    navbar.selectOrganisation('Organization 90');
  });

  let allSchools = ''
  it('get all schools', function() {
    allureReporter.addFeature('Memory Leak')
    allureReporter.addSeverity('Blocker')
    browser.waitUntil(
      () => $('select[data-automation-id=left-nav-select-school]').isEnabled() === true,
      {
          timeout: 15000,
          timeoutMsg: 'Schools are visible now'
      }
  );
    allSchools = $$('select[data-automation-id=left-nav-select-school] > option').map(option => option.getText())
  })

  let i = 0
  for(i = 0 ; i < 250 ; i++) {
    it(`select school - memory leak ${i}`, function() {
      allureReporter.addFeature('Memory Leak')
      allureReporter.addSeverity('Blocker')
      let school = allSchools[Math.floor(Math.random() * allSchools.length)]
      navbar.selectSchool(school)
      browser.pause(2000)
      let heap = browser.execute('return window.performance.memory');
      heapArray.push(heap)
    })
  }

  it('expect last item use to be below 500MB', function() {
    allureReporter.addFeature('Memory Leak')
    allureReporter.addSeverity('Blocker')
    let data = heapArray.length
    expect(heapArray[data-1].usedJSHeapSize).to.be.below(524288000)
  })
 
  it('set heap report in schoolLeak.json', function() {
    allureReporter.addFeature('Memory Leak')
    allureReporter.addSeverity('Blocker')
    var executor = heapArray

    var executorJson = JSON.stringify(executor)

    var fs = require('fs');
    fs.writeFile("./test/selenium/memoryLeak/schoolLeak.json", executorJson, function(err, result) {
    if (err) throw err;
      color.log('The file with metrics is created!', 'success');
    });
  })
  
});