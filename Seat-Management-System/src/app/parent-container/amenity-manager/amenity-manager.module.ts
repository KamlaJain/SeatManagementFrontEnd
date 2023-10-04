import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AmenityManagerComponent } from './amenity-manager.component';
import { AmenityAllocationComponent } from './amenity-allocation/amenity-allocation.component';
import { AmenityDeallocationComponent } from './amenity-deallocation/amenity-deallocation.component';
import { AmenityManagerRoutingModule } from './amenity-manager-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AmenityAllocationComponent,
    AmenityDeallocationComponent,
    AmenityManagerComponent
  ],
  imports: [
    CommonModule,
    AmenityManagerRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  exports: [
    AmenityManagerComponent
  ]
})
export class AmenityManagerModule { }
