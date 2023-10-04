import { TestBed } from '@angular/core/testing';

import { MeetingroomApiService } from './meetingroom-api.service';

describe('MeetingroomApiService', () => {
  let service: MeetingroomApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeetingroomApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
