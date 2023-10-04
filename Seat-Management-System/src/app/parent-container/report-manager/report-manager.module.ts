import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportManagerRoutingModule } from './report-manager-routing.module';
import { ReportManagerComponent } from './report-manager.component';
import { SeatsReportComponent } from './seats-report/seats-report.component';
import { CabinsReportComponent } from './cabins-report/cabins-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReportManagerComponent,
    SeatsReportComponent,
    CabinsReportComponent,
  ],
  imports: [
    CommonModule,
    ReportManagerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ReportManagerComponent
  ]
})
export class ReportManagerModule { }
