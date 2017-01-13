let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
  directConnect: true,

  capabilities: {
    'browserName': 'chrome'
  },

  // optional: add seleniumServerJar with proper version number
  // seleniumServerJar: './node_modules/gulp-protractor/node_modules/protractor/selenium/selenium-server-standalone-2.53.1.jar',
  
  specs: ['test/e2e/dist/**/*.js'],

  plugins: [{
    package: 'aurelia-protractor-plugin'
  }],

  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      spec: {
        displayStacktrace: true
      }
    }));
  },

  jasmineNodeOpts: {
    showColors: true,
    print: function() {},
    defaultTimeoutInterval: 30000
  }
};
