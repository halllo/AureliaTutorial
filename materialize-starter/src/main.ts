import 'jquery';
import 'materialize';
import {Aurelia} from 'aurelia-framework';
import environment from './environment';

export async function configure(aurelia: Aurelia) {

  aurelia.use
    .standardConfiguration()
    .feature('resources')
    .plugin('aurelia-materialize-bridge', bridge => bridge.useAll())
    .plugin('aurelia-binding-loader')
    ;

  if (environment.debug) {
    aurelia.use.developmentLogging();
  }

  aurelia.start().then(() => aurelia.setRoot());
}