 import { Injectable } from '@angular/core';
 import {HttpClient} from '@angular/common/http'    // this is use to communicate with the backend 
import { Observable } from 'rxjs';
import { Employee } from '../Models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private apiServerUrl = 'http://localhost:8080/api';     //define the URL of backend

  constructor(private http: HttpClient) {     // we can access backend from the HttpClinet
  }

  public getEmployees():Observable<Employee[]> {
    return this.http.get<Employee[]> ("http://localhost:8080/api/employee");
  }

  public addEmployees(employee:Employee):Observable<Employee> {
    return this.http.post<Employee> (`${this.apiServerUrl}/employee/add`,employee);
  }

  public updateEmployees(employee:Employee):Observable<Employee> {
    return this.http.put<Employee> (`${this.apiServerUrl}/employee/update`,employee);
  }

  public deleteEmployees(employeeId:number):Observable<void> {
    return this.http.delete<void> (`${this.apiServerUrl}/employee/delete/${employeeId}`);
  }


}
