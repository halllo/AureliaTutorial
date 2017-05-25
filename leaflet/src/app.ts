import {Router, RouterConfiguration} from 'aurelia-router';

export class App {
  router: Router;
  
  public configureRouter(config: RouterConfiguration, router: Router) {
    config.title = 'leaflet';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',    moduleId: 'welcome',    nav: false,   title: 'Welcome' },
      { route: ['map'],         name: 'map',        moduleId: 'map',        nav: true,    title: 'Map' },
    ]);

    this.router = router;
  }
}