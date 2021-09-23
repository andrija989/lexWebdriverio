 /* eslint-env jquery */
import allureReporter from '@wdio/allure-reporter'
import administratorPage from 'test/selenium/pageObjects/administratorPage.js';

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


  it('load import log page', function() {
    allureReporter.addFeature('Smoke test')
    allureReporter.addSeverity('Normal')
    console.log(`${config.devStage}admin/organizations/${config.cleverOrg}/import-log`)
    console.log('iznad')
    browser.url(`${config.devStage}admin/organizations/${config.cleverOrg}/import-log`)
  });

  it('excel export log open', function() {
    administratorPage.exportLog()
    browser.pause(5000)
  })

  it('import log download', function() {
    const downloadLink = homePage.downloadExcelButton
    downloadLink.click({force:true});
    browser.pause(2000)
    const downloadHref = downloadLink.getAttribute('href');
    const downloadUrl = new URL(downloadHref);
  })

  var sheet_name_list = ''
  var workbook = ''
  it('read file import log', function() {
    workbook = XLSX.readFile(`./test/selenium/config/tempDownload/Lexplore Log Export ${today()}.csv`)
    sheet_name_list = workbook.SheetNames
  })

  it('check if properties are on place', function() {
    XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).forEach(element => {
      expect(element).to.include.all.keys('Id', 'Provider', 'Created', 'Severity', 'MessageCode')
    });
  })

  
  it('check number of reports', function() {
    var counter = ''
    XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]).forEach(element => {
        counter++
    });
    expect(counter).to.be.above(100, 'failed error number');
  })
});
