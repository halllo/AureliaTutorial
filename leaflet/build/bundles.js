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
        "bootstrap",
        "bootstrap/css/bootstrap.css!text",
        "fetch",
        "jquery"
      ],
      "options": {
        "inject": true,
        "minify": true,
        "depCache": false,
        "rev": true
      }
    },
    "dist/leaflet": {
      "includes": [
        "leaflet",
        "leaflet/dist/leaflet.css!text"
      ],
      "options": {
        "inject": true,
        "minify": false,
        "depCache": false,
        "rev": true
      }
    }
  }
};
