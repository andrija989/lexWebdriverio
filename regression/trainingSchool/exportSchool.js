 /* eslint-env jquery */

 import allureReporter from '@wdio/allure-reporter'

 const assert = require('assert');
 const administratorPage = require('../../pageObjects/administratorPage.js');
 const organisationPage = require('../../pageObjects/organisationPage.js');
 const config = require('../../config/mainConfig.js');
 const generators = require('../../utilis/generators.js');
 const login = require('../../login/loginTest.js')
 const homePage = require('../../pageObjects/homePage.js')
 const navbar = require('../../pageObjects/leftNavbar.js')
 const schoolPage = require('../../pageObjects/schoolPage.js')
 const XLSX  = require('xlsx')
 const { URL } = require('url')
 const today = require('../../utilis/date.js')
 const waitForFileExists = require('../../utilis/waitForFileExists.js')
 
 describe('Export test school ->', function() {
   login()
   let currentUrl = '';
   let report = new Array()
   let errors = new Array()
 
   it('Export test school - check url', function() {
     currentUrl = browser.getUrl();
   })

   it('turn on network listener', function() {
    browser.cdp('Network', 'enable')
    browser.on('Network.responseReceived', (params) => {
        report.push(params.response)
    })
  })
  
   it('Export test school - open test organisation', function() {
     allureReporter.addFeature('Regression')
     allureReporter.addSeverity('Critical')
     browser.url(`${config.devStage}organization/${config.vivifyOrg}`);
     console.log(`${config.devStage}organization/${config.vivifyOrg}`);
   })
 
   it('Export test school - select school', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Critical')
    let school = navbar.selectSchoolButton;
    school.waitForEnabled(10000);
    navbar.selectSchool('Test school - real data');
    browser.pause(3000);
  });

  it('Export test school - anonymize turn off', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    navbar.clickAnonymize();
  });
 
   it('Export test school - excel export open', function() {
     homePage.excelExport()
     browser.pause(5000)
   })
 
   it('Export test school - download file', function() {
     const downloadLink = homePage.downloadExcelButton
     downloadLink.click({force:true});
     browser.pause(2000)
     const downloadHref = downloadLink.getAttribute('href');
     const downloadUrl = new URL(downloadHref);
   })
 
   var sheet_name_list = ''
   var workbook = ''
   it('Export test school - read file', function() {
     workbook = XLSX.readFile(`./test/selenium/config/tempDownload/Lexplore Data Export Test school - real data 20_21 ${today()}.xlsx`)
     sheet_name_list = workbook.SheetNames
   })
 
   it('Export test school - check if test school can be exported', function() {
     var counter = 0
     XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).forEach(element => {
       if(element['School'] == 'Test school - real data') {
         counter++
       } 
     });
     expect(counter).to.eql(6)
   })

   it('check report', function() {
    report.forEach(request => {
      if(request.status > 350) {
        errors.push({
          0 : request.url,
          1 : request.status
        })
      }
      expect(request.status).to.lte(350)
    });
  })
 
  it('create error report', function() {
    if(errors.length != 0) {
      var executorJson = JSON.stringify(errors)
      var fs = require('fs');
      fs.writeFile("./test/selenium/errors/errorTrainingSchoolExportOrg.json", executorJson, function(err, result) {
      });
    }
    browser.cdp('Network', 'disable')
    expect(errors.length).to.lte(1)
  })
 });
  