// /* tslint:disable */
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { BaseService as __BaseService } from '../base-service';
// import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
// import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
// import { Observable as __Observable } from 'rxjs';
// import { map as __map, filter as __filter } from 'rxjs/operators';

// import { MeetingRoomDTO } from '../models/meeting-room-dto';
// @Injectable({
//   providedIn: 'root',
// })
// class MeetingRoomService extends __BaseService {
//   static readonly getApiMeetingRoomPath = '/api/MeetingRoom';
//   static readonly postApiMeetingRoomPath = '/api/MeetingRoom';
//   static readonly deleteApiMeetingRoomMeetingRoomIdPath = '/api/MeetingRoom/{meetingRoomId}';

//   constructor(
//     config: __Configuration,
//     http: HttpClient
//   ) {
//     super(config, http);
//     this.rootUrl="https://localhost:7097"

//   }
//   getApiMeetingRoomResponse(): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     let req = new HttpRequest<any>(
//       'GET',
//       this.rootUrl + `/api/MeetingRoom`,
//       __body,
//       {
//         headers: __headers,
//         params: __params,
//         responseType: 'json'
//       });

//     return this.http.request<any>(req).pipe(
//       __filter(_r => _r instanceof HttpResponse),
//       __map((_r) => {
//         return _r as __StrictHttpResponse<null>;
//       })
//     );
//   }  getApiMeetingRoom(): __Observable<null> {
//     return this.getApiMeetingRoomResponse().pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param body undefined
//    */
//   postApiMeetingRoomResponse(body?: MeetingRoomDTO): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     __body = body;
//     let req = new HttpRequest<any>(
//       'POST',
//       this.rootUrl + `/api/MeetingRoom`,
//       __body,
//       {
//         headers: __headers,
//         params: __params,
//         responseType: 'json'
//       });

//     return this.http.request<any>(req).pipe(
//       __filter(_r => _r instanceof HttpResponse),
//       __map((_r) => {
//         return _r as __StrictHttpResponse<null>;
//       })
//     );
//   }
//   /**
//    * @param body undefined
//    */
//   postApiMeetingRoom(body?: MeetingRoomDTO): __Observable<null> {
//     return this.postApiMeetingRoomResponse(body).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param meetingRoomId undefined
//    */
//   deleteApiMeetingRoomMeetingRoomIdResponse(meetingRoomId: number): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;

//     let req = new HttpRequest<any>(
//       'DELETE',
//       this.rootUrl + `/api/MeetingRoom/${encodeURIComponent(String(meetingRoomId))}`,
//       __body,
//       {
//         headers: __headers,
//         params: __params,
//         responseType: 'json'
//       });

//     return this.http.request<any>(req).pipe(
//       __filter(_r => _r instanceof HttpResponse),
//       __map((_r) => {
//         return _r as __StrictHttpResponse<null>;
//       })
//     );
//   }
//   /**
//    * @param meetingRoomId undefined
//    */
//   deleteApiMeetingRoomMeetingRoomId(meetingRoomId: number): __Observable<null> {
//     return this.deleteApiMeetingRoomMeetingRoomIdResponse(meetingRoomId).pipe(
//       __map(_r => _r.body as null)
//     );
//   }
// }

// module MeetingRoomService {
// }

// export { MeetingRoomService }
