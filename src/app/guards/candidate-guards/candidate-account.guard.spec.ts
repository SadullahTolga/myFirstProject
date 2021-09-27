import { TestBed } from '@angular/core/testing';

import { CandidateAccountGuard } from './candidate-account.guard';

describe('CandidateAccountGuard', () => {
  let guard: CandidateAccountGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateAccountGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
