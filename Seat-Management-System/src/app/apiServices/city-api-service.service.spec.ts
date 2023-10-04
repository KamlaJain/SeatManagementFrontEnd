import { TestBed } from '@angular/core/testing';

import { CityApiServiceService } from './city-api-service.service';

describe('CityApiServiceService', () => {
  let service: CityApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
