import { TestBed } from '@angular/core/testing';

import { CandidateImageGuard } from './candidate-image.guard';

describe('CandidateImageGuard', () => {
  let guard: CandidateImageGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateImageGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
