import {inject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';
import {EmployeeDto, WebApi} from './web-api';
import {MdInputUpdateService} from 'aurelia-materialize-bridge';

@inject(WebApi, Router, MdInputUpdateService)
export class Employee {
  employeeId = '';
  api: WebApi;
  router: Router;
  inputUpdate: MdInputUpdateService;
  
  public employee: EmployeeDto;
  public heading: string;

  constructor(api: WebApi, router: Router, inputUpdate: MdInputUpdateService) {
    this.api = api;
    this.router = router;
    this.inputUpdate = inputUpdate;
  }

  public activate(params, route, navigationInstruction) {
    if (params.id) {
      this.employeeId = params.id;
      return this.load().then(() => {
        route.navModel.title = this.heading = `${this.employee.firstname} ${this.employee.lastname}`;
      });
    } else {
      this.employee = <EmployeeDto>{ };
      route.navModel.title = this.heading = 'neuer Mitarbeiter';
    }
  }

  public save() {
    return this.api.save(this.employee)
      .then(e => {
        this.router.navigateBack();
      })
      .catch(reason => {
        console.error(`cannot save ${this.employeeId}: ${reason}`);
      });
  }

  load() {
    return this.api.getOne(this.employeeId)
      .then(e => {
        this.employee = e;
        setTimeout(() => this.inputUpdate.materializeUpdate(), 100);
      })
      .catch(reason => {
        console.error(`cannot get ${this.employeeId}: ${reason}`);
      });
  }
}