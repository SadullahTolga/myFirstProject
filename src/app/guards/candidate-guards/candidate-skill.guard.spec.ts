import { TestBed } from '@angular/core/testing';

import { CandidateSkillGuard } from './candidate-skill.guard';

describe('CandidateSkillGuard', () => {
  let guard: CandidateSkillGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateSkillGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
