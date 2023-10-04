import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report-manager',
  templateUrl: './report-manager.component.html',
  styleUrls: ['./report-manager.component.scss']
})
export class ReportManagerComponent {

  constructor(private readonly routes: Router) {}

  public goToSeatsReport() {
    this.routes.navigate(['seats-report']);
  }

  public goToCabinsReport() {
    this.routes.navigate(['cabins-report']);
  }

}
