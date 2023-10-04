import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeatsReportComponent } from './seats-report.component';

describe('SeatsReportComponent', () => {
  let component: SeatsReportComponent;
  let fixture: ComponentFixture<SeatsReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeatsReportComponent]
    });
    fixture = TestBed.createComponent(SeatsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
