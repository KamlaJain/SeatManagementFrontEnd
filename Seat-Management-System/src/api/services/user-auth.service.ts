// /* tslint:disable */
// import { Injectable } from '@angular/core';
// import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
// import { BaseService as __BaseService } from '../base-service';
// import { SeatManagementApiConfiguration as __Configuration } from '../seat-management-api-configuration';
// import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
// import { Observable as __Observable } from 'rxjs';
// import { map as __map, filter as __filter } from 'rxjs/operators';

// import { UserCredentials } from '../models/user-credentials';
// @Injectable({
//   providedIn: 'root',
// })
// class UserAuthService extends __BaseService {
//   static readonly postApiUserAuthPath = '/api/UserAuth';

//   constructor(
//     config: __Configuration,
//     http: HttpClient
//   ) {
//     super(config, http);
//     this.rootUrl="https://localhost:7097"

//   }

//   /**
//    * @param body undefined
//    */
//   postApiUserAuthResponse(body?: UserCredentials): __Observable<__StrictHttpResponse<null>> {
//     let __params = this.newParams();
//     let __headers = new HttpHeaders();
//     let __body: any = null;
//     __body = body;
//     let req = new HttpRequest<any>(
//       'POST',
//       this.rootUrl + `/api/UserAuth`,
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
//   postApiUserAuth(body?: UserCredentials): __Observable<null> {
//     return this.postApiUserAuthResponse(body).pipe(
//       __map(_r => _r.body as null)
//     );
//   }
// }

// module UserAuthService {
// }

// export { UserAuthService }
