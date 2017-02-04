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

  public delete(employee: EmployeeDto) {
    if (confirm(`You are about to delete '${employee.firstname} ${employee.lastname}'. Are you sure you wish to continue?`)) {
      return this.api.delete(employee.id)
        .then(id => {
          var index = this.employees.indexOf(employee, 0);
          if (index > -1) {
            this.employees.splice(index, 1);
          }
        })
        .catch(reason => console.error("cannot delete"));
    }
  }
}