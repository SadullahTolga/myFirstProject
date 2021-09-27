import { TestBed } from '@angular/core/testing';

import { EmployerListGuardGuard } from './employer-list-guard.guard';

describe('EmployerListGuardGuard', () => {
  let guard: EmployerListGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployerListGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
