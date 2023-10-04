import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemOnboarderComponent } from './item-onboarder.component';

describe('ItemOnboarderComponent', () => {
  let component: ItemOnboarderComponent;
  let fixture: ComponentFixture<ItemOnboarderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ItemOnboarderComponent]
    });
    fixture = TestBed.createComponent(ItemOnboarderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
