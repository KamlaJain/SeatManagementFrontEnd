import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmployeeDTO } from '../models/employee-dto';

@Injectable({
  providedIn: 'root',
})
export class EmployeeApiService {
  private baseUrl = 'https://localhost:7097/api/Employee';
  constructor(private readonly http: HttpClient) {}

  public getApiEmployee() {
    return this.http.get(`${this.baseUrl}`);
  }

  public postApiEmployee(employeeObj: EmployeeDTO) {
    return this.http.post(`${this.baseUrl}`, employeeObj);
  }
}
