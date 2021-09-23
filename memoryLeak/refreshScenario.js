 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const login = require('../login/loginTest.js')
 const color = require('../utilis/consoleColor.js')
 
 describe('memory leak - refresh student ->', function() {
 login()
 
  let heapArray = new Array()
  let student = 'https://dev.lexplore.com/organization/84f1fb52-77ca-4e1c-a116-f0dd86e195fd/classes/21e20429-dcb9-4e6b-aa29-6b7dad565017/pupil/ba11678c-c4e1-4a00-b704-c7ce8763bcb7?pupilRef=ba11678c-c4e1-4a00-b704-c7ce8763bcb7'
 
  let i = 0
  for(i = 0 ; i < 25 ; i++) {
    it(`change URL ${i}`, function() {
      allureReporter.addFeature('Memory Leak')
      allureReporter.addSeverity('Blocker')
      browser.url(student)
      browser.pause(2000)
      let heap = browser.execute('return window.performance.memory');
      heapArray.push(heap)
    });
  }
  
  it('expect last item use to be below 500MB', function() {
    allureReporter.addFeature('Memory Leak')
    allureReporter.addSeverity('Blocker')
    let data = heapArray.length
    expect(heapArray[data-1].usedJSHeapSize).to.be.below(524288000)
  })
  
  it('set heap report as leakRefresh.json', function() {
    allureReporter.addFeature('Memory Leak')
    allureReporter.addSeverity('Blocker')

    var executor = heapArray

    var executorJson = JSON.stringify(executor)

    var fs = require('fs');
    fs.writeFile("./test/selenium/memoryLeak/leakRefresh.json", executorJson, function(err, result) {
    if (err) throw err;
      color.log('The file with metrics is created!', 'success');
    });
  })
   
 });