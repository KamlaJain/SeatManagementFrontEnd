import { TestBed } from '@angular/core/testing';

import { FacilityApiService } from './facility-api.service';

describe('FacilityApiService', () => {
  let service: FacilityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacilityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
