import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityAllocationComponent } from './amenity-allocation.component';

describe('AmenityAllocationComponent', () => {
  let component: AmenityAllocationComponent;
  let fixture: ComponentFixture<AmenityAllocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmenityAllocationComponent]
    });
    fixture = TestBed.createComponent(AmenityAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
