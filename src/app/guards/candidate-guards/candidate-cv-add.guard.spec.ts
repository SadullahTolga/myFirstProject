import { TestBed } from '@angular/core/testing';

import { CandidateCvAddGuard } from './candidate-cv-add.guard';

describe('CandidateCvAddGuard', () => {
  let guard: CandidateCvAddGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateCvAddGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
