module.exports = {
  "bundles": {
    "dist/app-build": {
      "includes": [
        "[**/*.js]",
        "**/*.html!text",
        "**/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": true,
        "rev": true
      }
    },
    "dist/vendor": {
      "includes": [
        "aurelia-framework",
        "aurelia-bootstrapper",
        "aurelia-fetch-client",
        "aurelia-router",
        "aurelia-templating-binding",
        "aurelia-polyfills",
        "aurelia-templating-resources",
        "aurelia-templating-router",
        "aurelia-loader-default",
        "aurelia-history-browser",
        "aurelia-logging-console",
        "aurelia-pal-browser",
        "text",
        "fetch",
        "jquery",
        "nprogress",
        "nprogress/nprogress.css!text",
        "[aurelia-materialize-bridge]",
        "[aurelia-materialize-bridge/**/*.js]",
        "aurelia-materialize-bridge/**/*.css!text",
        "aurelia-materialize-bridge/**/*.html!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": true
      }
    },
    "dist/materialize": {
      "includes": [
        "materialize",
        "materialize/**/*.css!text"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": true
      }
    }
  }
};
