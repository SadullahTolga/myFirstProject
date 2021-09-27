import { TestBed } from '@angular/core/testing';

import { CandidateCvViewGuard } from './candidate-cv-view.guard';

describe('CandidateCvViewGuard', () => {
  let guard: CandidateCvViewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CandidateCvViewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
