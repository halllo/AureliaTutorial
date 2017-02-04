import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import environment from './environment';

export interface EmployeeDto {
  id: string,
  firstname: string,
  lastname: string,
}

@inject(HttpClient)
export class WebApi {

  isRequesting = false;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  sample = [
    { id: '1', firstname: 'Manuel', lastname: 'Naujoks'},
    { id: '2', firstname: 'Tester', lastname: '123'},
    { id: '3', firstname: 'King', lastname: 'Kong'},
  ];

  public getAll(): Promise<EmployeeDto[]> {
    this.isRequesting = true;
    return new Promise<EmployeeDto[]>((resolve, reject) => {

      setTimeout(() => {
        this.isRequesting = false;
        resolve(<EmployeeDto[]>this.sample);
      }, 1000);
      
    });
  }

  public getOne(id: string): Promise<EmployeeDto> {
    this.isRequesting = true;
    return new Promise<EmployeeDto>((resolve, reject) => {

      setTimeout(() => {
        this.isRequesting = false;
        var employee = this.sample.find(i => i.id == id);
        resolve(<EmployeeDto>employee);
      }, 1000);
      
    });
  }

  public delete(id: string): Promise<string> {
    this.isRequesting = true;
    return new Promise<string>((resolve, reject) => {

      setTimeout(() => {
        this.isRequesting = false;
        var employee = this.sample.find(i => i.id == id);
        var index = this.sample.indexOf(employee, 0);
          if (index > -1) {
            this.sample.splice(index, 1);
          }
        resolve(id);
      }, 1000);
      
    });
  }

  public save(employee: EmployeeDto): Promise<string> {
    this.isRequesting = true;
    return new Promise<string>((resolve, reject) => {

      setTimeout(() => {
        this.isRequesting = false;
        if (!employee.id) {
          employee.id = this.sample.map(e => e.id).reduce((previous, current) => previous + current);
          this.sample.push(employee);
        } else {
          var oldEmployee = this.sample.find(i => i.id == employee.id);
          var index = this.sample.indexOf(oldEmployee, 0);
          if (index > -1) {
            this.sample[index] = employee;
          }
        }
        resolve(employee.id);
      }, 1000);
      
    });
  }
}