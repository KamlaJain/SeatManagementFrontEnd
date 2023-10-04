// /* tslint:disable */
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { BaseService as __BaseService } from '../base-service';
// import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
// import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
// import { Observable as __Observable } from 'rxjs';
// import { map as __map, filter as __filter } from 'rxjs/operators';

// import { EmployeeDTO } from '../models/employee-dto';
// @Injectable({
//   providedIn: 'root',
// })
// class EmployeeService extends __BaseService {
//   static readonly getApiEmployeePath = '/api/Employee';
//   static readonly postApiEmployeePath = '/api/Employee';
//   static readonly deleteApiEmployeeEmployeeIdPath = '/api/Employee/{employeeId}';

//   constructor(
//     config: __Configuration,
//     http: HttpClient
//   ) {
//     super(config, http);
//     this.rootUrl="https://localhost:7097"

//   }

//   /**
//    * @param params The `EmployeeService.GetApiEmployeeParams` containing the following parameters:
//    *
//    * - `pageSize`:
//    *
//    * - `pageNumber`:
//    */
//   getApiEmployeeResponse(params: EmployeeService.GetApiEmployeeParams): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     if (params.pageSize != null) __params = __params.set('pageSize', params.pageSize.toString());
//     if (params.pageNumber != null) __params = __params.set('pageNumber', params.pageNumber.toString());
//     let req = new HttpRequest<any>(
//       'GET',
//       this.rootUrl + `/api/Employee`,
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
//    * @param params The `EmployeeService.GetApiEmployeeParams` containing the following parameters:
//    *
//    * - `pageSize`:
//    *
//    * - `pageNumber`:
//    */
//   getApiEmployee(params: EmployeeService.GetApiEmployeeParams): __Observable<null> {
//     return this.getApiEmployeeResponse(params).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param body undefined
//    */
//   postApiEmployeeResponse(body?: EmployeeDTO): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     __body = body;
//     let req = new HttpRequest<any>(
//       'POST',
//       this.rootUrl + `/api/Employee`,
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
//   postApiEmployee(body?: EmployeeDTO): __Observable<null> {
//     return this.postApiEmployeeResponse(body).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param employeeId undefined
//    */
//   deleteApiEmployeeEmployeeIdResponse(employeeId: number): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;

//     let req = new HttpRequest<any>(
//       'DELETE',
//       this.rootUrl + `/api/Employee/${encodeURIComponent(String(employeeId))}`,
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
//    * @param employeeId undefined
//    */
//   deleteApiEmployeeEmployeeId(employeeId: number): __Observable<null> {
//     return this.deleteApiEmployeeEmployeeIdResponse(employeeId).pipe(
//       __map(_r => _r.body as null)
//     );
//   }
// }

// module EmployeeService {

//   /**
//    * Parameters for getApiEmployee
//    */
//   export interface GetApiEmployeeParams {
//     pageSize?: number;
//     pageNumber?: number;
//   }
// }

// export { EmployeeService }
