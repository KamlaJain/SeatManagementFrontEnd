import { TestBed } from '@angular/core/testing';

import { CabinApiService } from './cabin-api.service';

describe('CabinApiService', () => {
  let service: CabinApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CabinApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
