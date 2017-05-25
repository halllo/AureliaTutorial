import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'Router Title';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',    moduleId: 'welcome',    nav: false,   title: 'Welcome' },
    ]);

    this.router = router;
  }
}