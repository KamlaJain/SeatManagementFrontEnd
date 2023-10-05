import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FacilityDTO } from '../models/facility-dto';

@Injectable({
  providedIn: 'root'
})
export class FacilityApiService {
  private baseUrl = 'https://localhost:7097/api/Facility';

  constructor(private readonly http: HttpClient) {}

  public getApiFacility() {
    return this.http.get(`${this.baseUrl}`);
  }

  public postApiFacility(facilityObject: FacilityDTO){
    return this.http.post(`${this.baseUrl}`,facilityObject);
  }}
