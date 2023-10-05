import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BuildingLookUpDTO } from '../models/building-look-up-dto';

@Injectable({
  providedIn: 'root'
})
export class BuildingApiService {

  private baseUrl = 'https://localhost:7097/api/Building';

  constructor(private readonly http: HttpClient) {}

  public getApiBuilding() {
    return this.http.get(`${this.baseUrl}`);
  }

  public postApiBuilding(buildingObject: BuildingLookUpDTO){
    return this.http.post(`${this.baseUrl}`,buildingObject);
  }
}
