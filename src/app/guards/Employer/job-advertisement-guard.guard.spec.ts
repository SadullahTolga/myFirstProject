import { TestBed } from '@angular/core/testing';

import { JobAdvertisementGuardGuard } from './job-advertisement-guard.guard';

describe('JobAdvertisementGuardGuard', () => {
  let guard: JobAdvertisementGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(JobAdvertisementGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
