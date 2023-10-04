import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnboardFacilityComponent } from './onboard-facility/onboard-facility.component';
import { CityComponent } from './onboard-facility/city/city.component';
import { MeetingroomComponent } from './meetingroom/meetingroom.component';
import { CabinComponent } from './cabin/cabin.component';
import { SeatComponent } from './seat/seat.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './employee/department/department.component';
import { ItemOnboarderComponent } from './item-onboarder.component';
import { BuildingComponent } from './onboard-facility/building/building.component';

const routes: Routes = [
  {
    path: '',
    component: ItemOnboarderComponent
  },
  {
    path:'facility',
    component: OnboardFacilityComponent
  },
  {
    path:'facility/city',
    component: CityComponent
  },
  {
    path:'facility/building',
    component: BuildingComponent
  },
  {
    path:'meetingroom',
    component: MeetingroomComponent
  },
  {
    path:'cabin',
    component: CabinComponent
  },
  {
    path:'seat',
    component: SeatComponent
  },
  {
    path:'employee',
    component: EmployeeComponent
  },
  {
    path:'employee/department',
    component: DepartmentComponent
  },
  // {
  //   path:'amenity-type',
  //   component: AmenityTypeComponent
  // },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemOnboarderRoutingModule { }
