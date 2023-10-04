import { TestBed } from '@angular/core/testing';

import { AmenityApiService } from './amenity-api.service';

describe('AmenityApiService', () => {
  let service: AmenityApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmenityApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
