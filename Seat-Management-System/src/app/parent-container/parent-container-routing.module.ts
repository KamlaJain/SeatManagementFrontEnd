import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ParentContainerComponent } from './parent-container.component';
import { OnboardFacilityComponent } from './item-onboarder/onboard-facility/onboard-facility.component';
import { CityComponent } from './item-onboarder/onboard-facility/city/city.component';
import { MeetingroomComponent } from './item-onboarder/meetingroom/meetingroom.component';
import { CabinComponent } from './item-onboarder/cabin/cabin.component';
import { SeatComponent } from './item-onboarder/seat/seat.component';
import { EmployeeComponent } from './item-onboarder/employee/employee.component';
import { DepartmentComponent } from './item-onboarder/employee/department/department.component';

const routes: Routes = [
  {
    path: '',
    component: ParentContainerComponent
  },
  {
    path: 'onboard-items',
    loadChildren:()=>import('./item-onboarder/item-onboarder.module').then(m=>m.ItemOnboarderModule)
  },
  {
    path: 'manage-employees',
    loadChildren:()=>import('./employee-manager/employee-manager.module').then(m=>m.EmployeeManagerModule)
  },
  {
    path: 'manage-amenities',
    loadChildren:()=>import('./amenity-manager/amenity-manager.module').then(m=>m.AmenityManagerModule)
  },
  {
    path: 'reports',
    loadChildren:()=>import('./report-manager/report-manager.module').then(m=>m.ReportManagerModule)
  }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ParentContainerRoutingModule {}
