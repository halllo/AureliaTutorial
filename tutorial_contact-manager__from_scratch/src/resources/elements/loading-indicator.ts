import * as nprogress from 'nprogress';
import {bindable, noView} from 'aurelia-framework';

@noView(['nprogress/nprogress.css'])
export class LoadingIndicator {
  @bindable loading = false;

  constructor() {
    console.log("LoadingIndicator constructor");
  }
  
  loadingChanged(newValue){
    if (newValue) {
      nprogress.start();
    } else {
      nprogress.done();
    }
  }
}