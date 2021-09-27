import { TestBed } from '@angular/core/testing';

import { PositionGuard } from './position.guard';

describe('PositionGuard', () => {
  let guard: PositionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PositionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
