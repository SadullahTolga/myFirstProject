import { TestBed } from '@angular/core/testing';

import { SystemEmployerGuard } from './system-employer.guard';

describe('SystemEmployerGuard', () => {
  let guard: SystemEmployerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SystemEmployerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
