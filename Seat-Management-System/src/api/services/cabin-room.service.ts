// /* tslint:disable */
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { BaseService as __BaseService } from '../base-service';
// import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
// import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
// import { Observable as __Observable } from 'rxjs';
// import { map as __map, filter as __filter } from 'rxjs/operators';

// import { CabinRoomDTO } from '../models/cabin-room-dto';
// @Injectable({
//   providedIn: 'root',
// })
// class CabinRoomService extends __BaseService {
//   static readonly getApiCabinRoomPath = '/api/CabinRoom';
//   static readonly postApiCabinRoomPath = '/api/CabinRoom';
//   static readonly deleteApiCabinRoomCabinIdPath = '/api/CabinRoom/{cabinId}';
//   static readonly patchApiCabinRoomCabinIdPath = '/api/CabinRoom/{cabinId}';
//   static readonly getApiCabinRoomReportsPath = '/api/CabinRoom/Reports';

//   constructor(
//     config: __Configuration,
//     http: HttpClient
//   ) {
//     super(config, http);
//     this.rootUrl="https://localhost:7097"

//   }
//   getApiCabinRoomResponse(): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     let req = new HttpRequest<any>(
//       'GET',
//       this.rootUrl + `/api/CabinRoom`,
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
//   }  getApiCabinRoom(): __Observable<null> {
//     return this.getApiCabinRoomResponse().pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param body undefined
//    */
//   postApiCabinRoomResponse(body?: CabinRoomDTO): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     __body = body;
//     let req = new HttpRequest<any>(
//       'POST',
//       this.rootUrl + `/api/CabinRoom`,
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
//   postApiCabinRoom(body?: CabinRoomDTO): __Observable<null> {
//     return this.postApiCabinRoomResponse(body).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param cabinId undefined
//    */
//   deleteApiCabinRoomCabinIdResponse(cabinId: number): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;

//     let req = new HttpRequest<any>(
//       'DELETE',
//       this.rootUrl + `/api/CabinRoom/${encodeURIComponent(String(cabinId))}`,
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
//    * @param cabinId undefined
//    */
//   deleteApiCabinRoomCabinId(cabinId: number): __Observable<null> {
//     return this.deleteApiCabinRoomCabinIdResponse(cabinId).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param params The `CabinRoomService.PatchApiCabinRoomCabinIdParams` containing the following parameters:
//    *
//    * - `cabinId`:
//    *
//    * - `employeeId`:
//    */
//   patchApiCabinRoomCabinIdResponse(params: CabinRoomService.PatchApiCabinRoomCabinIdParams): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;

//     if (params.employeeId != null) __params = __params.set('employeeId', params.employeeId.toString());
//     let req = new HttpRequest<any>(
//       'PATCH',
//       this.rootUrl + `/api/CabinRoom/${encodeURIComponent(String(params.cabinId))}`,
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
//    * @param params The `CabinRoomService.PatchApiCabinRoomCabinIdParams` containing the following parameters:
//    *
//    * - `cabinId`:
//    *
//    * - `employeeId`:
//    */
//   patchApiCabinRoomCabinId(params: CabinRoomService.PatchApiCabinRoomCabinIdParams): __Observable<null> {
//     return this.patchApiCabinRoomCabinIdResponse(params).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param params The `CabinRoomService.GetApiCabinRoomReportsParams` containing the following parameters:
//    *
//    * - `isUnallocatedReport`:
//    *
//    * - `floorNumber`:
//    *
//    * - `facilityName`:
//    *
//    * - `cityCode`:
//    *
//    * - `buildingCode`:
//    */
//   getApiCabinRoomReportsResponse(params: CabinRoomService.GetApiCabinRoomReportsParams): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     if (params.isUnallocatedReport != null) __params = __params.set('isUnallocatedReport', params.isUnallocatedReport.toString());
//     if (params.floorNumber != null) __params = __params.set('floorNumber', params.floorNumber.toString());
//     if (params.facilityName != null) __params = __params.set('facilityName', params.facilityName.toString());
//     if (params.cityCode != null) __params = __params.set('cityCode', params.cityCode.toString());
//     if (params.buildingCode != null) __params = __params.set('buildingCode', params.buildingCode.toString());
//     let req = new HttpRequest<any>(
//       'GET',
//       this.rootUrl + `/api/CabinRoom/Reports`,
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
//    * @param params The `CabinRoomService.GetApiCabinRoomReportsParams` containing the following parameters:
//    *
//    * - `isUnallocatedReport`:
//    *
//    * - `floorNumber`:
//    *
//    * - `facilityName`:
//    *
//    * - `cityCode`:
//    *
//    * - `buildingCode`:
//    */
//   getApiCabinRoomReports(params: CabinRoomService.GetApiCabinRoomReportsParams): __Observable<null> {
//     return this.getApiCabinRoomReportsResponse(params).pipe(
//       __map(_r => _r.body as null)
//     );
//   }
// }

// module CabinRoomService {

//   /**
//    * Parameters for patchApiCabinRoomCabinId
//    */
//   export interface PatchApiCabinRoomCabinIdParams {
//     cabinId: number;
//     employeeId?: number;
//   }

//   /**
//    * Parameters for getApiCabinRoomReports
//    */
//   export interface GetApiCabinRoomReportsParams {
//     isUnallocatedReport?: boolean;
//     floorNumber?: number;
//     facilityName?: string;
//     cityCode?: string;
//     buildingCode?: string;
//   }
// }

// export { CabinRoomService }
