import {inject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {EmployeeDto, WebApi} from './web-api';

@inject(WebApi, Router)
export class Employee {
  employeeId = '';
  api: WebApi;
  router: Router;
  
  public employee: EmployeeDto;

  constructor(api: WebApi, router: Router) {
    this.api = api;
    this.router = router;
  }

  public activate(params, route, navigationInstruction) {
    if (params.id) {
      this.employeeId = params.id;
      return this.load().then(() => {
        route.navModel.title = this.employee.name;
      });
    }
  }

  load() {
    return this.api.getOne(this.employeeId)
      .then(e => {
        this.employee = e;
      })
      .catch(reason => {
        console.error(`cannot get ${this.employeeId}: ${reason}`);
      });
  }
}