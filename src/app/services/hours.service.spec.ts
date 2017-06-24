import { TestBed, inject } from '@angular/core/testing';

import { HoursService } from './hours.service';

describe('HoursService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HoursService]
    });
  });

  it('should be created', inject([HoursService], (service: HoursService) => {
    expect(service).toBeTruthy();
  }));
});
