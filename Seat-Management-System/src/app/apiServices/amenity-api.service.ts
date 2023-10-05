import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RoomAmenityDTO } from 'src/app/models/room-amenity-dto';

@Injectable({
  providedIn: 'root',
})
export class AmenityApiService {
  private baseUrl = 'https://localhost:7097/api/Amenity';
  constructor(private readonly http: HttpClient) {}

  public getAmenities() {
    return this.http.get(`${this.baseUrl}`);
  }

  public postAmenityToFacility(roomAmenityObject: RoomAmenityDTO) {
    return this.http.post(`${this.baseUrl}`, roomAmenityObject);
  }

  //https://localhost:7097/api/Amenity?roomAmenityId=0&meetingRoomId=0
  public patchAmenityToRoom(
    roomAmenityId: number,
    meetingRoomId: number | null = null
  ) {
    let url = `${this.baseUrl}?roomAmenityId=${roomAmenityId}`;

    if (meetingRoomId !== null) {
      url += `&meetingRoomId=${meetingRoomId}`;
    }

    return this.http.patch(url, {});
  }
}
