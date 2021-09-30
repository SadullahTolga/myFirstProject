import { TestBed } from '@angular/core/testing';

import { CvInformationGuard } from './cv-information.guard';

describe('CvInformationGuard', () => {
  let guard: CvInformationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CvInformationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
