// /* tslint:disable */
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { BaseService as __BaseService } from '../base-service';
// import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
// import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
// import { Observable as __Observable } from 'rxjs';
// import { map as __map, filter as __filter } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root',
// })
// class AmenityService extends __BaseService {
//   static readonly getApiAmenityPath = '/api/Amenity';
//   static readonly postApiAmenityPath = '/api/Amenity';
//   static readonly patchApiAmenityPath = '/api/Amenity';
//   static readonly deleteApiAmenityRoomAmenityIdPath = '/api/Amenity/{roomAmenityId}';

//   constructor(
//     config: __Configuration,
//     http: HttpClient
//   ) {
//     super(config, http);
//     this.rootUrl="https://localhost:7097"
//   }
//   getApiAmenityResponse(): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     let req = new HttpRequest<any>(
//       'GET',
//       this.rootUrl + `/api/Amenity`,
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
//   }  getApiAmenity(): __Observable<null> {
//     return this.getApiAmenityResponse().pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param params The `AmenityService.PostApiAmenityParams` containing the following parameters:
//    *
//    * - `facililtyId`:
//    *
//    * - `amenityId`:
//    */
//   postApiAmenityResponse(params: AmenityService.PostApiAmenityParams): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     if (params.facililtyId != null) __params = __params.set('facililtyId', params.facililtyId.toString());
//     if (params.amenityId != null) __params = __params.set('amenityId', params.amenityId.toString());
//     let req = new HttpRequest<any>(
//       'POST',
//       this.rootUrl + `/api/Amenity`,
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
//    * @param params The `AmenityService.PostApiAmenityParams` containing the following parameters:
//    *
//    * - `facililtyId`:
//    *
//    * - `amenityId`:
//    */
//   postApiAmenity(params: AmenityService.PostApiAmenityParams): __Observable<null> {
//     return this.postApiAmenityResponse(params).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param params The `AmenityService.PatchApiAmenityParams` containing the following parameters:
//    *
//    * - `roomAmenityId`:
//    *
//    * - `meetingRoomId`:
//    */
//   patchApiAmenityResponse(params: AmenityService.PatchApiAmenityParams): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     if (params.roomAmenityId != null) __params = __params.set('roomAmenityId', params.roomAmenityId.toString());
//     if (params.meetingRoomId != null) __params = __params.set('meetingRoomId', params.meetingRoomId.toString());
//     let req = new HttpRequest<any>(
//       'PATCH',
//       this.rootUrl + `/api/Amenity`,
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
//    * @param params The `AmenityService.PatchApiAmenityParams` containing the following parameters:
//    *
//    * - `roomAmenityId`:
//    *
//    * - `meetingRoomId`:
//    */
//   patchApiAmenity(params: AmenityService.PatchApiAmenityParams): __Observable<null> {
//     return this.patchApiAmenityResponse(params).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param roomAmenityId undefined
//    */
//   deleteApiAmenityRoomAmenityIdResponse(roomAmenityId: number): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;

//     let req = new HttpRequest<any>(
//       'DELETE',
//       this.rootUrl + `/api/Amenity/${encodeURIComponent(String(roomAmenityId))}`,
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
//    * @param roomAmenityId undefined
//    */
//   deleteApiAmenityRoomAmenityId(roomAmenityId: number): __Observable<null> {
//     return this.deleteApiAmenityRoomAmenityIdResponse(roomAmenityId).pipe(
//       __map(_r => _r.body as null)
//     );
//   }
// }

// module AmenityService {

//   /**
//    * Parameters for postApiAmenity
//    */
//   export interface PostApiAmenityParams {
//     facililtyId?: number;
//     amenityId?: number;
//   }

//   /**
//    * Parameters for patchApiAmenity
//    */
//   export interface PatchApiAmenityParams {
//     roomAmenityId?: number;
//     meetingRoomId?: number;
//   }
// }

// export { AmenityService }
