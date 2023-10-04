import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartmentApiService {

  private baseUrl = 'https://localhost:7097/api/Department';

  constructor(private readonly http: HttpClient) {}

  public getApiDepartment() {
    return this.http.get(`${this.baseUrl}`);
  }

  public postApiDepartment(departmentName: string){
    https://localhost:7097/api/Department?departmentName=Accounts

    return this.http.post(`${this.baseUrl}?departmentName=${departmentName}`,{});
  }}
