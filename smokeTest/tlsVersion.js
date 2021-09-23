 /* eslint-env jquery */

import allureReporter from '@wdio/allure-reporter'

const assert = require('assert');
const config = require('../config/mainConfig.js');
const tlsPage = require('../pageObjects/tlsPage.js')

describe('teacher permisions ->', function() {

  const stages = [
    'https://dev.lexplore.com',
    'https://orgdev.lexplore.com',
    'https://stsdev.lexplore.com',
    'https://sysdev.lexplore.com',
    'https://web-msteams-dev.lexplore.com',
    'https://web-fluency-dev.lexplore.com',
    'https://portal.lexplore.com/',
    'https://orgprod.lexplore.com',
    'https://stsprod.lexplore.com',
    'https://sysprod.lexplore.com',
    'https://web-msteams-prod.lexplore.com',
    'https://web-fluency-prod.lexplore.com',
    'https://test.lexplore.com',
    'https://orgtest.lexplore.com',
    'https://ststest.lexplore.com',
    'https://systest.lexplore.com',
    'https://web-msteams-test.lexplore.com',
    'https://web-fluency-test.lexplore.com',
    'https://portal-us.lexplore.com',
    'https://orgprodus.lexplore.com',
    'https://stsprodus.lexplore.com',
    'https://sysprodus.lexplore.com',
    'https://web-msteams-produs.lexplore.com',
    'https://web-fluency-produs.lexplore.com',
    'https://portal.lexplore-analytics.co.uk/'    
  ];

  it('open tls checker', function() {
    browser.url(tlsPage.tlsHome)
    browser.waitUntil(
      () => browser.getUrl() === tlsPage.tlsHome,
        {
            timeout: 15000,
            timeoutMsg: 'Url has not changed to tls home'
        }
      );
  })

  stages.forEach(stage => {
    it(`insert domain name - ${stage}`, function() {
      tlsPage.domainName.setValue(stage)
      tlsPage.submit.click()
    })
  
    let tlsValue1Point2 = ''
    let tlsValue1Point1 = ''
    let tlsValue1Point0 = ''
    it(`check tls versions - ${stage}`, function() {
      tlsPage.tls12.waitForDisplayed(16000)
      tlsValue1Point2 = tlsPage.tls12
      tlsValue1Point1 = tlsPage.tls11
      tlsValue1Point0 = tlsPage.tls10
    })
  
    it(`expect TLS 1.2 to be enabled for ${stage}`, function() {
      expect(tlsValue1Point2.getText()).to.eql('enabled')
    })
  
    it(`expect TLS 1.1 to be disabled for ${stage}`, function() {
      expect(tlsValue1Point1.getText()).to.eql('disabled')
    })
  
    it(`expect TLS 1.0 to be disabled for ${stage}`, function() {
      expect(tlsValue1Point0.getText()).to.eql('disabled')
    })

    it('run new test', function() {
      tlsPage.newTest()
    })
  });
});
 