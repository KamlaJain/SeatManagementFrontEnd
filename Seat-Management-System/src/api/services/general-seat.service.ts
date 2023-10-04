// /* tslint:disable */
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { BaseService as __BaseService } from '../base-service';
// import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
// import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
// import { Observable as __Observable } from 'rxjs';
// import { map as __map, filter as __filter } from 'rxjs/operators';

// import { GeneralSeatDTO } from '../models/general-seat-dto';
// @Injectable({
//   providedIn: 'root',
// })
// class GeneralSeatService extends __BaseService {
//   static readonly getApiGeneralSeatPath = '/api/GeneralSeat';
//   static readonly postApiGeneralSeatPath = '/api/GeneralSeat';
//   static readonly deleteApiGeneralSeatSeatIdPath = '/api/GeneralSeat/{seatId}';
//   static readonly patchApiGeneralSeatSeatIdPath = '/api/GeneralSeat/{seatId}';
//   static readonly getApiGeneralSeatReportsPath = '/api/GeneralSeat/Reports';

//   constructor(
//     config: __Configuration,
//     http: HttpClient
//   ) {
//     super(config, http);
//     this.rootUrl="https://localhost:7097"

//   }
//   getApiGeneralSeatResponse(): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     let req = new HttpRequest<any>(
//       'GET',
//       this.rootUrl + `/api/GeneralSeat`,
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
//   }  getApiGeneralSeat(): __Observable<null> {
//     return this.getApiGeneralSeatResponse().pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param body undefined
//    */
//   postApiGeneralSeatResponse(body?: GeneralSeatDTO): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     __body = body;
//     let req = new HttpRequest<any>(
//       'POST',
//       this.rootUrl + `/api/GeneralSeat`,
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
//   postApiGeneralSeat(body?: GeneralSeatDTO): __Observable<null> {
//     return this.postApiGeneralSeatResponse(body).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param seatId undefined
//    */
//   deleteApiGeneralSeatSeatIdResponse(seatId: number): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;

//     let req = new HttpRequest<any>(
//       'DELETE',
//       this.rootUrl + `/api/GeneralSeat/${encodeURIComponent(String(seatId))}`,
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
//    * @param seatId undefined
//    */
//   deleteApiGeneralSeatSeatId(seatId: number): __Observable<null> {
//     return this.deleteApiGeneralSeatSeatIdResponse(seatId).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param params The `GeneralSeatService.PatchApiGeneralSeatSeatIdParams` containing the following parameters:
//    *
//    * - `seatId`:
//    *
//    * - `employeeId`:
//    */
//   patchApiGeneralSeatSeatIdResponse(params: GeneralSeatService.PatchApiGeneralSeatSeatIdParams): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;

//     if (params.employeeId != null) __params = __params.set('employeeId', params.employeeId.toString());
//     let req = new HttpRequest<any>(
//       'PATCH',
//       this.rootUrl + `/api/GeneralSeat/${encodeURIComponent(String(params.seatId))}`,
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
//    * @param params The `GeneralSeatService.PatchApiGeneralSeatSeatIdParams` containing the following parameters:
//    *
//    * - `seatId`:
//    *
//    * - `employeeId`:
//    */
//   patchApiGeneralSeatSeatId(params: GeneralSeatService.PatchApiGeneralSeatSeatIdParams): __Observable<null> {
//     return this.patchApiGeneralSeatSeatIdResponse(params).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param params The `GeneralSeatService.GetApiGeneralSeatReportsParams` containing the following parameters:
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
//   getApiGeneralSeatReportsResponse(params: GeneralSeatService.GetApiGeneralSeatReportsParams): __Observable<__StrictHttpResponse<null>> {
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
//       this.rootUrl + `/api/GeneralSeat/Reports`,
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
//    * @param params The `GeneralSeatService.GetApiGeneralSeatReportsParams` containing the following parameters:
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
//   getApiGeneralSeatReports(params: GeneralSeatService.GetApiGeneralSeatReportsParams): __Observable<null> {
//     return this.getApiGeneralSeatReportsResponse(params).pipe(
//       __map(_r => _r.body as null)
//     );
//   }
// }

// module GeneralSeatService {

//   /**
//    * Parameters for patchApiGeneralSeatSeatId
//    */
//   export interface PatchApiGeneralSeatSeatIdParams {
//     seatId: number;
//     employeeId?: number;
//   }

//   /**
//    * Parameters for getApiGeneralSeatReports
//    */
//   export interface GetApiGeneralSeatReportsParams {
//     isUnallocatedReport?: boolean;
//     floorNumber?: number;
//     facilityName?: string;
//     cityCode?: string;
//     buildingCode?: string;
//   }
// }

// export { GeneralSeatService }
