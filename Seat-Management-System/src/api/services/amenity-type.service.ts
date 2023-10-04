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
// class AmenityTypeService extends __BaseService {
//   static readonly getApiAmenityTypePath = '/api/AmenityType';
//   static readonly postApiAmenityTypePath = '/api/AmenityType';

//   constructor(
//     config: __Configuration,
//     http: HttpClient
//   ) {
//     super(config, http);
//     this.rootUrl="https://localhost:7097"

//   }
//   getApiAmenityTypeResponse(): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     let req = new HttpRequest<any>(
//       'GET',
//       this.rootUrl + `/api/AmenityType`,
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
//   }  getApiAmenityType(): __Observable<null> {
//     return this.getApiAmenityTypeResponse().pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param amenityName undefined
//    */
//   postApiAmenityTypeResponse(amenityName?: string): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     if (amenityName != null) __params = __params.set('amenityName', amenityName.toString());
//     let req = new HttpRequest<any>(
//       'POST',
//       this.rootUrl + `/api/AmenityType`,
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
//    * @param amenityName undefined
//    */
//   postApiAmenityType(amenityName?: string): __Observable<null> {
//     return this.postApiAmenityTypeResponse(amenityName).pipe(
//       __map(_r => _r.body as null)
//     );
//   }
// }

// module AmenityTypeService {
// }

// export { AmenityTypeService }
