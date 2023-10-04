import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinsReportComponent } from './cabins-report.component';

describe('CabinsReportComponent', () => {
  let component: CabinsReportComponent;
  let fixture: ComponentFixture<CabinsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CabinsReportComponent]
    });
    fixture = TestBed.createComponent(CabinsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
