import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AmenityManagerComponent } from './amenity-manager.component';
import { AmenityAllocationComponent } from './amenity-allocation/amenity-allocation.component';
import { AmenityDeallocationComponent } from './amenity-deallocation/amenity-deallocation.component';

const routes: Routes = [
  {
    path:'',
    component: AmenityManagerComponent
  },
  {
    path:'allocate-amenity',
    component: AmenityAllocationComponent
  },
  {
    path:'deallocate-amenity',
    component: AmenityDeallocationComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AmenityManagerRoutingModule { }
