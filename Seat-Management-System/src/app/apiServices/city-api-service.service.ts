import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CityLookUpDTO } from '../models/city-look-up-dto';

@Injectable({
  providedIn: 'root'
})

export class CityApiServiceService {
  private baseUrl = 'https://localhost:7097/api/City';

  constructor(private readonly http: HttpClient) {}

  public getApiCity() {
    return this.http.get(`${this.baseUrl}`);
  }

  public postApiCity(cityData: CityLookUpDTO){
    return this.http.post(`${this.baseUrl}`,cityData);
  }
}
