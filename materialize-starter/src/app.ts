import {Router, RouterConfiguration} from 'aurelia-router';
import {WebApi} from './web-api';

export class App {
  api: WebApi;
  router: Router;

  constructor(api: WebApi) { 
    this.api = api;
  }
  
  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Mitarbeiter Verwaltung';
    config.map([
      { route: ['', 'welcome'],   name: 'welcome',    moduleId: 'welcome',    nav: false,   title: 'Welcome' },
      { route: ['employees'],     name: 'employees',  moduleId: 'employees',  nav: true,    title: 'alle' },
      { route: ['employee/:id'],  name: 'employee',   moduleId: 'employee',   nav: false,   title: '' },
    ]);

    this.router = router;
  }
}