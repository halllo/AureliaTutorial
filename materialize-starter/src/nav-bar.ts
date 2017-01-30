import {Router} from 'aurelia-router';
import {bindable} from 'aurelia-framework';

declare var $;

export class NavBar {
  
  @bindable 
  public router: Router;

  attached() {
    $(function(){
      (<any>$('.button-collapse')).sideNav();
    });
  }

}