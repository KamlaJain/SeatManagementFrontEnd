import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportManagerComponent } from './report-manager.component';
import { SeatsReportComponent } from './seats-report/seats-report.component';
import { CabinsReportComponent } from './cabins-report/cabins-report.component';

const routes: Routes = [
  {
    path: '',
    component: ReportManagerComponent
  },
  {
    path:'seats-report',
    component: SeatsReportComponent
  },
  {
    path:'cabins-report',
    component: CabinsReportComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportManagerRoutingModule { }
