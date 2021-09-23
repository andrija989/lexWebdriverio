const { join } = require('path');
const { config } = require('../../../wdio.conf.js');

config.capabilities = [
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/login/loginLogout.js',
      'test/selenium/smokeTest/loginWith365.js', 
      'test/selenium/login/loginWith365Tenant.js',   
    ],
  },
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/regression/feide/login.js',
      'test/selenium/regression/feide/invite.js',
      'test/selenium/regression/feide/cleanNorway.js',      
    ],
  },
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/regression/skolfederation/login.js',
      'test/selenium/regression/skolfederation/loginEntityId.js',
      'test/selenium/regression/skolfederation/invite.js',
      'test/selenium/regression/skolfederation/cleanSweden.js',     
    ],
  },
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/login/urlQueries/customerId.js',
      'test/selenium/login/urlQueries/customerIdPlusHome.js',
      'test/selenium/login/urlQueries/customerIdPlusHomePlusHint.js',
      'test/selenium/login/urlQueries/homeRelmPlusRegionPlusHint.js',
      'test/selenium/login/urlQueries/homeTrue.js',
    ],
  },
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/login/urlQueries/navigateFromClient.js',
      'test/selenium/login/urlQueries/navigateFromClientWithHint.js',
      'test/selenium/login/urlQueries/onlyProvider.js',
      'test/selenium/login/urlQueries/providerOverrule.js',
      'test/selenium/login/urlQueries/providerPlusHint.js',
      'test/selenium/login/urlQueries/providerPlusHintPlusHome.js',     
    ],
  },
  {
    maxInstances: 1,
    browserName: 'chrome',
    specs: [
      'test/selenium/login/urlQueries/urlSufix.js',
      'test/selenium/login/urlQueries/urlSufixHomeFalsePlusHint.js',
      'test/selenium/login/urlQueries/urlSufixPlusHint.js',
      'test/selenium/login/urlQueries/urlSufixPlusHome.js',
      'test/selenium/login/urlQueries/urlSufixPlusHomePlusHint.js',
      'test/selenium/login/urlQueries/urlSufixUnknown.js',
      'test/selenium/login/urlQueries/wrongCustomerId.js',      
    ],
  },
],

config.afterSession = function (suite) {
  browser.setTimeout({ 'implicit': 5000 })
},

config.onPrepare = function (suite) {
},

config.onComplete = function() {
}

exports.config = config;