 /* eslint-env jquery */
 import allureReporter from '@wdio/allure-reporter'

 const { URL } = require('url')
 const assert = require('assert');
 const loginPage = require('../../pageObjects/loginPage.js');
 const generators = require('../../utilis/generators.js');
 const navbar = require('../../pageObjects/leftNavbar.js');
 const homePage = require('../../pageObjects/homePage.js');
 const config = require('../../config/mainConfig.js');
 const waitForFileExists = require('../../utilis/waitForFileExists.js')
 const today = require('../../utilis/date.js')
 const XLSX  = require('xlsx')
 const login = require('../../login/loginTest.js')

 describe('USA excel-export ->', function() {
  login()
  let currentUrl = ''

  it('check url', function() {
    currentUrl = browser.getUrl()
  })
  
  it('anonymize turn off', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    navbar.clickAnonymize();
  });
  
  it('select organisation', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    navbar.selectOrganisation('Vivify');
  });

  it('excel export open', function() {
    homePage.excelExport()
    browser.pause(5000)
  })

  it('download file', function() {
    const downloadLink = homePage.downloadExcelButton
    downloadLink.click({force:true});
    browser.pause(2000)
    const downloadHref = downloadLink.getAttribute('href');
    const downloadUrl = new URL(downloadHref);
  })

  var sheet_name_list = ''
  var workbook = ''
  it('read file', function() {
    workbook = XLSX.readFile(`./test/selenium/config/tempDownload/Lexplore Data Export Vivify 20_21 ${today()}.xlsx`)
    sheet_name_list = workbook.SheetNames
  })

  it('check if all students are there - first name check', function() {
    var counter = ''
    XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).forEach(element => {
      if(element['First name'] == 'Published' || element['First name'] == 'Lara' || element['First name'] == 'Brian' || element['First name'] == 'Student') {
        counter++
      } 
    });
    expect(counter).to.eql(6)
  })

  it('check student Lara Richardson', function() {
    XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).forEach(element => {
      if(element['Student ID'] == 264) {
        console.log(element)
        expect(element['First name']).to.eql('Lara')
        expect(element['Last name']).to.eql('Richardson')
        expect(element['Date of Birth']).to.eql(40544)
        expect(element['Organization']).to.eql('Vivify')
        expect(element['School']).to.eql('Crossroads Elementary')
      } 
    });
  })

  it('check published student', function() {
    XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).forEach(element => {
      if(element['Student ID'] == 165) {
        expect(element['First name']).to.eql('Student')
        expect(element['Last name']).to.eql('1')
        expect(element['Date of Birth']).to.eql(34304)
        expect(element['Organization']).to.eql('Vivify')
        expect(element['School']).to.eql('Crossroads Elementary')
        expect(element).to.include.all.keys('Reading speed silent', 'Reading speed aloud', 'Reading speed average', 'GLE', 'Standard score', 'Reading age')
      } 
    });
  })

  it('check if all students are there - last name check', function() {
    var counter = ''
    XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).forEach(element => {
      if(element['Last name'] == 'Student' || element['Last name'] == 'Raynolds' || element['Last name'] == 'Richardson' || element['Last name'] == '1') {
        counter++
      } 
    });
    expect(counter).to.eql(7)
  })

  it('check if all properties are there', function() {
    XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).forEach(element => {
      console.log(element)
      expect(element).to.include.all.keys('First name', 'Last name', 'Student ID', 'Date of Birth', 'Organization', 'Grade')
    });
  })
});
 