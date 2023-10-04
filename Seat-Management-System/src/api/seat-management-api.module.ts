// /* tslint:disable */
// import { NgModule, ModuleWithProviders } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
// import { SeatManagementApiConfiguration, SeatManagementApiConfigurationInterface } from './seat-management-api-configuration';

// import { AmenityService } from './services/amenity.service';
// import { AmenityTypeService } from './services/amenity-type.service';
// import { BuildingService } from './services/building.service';
// import { CabinRoomService } from './services/cabin-room.service';
// import { CityService } from './services/city.service';
// import { DepartmentService } from './services/department.service';
// import { EmployeeService } from './services/employee.service';
// import { FacilityService } from './services/facility.service';
// import { GeneralSeatService } from './services/general-seat.service';
// import { MeetingRoomService } from './services/meeting-room.service';
// import { UserAuthService } from './services/user-auth.service';

// /**
//  * Provider for all seat-management-api services, plus SeatManagementApiConfiguration
//  */
// @NgModule({
//   imports: [
//     HttpClientModule
//   ],
//   exports: [
//     HttpClientModule
//   ],
//   declarations: [],
//   providers: [
//     SeatManagementApiConfiguration,
//     AmenityService,
//     AmenityTypeService,
//     BuildingService,
//     CabinRoomService,
//     CityService,
//     DepartmentService,
//     EmployeeService,
//     FacilityService,
//     GeneralSeatService,
//     MeetingRoomService,
//     UserAuthService
//   ],
// })
// export class SeatManagementApiModule {
//   static forRoot(customParams: SeatManagementApiConfigurationInterface): ModuleWithProviders<SeatManagementApiModule> {
//     return {
//       ngModule: SeatManagementApiModule,
//       providers: [
//         {
//           provide: SeatManagementApiConfiguration,
//           useValue: {rootUrl: customParams.rootUrl}
//         }
//       ]
//     }
//   }
// }
