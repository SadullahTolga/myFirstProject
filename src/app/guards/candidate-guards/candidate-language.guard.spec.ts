import { TestBed } from '@angular/core/testing';

import { CandidateLanguageGuard } from './candidate-language.guard';

describe('CandidateLanguageGuard', () => {
  let guard: CandidateLanguageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateLanguageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
