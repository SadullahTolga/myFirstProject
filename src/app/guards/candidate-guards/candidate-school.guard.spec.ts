import { TestBed } from '@angular/core/testing';

import { CandidateSchoolGuard } from './candidate-school.guard';

describe('CandidateSchoolGuard', () => {
  let guard: CandidateSchoolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateSchoolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
