import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import environment from './environment';

export interface EmployeeDto {
  id: string,
  name: string,
}

@inject(HttpClient)
export class WebApi {

  isRequesting = false;
  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  sample = [
    { id: '1', name: 'Manuel Naujoks' },
    { id: '2', name: 'Tester Tester' },
    { id: '3', name: 'Bla Bla Bla' },
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
}