import 'jquery';
import 'materialize';
import {Aurelia} from 'aurelia-framework';

export async function configure(aurelia: Aurelia) {

  aurelia.use
    .standardConfiguration()
    .plugin('aurelia-materialize-bridge', bridge => bridge.useAll())
    ;

  aurelia.use.developmentLogging();
  aurelia.start().then(() => aurelia.setRoot());
}