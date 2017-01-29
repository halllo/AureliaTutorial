import {Router} from 'aurelia-router';
import {bindable} from 'aurelia-framework';
import * as $ from 'jquery';

export class NavBar {
  
  @bindable 
  public router: Router;

  attached() {
    $(function(){
      (<any>$('.button-collapse')).sideNav();
    });
  }

}