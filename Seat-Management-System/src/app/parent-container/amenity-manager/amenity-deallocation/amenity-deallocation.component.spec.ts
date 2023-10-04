import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityDeallocationComponent } from './amenity-deallocation.component';

describe('AmenityDeallocationComponent', () => {
  let component: AmenityDeallocationComponent;
  let fixture: ComponentFixture<AmenityDeallocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmenityDeallocationComponent]
    });
    fixture = TestBed.createComponent(AmenityDeallocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
