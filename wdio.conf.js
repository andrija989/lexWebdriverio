var baseUrl;
var path = '/'
var path = require('path')
var fs = require('fs')
if (process.env.SERVER === 'prod') {
  baseUrl = 'https://test.lexplore.com/';
} else {
  baseUrl = 'https://dev.lexplore.com/';
}

function rmdir(dir) {
  var list = fs.readdirSync(dir);
  for(var i = 0; i < list.length; i++) {
    var filename = path.join(dir, list[i]);
    var stat = fs.statSync(filename);

    if(filename == "." || filename == "..") {
      // pass these files
    } else if(stat.isDirectory()) {
      // rmdir recursively
      rmdir(filename);
    } else {
      // rm fiilename
      fs.unlinkSync(filename);
    }
  }
  fs.rmdirSync(dir);
}

var timeout = process.env.DEBUG ? 99999999 : 30000;

exports.config = {
  suites: {
    permissions: [
      'test/selenium/permissionsTest/systemAdmin.js',
      'test/selenium/permissionsTest/examiner.js',
      'test/selenium/permissionsTest/teacher.js',
      'test/selenium/permissionsTest/principal.js',
      'test/selenium/permissionsTest/externalExaminer.js',
      'test/selenium/permissionsTest/orgOverview.js',
      'test/selenium/permissionsTest/userAdmin.js',
    ],
    loadTest: [
      'test/selenium/loadTest/loadTest1.js',
      'test/selenium/loadTest/loadTest2.js',
      'test/selenium/loadTest/loadTest3.js',
      'test/selenium/loadTest/loadTest4.js',
      'test/selenium/loadTest/loadTest5.js',
      'test/selenium/loadTest/loadTest6.js',
      'test/selenium/loadTest/loadTest7.js',
      'test/selenium/loadTest/loadTest8.js',
      'test/selenium/loadTest/loadTest9.js',
      'test/selenium/loadTest/loadTest10.js',
    ],

    otherFeature: [
      // ...
    ],
  },
  // ====================
  // Runner Configuration
  // ====================
  //
  // WebdriverIO allows it to run your tests in arbitrary locations (e.g. locally or
  // on a remote machine).
  runner: 'local',
  port: 9515,
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: ['./test/selenium/smokeTest/*.js'],
  // Patterns to exclude.
  exclude: ['./test/selenium/pageObjects/*.js'],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's

  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  capabilities: [
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // Level of logging verbosity: trace | debug | info | warn | error
  logLevel: 'info',
//
// Set specific log levels per logger
// use 'silent' level to disable logger
logLevels: {
    webdriver: 'info',
    devtools: 'silent'
},
  //
  // Warns when a deprecated command is used
  deprecationWarnings: true,
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Set a base URL in order to shorten url command calls. If your `url` parameter starts
  // with `/`, the base url gets prepended, not including the path portion of your baseUrl.
  // If your `url` parameter starts without a scheme or `/` (like `some/path`), the base url
  // gets prepended directly.
  baseUrl: baseUrl,
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 12000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['selenium-standalone','devtools'],
  seleniumArgs: {
    javaArgs: [
      '-Dwebdriver.edge.driver=C:\\Users\\andri\\Desktop\\msedgedriver.exe'
    ]
  },
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: https://webdriver.io/docs/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'mocha',
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: https://webdriver.io/docs/dot-reporter.html
  reporters: ['spec',['allure', {
    outputDir: 'allure-results',
    disableWebdriverStepsReporting: true,
    disableWebdriverScreenshotsReporting: true,
}]],
  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    timeout: timeout,
    compilers: ['js:@babel/register'],
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  /**
   * Gets executed once before all workers get launched.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   */
  onPrepare: function (config, capabilities) {
    // make sure download directory exists
    if (!fs.existsSync(downloadDir)){
        // if it doesn't exist, create it
        fs.mkdirSync(downloadDir);
    }
  },
  /**
   * Gets executed just before initialising the webdriver session and test framework. It allows you
   * to manipulate configurations depending on the capability or spec.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  // beforeSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed before test execution begins. At this point you can access to all global
   * variables like `browser`. It is the perfect place to define custom commands.
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that are to be run
   */
  before: function(capabilities, specs) {
    require('@babel/register');
    expect = require('chai').expect;
    should = require('chai').should();
    urlOrigin = baseUrl
  },
  /**
   * Runs before a WebdriverIO command gets executed.
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   */
  // beforeCommand: function (commandName, args) {
  // },

  /**
   * Hook that gets executed before the suite starts
   * @param {Object} suite suite details
   */
  beforeSuite: function (suite) {
    var executor = {
      "name": "Andrija QA",
      "type": "test env",
      "url": baseUrl,
      "buildOrder": Number(Date.now()),
      "buildName": baseUrl,
      "buildUrl": baseUrl,
      "reportUrl": baseUrl,
      "reportName": "Dev lexplore report"
    }

    var executorJson = JSON.stringify(executor)

    var fs = require('fs');
    fs.writeFile("./allure-results/executor.json", executorJson, function(err, result) {
    if (err) throw err;
      console.log('The file with examiner has been saved!');
    });
  },
  /**
   * Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // beforeTest: function (test) {
  // },
  /**
   * Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
   * beforeEach in Mocha)
   */
  // beforeHook: function () {
  // },
  /**
   * Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
   * afterEach in Mocha)
   */
  // afterHook: function () {
  // },
  /**
   * Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
   * @param {Object} test test details
   */
  // afterTest: function(test) {
  //   if (test.error !== undefined) {
  //     browser.takeScreenshot();
  //   }
  // },
  /**
  -   * Hook that gets executed after the suite has ended
  -   * @param {Object} suite suite details
  -   */
  // afterSuite: function (suite) {
  //   browser.execute(function (key) {
  //       return this.localStorage.clear()
  //       })
  // },

  /**
   * Runs after a WebdriverIO command gets executed
   * @param {String} commandName hook command name
   * @param {Array} args arguments that command would receive
   * @param {Number} result 0 - command success, 1 - command error
   * @param {Object} error error object if any
   */
  // afterCommand: function (commandName, args, result, error) {
  // },
  /**
   * Gets executed after all tests are done. You still have access to all global variables from
   * the test.
   * @param {Number} result 0 - test pass, 1 - test fail
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // after: function (result, capabilities, specs) {
  // },
  /**
   * Gets executed right after terminating the webdriver session.
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {Array.<String>} specs List of spec file paths that ran
   */
  // afterSession: function (config, capabilities, specs) {
  // },
  /**
   * Gets executed after all workers got shut down and the process is about to exit.
   * @param {Object} exitCode 0 - success, 1 - fail
   * @param {Object} config wdio configuration object
   * @param {Array.<Object>} capabilities list of capabilities details
   * @param {<Object>} results object containing test results
   */
  onComplete: function() {
    rmdir(downloadDir)
  }
  /**
   * Gets executed when a refresh happens.
   * @param {String} oldSessionId session ID of the old session
   * @param {String} newSessionId session ID of the new session
   */
  //onReload: function(oldSessionId, newSessionId) {
  //}
};
