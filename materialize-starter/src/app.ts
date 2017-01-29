import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Router Title';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',    moduleId: 'welcome',    nav: false,   title: 'Welcome' },
      { route: ['users'],       name: 'users',      moduleId: 'users',      nav: true,    title: 'Mitarbeiter' },
    ]);

    this.router = router;
  }
}