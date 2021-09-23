/* eslint-env jquery */
import allureReporter from '@wdio/allure-reporter'

const color = require('../utilis/consoleColor.js')
 
describe('API automation - DELETE token->', function() {
  it('delete token', function() {
    allureReporter.addFeature('API automation - delete token')
    allureReporter.addSeverity('Minor')
    var fs = require('fs');
    fs.unlink("./test/selenium/API/token.json", (err) => {
    if (err) throw err;
    color.log('Snuccessfully deleted Token.js', 'success');
    });
  });
});
   