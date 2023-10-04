import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmenityManagerComponent } from './amenity-manager.component';

describe('AmenityManagerComponent', () => {
  let component: AmenityManagerComponent;
  let fixture: ComponentFixture<AmenityManagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AmenityManagerComponent]
    });
    fixture = TestBed.createComponent(AmenityManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
