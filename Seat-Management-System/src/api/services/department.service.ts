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
// class DepartmentService extends __BaseService {
//   static readonly getApiDepartmentPath = '/api/Department';
//   static readonly postApiDepartmentPath = '/api/Department';
//   static readonly deleteApiDepartmentDeptIdPath = '/api/Department/{deptId}';

//   constructor(
//     config: __Configuration,
//     http: HttpClient
//   ) {
//     super(config, http);
//     this.rootUrl="https://localhost:7097"

//   }
//   getApiDepartmentResponse(): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     let req = new HttpRequest<any>(
//       'GET',
//       this.rootUrl + `/api/Department`,
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
//   }  getApiDepartment(): __Observable<null> {
//     return this.getApiDepartmentResponse().pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param departmentName undefined
//    */
//   postApiDepartmentResponse(departmentName?: string): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     if (departmentName != null) __params = __params.set('departmentName', departmentName.toString());
//     let req = new HttpRequest<any>(
//       'POST',
//       this.rootUrl + `/api/Department`,
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
//    * @param departmentName undefined
//    */
//   postApiDepartment(departmentName?: string): __Observable<null> {
//     return this.postApiDepartmentResponse(departmentName).pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param deptId undefined
//    */
//   deleteApiDepartmentDeptIdResponse(deptId: number): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;

//     let req = new HttpRequest<any>(
//       'DELETE',
//       this.rootUrl + `/api/Department/${encodeURIComponent(String(deptId))}`,
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
//    * @param deptId undefined
//    */
//   deleteApiDepartmentDeptId(deptId: number): __Observable<null> {
//     return this.deleteApiDepartmentDeptIdResponse(deptId).pipe(
//       __map(_r => _r.body as null)
//     );
//   }
// }

// module DepartmentService {
// }

// export { DepartmentService }
