import { TestBed } from '@angular/core/testing';

import { CandidateExperienceGuard } from './candidate-experience.guard';

describe('CandidateExperienceGuard', () => {
  let guard: CandidateExperienceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateExperienceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
