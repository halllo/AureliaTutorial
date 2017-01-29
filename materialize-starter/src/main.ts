import 'jquery';
import {Aurelia} from 'aurelia-framework';

export function configure(aurelia: Aurelia) {

  return aurelia.loader.loadModule('materialize').then(() => {
    
    aurelia.use
      .standardConfiguration()
      .plugin('aurelia-materialize-bridge', bridge => bridge.useAll())
      ;

    aurelia.use.developmentLogging();

    aurelia.start().then(() => aurelia.setRoot());

  });
}