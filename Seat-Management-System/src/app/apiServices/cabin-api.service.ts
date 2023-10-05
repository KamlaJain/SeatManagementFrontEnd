import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CabinRoomDTO } from '../models/cabin-room-dto';

@Injectable({
  providedIn: 'root'
})
export class CabinApiService {

  private baseUrl = 'https://localhost:7097/api/CabinRoom';

  constructor(private readonly http: HttpClient) {}

  public getApiCabinRooms() {
    return this.http.get(`${this.baseUrl}`);
  }

  public postApiCabinRooms(cabinObject: CabinRoomDTO) {
    return this.http.post(`${this.baseUrl}`, cabinObject);
  }

  public patchApiCabinRooms(CabinId: number, employeeId: number | null = null) {
    //https://localhost:7097/api/CabinRoom/0?employeeId=0
    //const url = `${this.baseUrl}/${CabinId}?employeeId=${employeeId}`;

    let url = `${this.baseUrl}/${CabinId}`;

    if (employeeId !== null) {
      url += `?employeeId=${employeeId}`;
    }

    return this.http.patch(url, {});
  }

  public getApiCabinsReport(
    isUnallocatedReport: boolean,
    cityCode: string | '',
    buildingCode: string | '',
    facilityName: string | '',
    floorNumber: number | ''
  ) {
    const url = `${this.baseUrl}/Reports`;
    let queryParams: string[] = [];
    //https://localhost:7097/api/CabinRoom/Reports?isUnallocatedReport=true&cityCode=1&buildingCode=1&facilityName=1&floorNumber=1
    
    if (isUnallocatedReport !== undefined) {
      queryParams.push(`isUnallocatedReport= ${isUnallocatedReport}`);
    }
    if (cityCode) {
      queryParams.push(`cityCode=${cityCode}`);
    }
    if (buildingCode) {
      queryParams.push(`buildingCode=${buildingCode}`);
    }
    if (facilityName) {
      queryParams.push(`facilityName=${facilityName}`);
    }
    if (floorNumber) {
      queryParams.push(`floorNumber=${floorNumber}`);
    }

    // let queryString: string;
    // if (queryParams.length > 0) {
    //   queryString = queryParams.join('&');
    // } 
    const queryString = queryParams.length > 0 ? queryParams.join('&') : '';
    const fullUrl = queryString ? `${url}?${queryString}` : url;

    console.log(fullUrl);
    return this.http.get(fullUrl);
  }
}
