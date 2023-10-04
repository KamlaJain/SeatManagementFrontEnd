// /* tslint:disable */
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { BaseService as __BaseService } from '../base-service';
// import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
// import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
// import { Observable as __Observable } from 'rxjs';
// import { map as __map, filter as __filter } from 'rxjs/operators';

// import { CityLookUpDTO } from '../models/city-look-up-dto';
// @Injectable({
//   providedIn: 'root',
// })
// class CityService extends __BaseService {
//   static readonly getApiCityPath = '/api/City';
//   static readonly postApiCityPath = '/api/City';

//   constructor(
//     config: __Configuration,
//     http: HttpClient
//   ) {
//     super(config, http);
//     this.rootUrl="https://localhost:7097"

//   }
//   getApiCityResponse(): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     let req = new HttpRequest<any>(
//       'GET',
//       this.rootUrl + `/api/City`,
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
//   }  getApiCity(): __Observable<null> {
//     return this.getApiCityResponse().pipe(
//       __map(_r => _r.body as null)
//     );
//   }

//   /**
//    * @param body undefined
//    */
//   postApiCityResponse(body?: CityLookUpDTO): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     __body = body;
//     let req = new HttpRequest<any>(
//       'POST',
//       this.rootUrl + `/api/City`,
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
//   postApiCity(body?: CityLookUpDTO): __Observable<null> {
//     return this.postApiCityResponse(body).pipe(
//       __map(_r => _r.body as null)
//     );
//   }
// }

// module CityService {
// }

// export { CityService }
