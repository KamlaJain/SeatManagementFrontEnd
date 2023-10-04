import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ParentContainerRoutingModule } from './parent-container-routing.module';
import { ParentContainerComponent } from './parent-container.component';



@NgModule({
  declarations: [
    ParentContainerComponent,
  ],
  imports: [
    CommonModule,
    ParentContainerRoutingModule,
  ],
  exports:[
    ParentContainerComponent
  ]
})
export class ParentContainerModule { }
