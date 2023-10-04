import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralSeatDTO } from 'src/api/models';

@Injectable({
  providedIn: 'root',
})
export class SeatApiService {
  private baseUrl = 'https://localhost:7097/api/GeneralSeat';

  constructor(private readonly http: HttpClient) {}

  public getApiGeneralSeat() {
    return this.http.get(`${this.baseUrl}`);
  }

  public postApiGeneralSeat(seatObject: GeneralSeatDTO) {
    return this.http.post(`${this.baseUrl}`, seatObject);
  }

  public patchApiGeneralSeat(seatId: number, employeeId: number | null = null) {
    //const url = `${this.baseUrl}/${seatId}?employeeId=${employeeId}`;
    let url = `${this.baseUrl}/${seatId}`;

    if (employeeId !== null) {
      url += `?employeeId=${employeeId}`;
    }

    return this.http.patch(url, {});
  }

  public getApiSeatsReport(
    isUnallocatedReport: boolean,
    cityCode: string | '',
    buildingCode: string | '',
    facilityName: string | '',
    floorNumber: number | ''
  ): Observable<any> {
    const url = `${this.baseUrl}/Reports`;
    let queryParams: string[] = [];
    //https://localhost:7097/api/GeneralSeat/Reports?isUnallocatedReport=true&cityCode=TVM&buildingCode=GAN&facilityName=Carestack&floorNumber=10
    
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
