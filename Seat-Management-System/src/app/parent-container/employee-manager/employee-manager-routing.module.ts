import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatAllocationComponent } from './seat-allocation/seat-allocation.component';
import { SeatDeallocationComponent } from './seat-deallocation/seat-deallocation.component';
import { CabinDeallocationComponent } from './cabin-deallocation/cabin-deallocation.component';
import { EmployeeManagerComponent } from './employee-manager.component';
import { CabinAllocationComponent } from './cabin-allocation/cabin-allocation.component';

const routes: Routes = [
  {
    path:'',
    component: EmployeeManagerComponent
  },
  {
    path:'allocate-seat',
    component: SeatAllocationComponent
  },
  {
    path:'deallocate-from-seat',
    component: SeatDeallocationComponent
  },
  {
    path:'allocate-cabin',
    component: CabinAllocationComponent
  },
  {
    path:'deallocate-from-cabin',
    component: CabinDeallocationComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagerRoutingModule { }
