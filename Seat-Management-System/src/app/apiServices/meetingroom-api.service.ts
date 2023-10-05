import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MeetingRoomDTO } from '../models/meeting-room-dto';

@Injectable({
  providedIn: 'root'
})
export class MeetingroomApiService {

  private baseUrl = 'https://localhost:7097/api/MeetingRoom';

  constructor(private readonly http: HttpClient) {}

  public getApiMeetingRoom() {
    return this.http.get(`${this.baseUrl}`);
  }

  public postApiMeetingRoom(meetingRoomObject: MeetingRoomDTO){
    return this.http.post(`${this.baseUrl}`,meetingRoomObject);
  }}
