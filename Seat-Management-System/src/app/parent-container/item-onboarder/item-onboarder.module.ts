import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ItemOnboarderRoutingModule } from './item-onboarder-routing.module';
import { ItemOnboarderComponent } from './item-onboarder.component';
import { OnboardFacilityComponent } from './onboard-facility/onboard-facility.component';
import { MeetingroomComponent } from './meetingroom/meetingroom.component';
import { CityComponent } from './onboard-facility/city/city.component';
import { CabinComponent } from './cabin/cabin.component';
import { SeatComponent } from './seat/seat.component';
import { EmployeeComponent } from './employee/employee.component';
import { DepartmentComponent } from './employee/department/department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuildingComponent } from './onboard-facility/building/building.component';


@NgModule({
  declarations: [
    ItemOnboarderComponent,
    OnboardFacilityComponent,
    MeetingroomComponent,
    CityComponent,
    BuildingComponent,
    CabinComponent,
    SeatComponent,
    EmployeeComponent,
    DepartmentComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ItemOnboarderRoutingModule
  ],
  exports:[
    ItemOnboarderComponent
  ]
})
export class ItemOnboarderModule { }
