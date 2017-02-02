import {inject} from 'aurelia-framework';
import {EmployeeDto, WebApi} from './web-api';

@inject(WebApi)
export class Employees {
  api: WebApi;
  
  public heading = 'alle';
  public employees: EmployeeDto[];

  constructor(api: WebApi) {
    this.api = api;
  }

  public activate() {
    return this.api.getAll()
      .then(es => this.employees = es)
      .catch(reason => console.error("cannot get maps"));
  }
}