import { TestBed } from '@angular/core/testing';

import { SystemEmployerService } from './system-employer.service';

describe('SystemEmployerService', () => {
  let service: SystemEmployerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SystemEmployerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
