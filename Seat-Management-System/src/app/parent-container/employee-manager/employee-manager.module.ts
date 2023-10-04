import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeManagerRoutingModule } from './employee-manager-routing.module';
import { SeatAllocationComponent } from './seat-allocation/seat-allocation.component';
import { SeatDeallocationComponent } from './seat-deallocation/seat-deallocation.component';
import { CabinAllocationComponent } from './cabin-allocation/cabin-allocation.component';
import { CabinDeallocationComponent } from './cabin-deallocation/cabin-deallocation.component';
import { EmployeeManagerComponent } from './employee-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SeatAllocationComponent,
    SeatDeallocationComponent,
    CabinAllocationComponent,
    CabinDeallocationComponent,
    EmployeeManagerComponent
  ],
  imports: [
    CommonModule,
    EmployeeManagerRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],

  exports: [
    EmployeeManagerComponent
  ]
})
export class EmployeeManagerModule { }
